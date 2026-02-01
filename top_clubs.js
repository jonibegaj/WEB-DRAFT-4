document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("clubSearchBar");
  const cards = Array.from(document.querySelectorAll(".clubs-container .flip-card"));
  const modal = document.getElementById("clubModal");
  const modalContent = document.getElementById("clubDetailsContent");
  const closeBtn = document.querySelector(".close-btn");

  if (!searchInput) return;

  // Search functionality
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    cards.forEach(card => {
      const titleElement = card.querySelector(".flip-card-front h3");
      const name = titleElement ? titleElement.textContent.toLowerCase() : "";

      if (!query || name.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

  // Fetch and display details
  cards.forEach(card => {
    card.addEventListener("click", async () => {
      const clubId = card.getAttribute("data-club-id");
      if (!clubId) return;

      try {
        const response = await fetch(`http://localhost:5000/api/clubs/${clubId}`);
        if (!response.ok) throw new Error("Club details not found");
        
        const club = await response.json();
        
        modalContent.innerHTML = `
          <h2>${club.name}</h2>
          <p><strong>Founded:</strong> ${club.foundedYear}</p>
          <p><strong>UCL Seasons:</strong> ${club.uclSeasons}</p>
          <p><strong>Finals Played:</strong> ${club.uclFinalsPlayed}</p>
          <p><strong>Finals Won:</strong> ${club.uclFinalsWon}</p>
        `;
        
        modal.style.display = "block";
      } catch (error) {
        console.error("Error fetching club details:", error);
      }
    });
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});