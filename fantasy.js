let allPlayers = [];
let selectedTeam = {
    GK: [null],
    DEF: [null, null],
    MID: [null],
    ATK: [null, null]
};
let selectedCount = 0;

// DOM Elements
const playerList = document.getElementById('playerList');
const selectedCountDisplay = document.getElementById('selectedCount');
const submitTeamBtn = document.getElementById('submitTeamBtn');
const usernameInput = document.getElementById('fantasyUsername');
const tabBtns = document.querySelectorAll('.tab-btn');

// Fetch Players
async function fetchPlayers() {
    try {
        const response = await fetch('http://localhost:5000/api/fantasy/players');
        allPlayers = await response.json();
        renderPlayerPool('ALL');
    } catch (error) {
        console.error("Error fetching players:", error);
    }
}

// Render Player Pool
function renderPlayerPool(posFilter) {
    const filtered = posFilter === 'ALL' ? allPlayers : allPlayers.filter(p => p.position === posFilter);
    playerList.innerHTML = filtered.map(player => {
        const isSelected = Object.values(selectedTeam).flat().some(p => p && p.id === player.id);
        return `
            <div class="f-player-card ${isSelected ? 'selected' : ''}" onclick="togglePlayer(${player.id})">
                <h4>${player.name}</h4>
                <p>${player.team} | ${player.position}</p>
                <p>Value: ${player.marketValue}</p>
            </div>
        `;
    }).join('');
}

// Toggle Player Selection
function togglePlayer(playerId) {
    const player = allPlayers.find(p => p.id === playerId);
    if (!player) return;

    const pos = player.position;
    const currentSlots = selectedTeam[pos];
    const existingIndex = currentSlots.findIndex(p => p && p.id === playerId);

    if (existingIndex !== -1) {
        // Remove player
        currentSlots[existingIndex] = null;
        selectedCount--;
    } else {
        // Add player if slot available
        const emptySlot = currentSlots.indexOf(null);
        if (emptySlot !== -1) {
            if (selectedCount < 6) {
                currentSlots[emptySlot] = player;
                selectedCount++;
            } else {
                alert("You can only select 6 players total!");
                return;
            }
        } else {
            alert(`No more slots for ${pos}!`);
            return;
        }
    }

    updateUI();
}

// Update UI
function updateUI() {
    selectedCountDisplay.textContent = selectedCount;
    submitTeamBtn.disabled = selectedCount < 6;

    // Update Pitch Slots
    Object.keys(selectedTeam).forEach(pos => {
        selectedTeam[pos].forEach((player, idx) => {
            const slotId = `${pos.toLowerCase()}${idx + 1}`;
            const slot = document.getElementById(slotId);
            if (slot) {
                if (player) {
                    slot.innerHTML = `<strong>${player.name.split(' ').pop()}</strong><small>${player.team}</small>`;
                    slot.classList.add('active');
                } else {
                    slot.innerHTML = `<span>+</span>`;
                    slot.classList.remove('active');
                }
            }
        });
    });

    renderPlayerPool(document.querySelector('.tab-btn.active').dataset.pos);
}

// Tab Filtering
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderPlayerPool(btn.dataset.pos);
    });
});

// Submit Team
submitTeamBtn.addEventListener('click', async () => {
    const username = usernameInput.value.trim();
    if (!username) {
        alert("Please enter a team name!");
        return;
    }

    const playerIds = Object.values(selectedTeam).flat().map(p => p.id).join(',');
    const totalPoints = calculateSimulatedPoints();

    try {
        const response = await fetch('http://localhost:5000/api/fantasy/team', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, playerIds, totalPoints })
        });

        if (response.ok) {
            alert(`Team "${username}" submitted! Simulated Points: ${totalPoints}`);
            loadLeaderboard();
        }
    } catch (error) {
        console.error("Error submitting team:", error);
    }
});

// Scoring Logic (Simulated for Demo)
function calculateSimulatedPoints() {
    let total = 0;
    Object.values(selectedTeam).flat().forEach(player => {
        if (!player) return;

        // Randomly simulate a match performance
        const goals = Math.random() > 0.7 ? 1 : 0;
        const assists = Math.random() > 0.8 ? 1 : 0;
        const cleanSheet = Math.random() > 0.5;

        if (player.position === 'GK') {
            if (cleanSheet) total += 6;
        } else if (player.position === 'DEF') {
            if (cleanSheet) total += 6;
            total += (goals * 9) + (assists * 4);
        } else if (player.position === 'MID') {
            if (cleanSheet) total += 3;
            total += (goals * 7) + (assists * 5);
        } else if (player.position === 'ATK') {
            total += (goals * 9) + (assists * 4);
        }
    });
    return total;
}

async function loadLeaderboard() {
    const modal = document.getElementById('fantasyLeaderboardModal');
    const content = document.getElementById('fantasyLeaderboardContent');

    try {
        const response = await fetch('http://localhost:5000/api/fantasy/leaderboard');
        const data = await response.json();

        let html = `
            <div class="leaderboard-header">
                <span>Rank</span>
                <span>Team</span>
                <span>Points</span>
            </div>
        `;

        html += data.map((t, index) => `
            <div class="leaderboard-row ${index === 0 ? 'top-player' : ''}">
                <span class="rank">#${index + 1}</span>
                <span class="user">${t.username}</span>
                <span class="pts">${t.totalPoints} pts</span>
            </div>
        `).join('');

        content.innerHTML = html;
        modal.style.display = 'block';
    } catch (error) {
        console.error("Error loading leaderboard:", error);
    }
}

// Close Modal
document.querySelector('.close-btn').onclick = () => {
    document.getElementById('fantasyLeaderboardModal').style.display = 'none';
};

// Init
fetchPlayers();
