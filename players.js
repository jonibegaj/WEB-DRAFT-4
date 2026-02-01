const goalscorers = [
  { name: "Cristiano Ronaldo", goals: 140, club: "Manchester United, Real Madrid, Juventus", img: "players_img/cr7.jpg" },
  { name: "Lionel Messi", goals: 129, club: "Barcelona, PSG", img: "players_img/messi.jpg" },
  { name: "Robert Lewandowski", goals: 105, club: "Bayern Munich, Barcelona", img: "players_img/lewandowski.jpg" },
  { name: "Karim Benzema", goals: 90, club: "Real Madrid", img: "players_img/benzema.jpg" },
  { name: "Raúl", goals: 71, club: "Real Madrid, Schalke", img: "players_img/raul.jpg" },
  { name: "Thomas Müller", goals: 57, club: "Bayern Munich", img: "players_img/muller.jpg" },
  { name: "Ruud van Nistelrooy", goals: 56, club: "Man United, Real Madrid", img: "players_img/van_nistelrooy.jpg" },
  { name: "Kylian Mbappé", goals: 55, club: "PSG, Monaco, Real Madrid", img: "players_img/mbappe.jpg" },
  { name: "Thierry Henry", goals: 50, club: "Arsenal, Barcelona", img: "players_img/henry.jpg" },
  { name: "Erling Haaland", goals: 49, club: "Man City", img: "players_img/haaland.jpg" },
  { name: "Andriy Shevchenko", goals: 48, club: "Milan, Chelsea", img: "players_img/shevchenko.jpg" },
  { name: "Zlatan Ibrahimović", goals: 48, club: "PSG, Milan", img: "players_img/ibrahimovic.jpg" },
  { name: "Mohamed Salah", goals: 47, club: "Liverpool", img: "players_img/salah.jpg" },
  { name: "Eusébio", goals: 46, club: "Benfica", img: "players_img/eusebio.jpg" },
  { name: "Filippo Inzaghi", goals: 46, club: "Milan, Juventus", img: "players_img/inzaghi.jpg" },
  { name: "Didier Drogba", goals: 44, club: "Chelsea", img: "players_img/drogba.jpg" },
  { name: "Neymar", goals: 43, club: "Barcelona, PSG", img: "players_img/neymar.jpg" },
  { name: "Del Piero", goals: 42, club: "Juventus", img: "players_img/del_piero.jpg" },
  { name: "Antoine Griezmann", goals: 42, club: "Atletico Madrid", img: "players_img/griezmann.jpg" }
];

const assisters = [
  { name: "Cristiano Ronaldo", assists: 42, club: "Manchester United, Real Madrid, Juventus", img: "players_img/cr7.jpg" },
  { name: "Ángel Di María", assists: 41, club: "Benfica, Real Madrid, PSG", img: "players_img/di_maria.jpg" },
  { name: "Lionel Messi", assists: 40, club: "PSG, Barcelona", img: "players_img/messi.jpg" },
  { name: "Neymar", assists: 33, club: "PSG, Barcelona", img: "players_img/neymar.jpg" },
  { name: "Ryan Giggs", assists: 31, club: "Man Utd", img: "players_img/giggs.jpg" },
  { name: "Xavi Hernández", assists: 30, club: "Barcelona", img: "players_img/xavi.jpg" },
  { name: "Thomas Müller", assists: 30, club: "Bayern Munich", img: "players_img/muller.jpg" },
  { name: "Karim Benzema", assists: 29, club: "Real Madrid, Lyon", img: "players_img/benzema.jpg" },
  { name: "Andrés Iniesta", assists: 29, club: "Barcelona", img: "players_img/iniesta.jpg" },
  { name: "Kevin De Bruyne", assists: 29, club: "Man City", img: "players_img/de_bruyne.jpg" },
  { name: "Cesc Fàbregas", assists: 26, club: "Monaco, Arsenal, Bacelona, Chelsea", img: "players_img/fabregas.jpg" },
  { name: "Zlatan Ibrahimović", assists: 26, club: "Milan, Inter Milan, PSG, Barcelona", img: "players_img/ibrahimovic.jpg" },
  { name: "Luis Suárez", assists: 26, club: "Atletico Madrid, Barcelona, Liverpool", img: "players_img/suarez.jpg" },
  { name: "Franck Ribéry", assists: 25, club: "Bayern Munich", img: "players_img/ribery.jpg" },
  { name: "Vinícius Júnior", assists: 24, club: "Real Madrid", img: "players_img/vinicius.jpg" },
  { name: "Kylian Mbappé", assists: 24, club: "Real Madrid, PSG", img: "players_img/mbappe.jpg" },
  { name: "Marcelo", assists: 24, club: "Real Madrid", img: "players_img/marcelo.jpg" },
  { name: "Mesut Özil", assists: 24, club: "Arsenal, Real Madrid", img: "players_img/ozil.jpg" },
  { name: "Dani Alves", assists: 23, club: "PSG, Barcelona", img: "players_img/dani_alves.jpg" },
];
function getAvatarUrl(name) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`;
}

function createGoalscorerCard(player) {
  const playerId = player.name.toLowerCase().replace(/ /g, "-").replace(/é/g, "e").replace(/á/g, "a").replace(/í/g, "i").replace(/ó/g, "o").replace(/ú/g, "u").replace(/ü/g, "u").replace(/ö/g, "o").replace(/ñ/g, "n").replace(/ø/g, "o");
  return `
      <div class="player-card" data-player-id="${playerId}">
        <img src="${player.img}" alt="${player.name}" onerror="this.src='${getAvatarUrl(player.name)}'" />
        <h3>${player.name}</h3>
        <p>Goals: ${player.goals}</p>
        <p>Clubs: ${player.club}</p>
      </div>
    `;
}

function createAssisterCard(player) {
  const playerId = player.name.toLowerCase().replace(/ /g, "-").replace(/é/g, "e").replace(/á/g, "a").replace(/í/g, "i").replace(/ó/g, "o").replace(/ú/g, "u").replace(/ü/g, "u").replace(/ö/g, "o").replace(/ñ/g, "n").replace(/ø/g, "o");
  return `
      <div class="player-card" data-player-id="${playerId}">
        <img src="${player.img}" alt="${player.name}" onerror="this.src='${getAvatarUrl(player.name)}'" />
        <h3>${player.name}</h3>
        <p>Assists: ${player.assists}</p>
        <p>Clubs: ${player.club}</p>
      </div>
    `;
}

function displayPlayers() {
  document.getElementById("goalscorers").innerHTML = goalscorers.map(createGoalscorerCard).join('');
  document.getElementById("assisters").innerHTML = assisters.map(createAssisterCard).join('');
  setupPlayerClicks();
}

function setupPlayerClicks() {
  const modal = document.getElementById("playerModal");
  const modalContent = document.getElementById("playerDetailsContent");
  const closeBtn = document.querySelector(".close-btn");

  document.querySelectorAll(".player-card").forEach(card => {
    card.addEventListener("click", async () => {
      const playerId = card.getAttribute("data-player-id");
      if (!playerId) return;

      try {
        const response = await fetch(`http://localhost:5000/api/players/${playerId}`);
        if (!response.ok) throw new Error("Player details not found");

        const player = await response.json();

        modalContent.innerHTML = `
                  <h2>${player.name}</h2>
                  <p><strong>Birthday:</strong> ${player.birthday}</p>
                  <p><strong>Career Goals:</strong> ${player.careerGoals}</p>
                  <p><strong>Career Assists:</strong> ${player.careerAssists}</p>
                  <p><strong>Market Value:</strong> ${player.marketValue}</p>
                  <p><strong>Biography:</strong> ${player.biography}</p>
                `;

        modal.style.display = "block";
      } catch (error) {
        console.error("Error fetching player details:", error);
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

function filterPlayers(searchText) {
  const lowerSearch = searchText.toLowerCase();
  const filteredGoalscorers = goalscorers.filter(p => p.name.toLowerCase().includes(lowerSearch));
  const filteredAssisters = assisters.filter(p => p.name.toLowerCase().includes(lowerSearch));
  document.getElementById("goalscorers").innerHTML = filteredGoalscorers.map(createGoalscorerCard).join('');
  document.getElementById("assisters").innerHTML = filteredAssisters.map(createAssisterCard).join('');
  setupPlayerClicks();
}

document.getElementById("searchBar").addEventListener("input", (e) => {
  filterPlayers(e.target.value);
});

displayPlayers();
