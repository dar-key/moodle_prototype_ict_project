// Add interactivity
document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", function () {
    document
      .querySelectorAll(".nav-item")
      .forEach((i) => i.classList.remove("active"));
    this.classList.add("active");
  });
});

document.querySelectorAll(".announcement-item").forEach((item) => {
  item.addEventListener("click", function () {
    alert(
      "Opening full announcement...\n\nIn a real application, this would show the complete announcement with options to mark as read, save, or share."
    );
  });
});

document.querySelectorAll(".action-card").forEach((card) => {
  card.addEventListener("click", function () {
    const action = this.querySelector("h3").textContent;
    alert(
      `Navigating to: ${action}\n\nIn the full application, this would take you to the relevant section.`
    );
  });
});

document.querySelectorAll(".course-item").forEach((item) => {
  item.addEventListener("click", function () {
    const course = this.querySelector(".course-name").textContent;
    alert(
      `Opening ${course} course page...\n\nThis would show course materials, announcements, assignments, and grades.`
    );
  });
});

// Search functionality
const searchInput = document.querySelector(".search-bar input");
searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    alert(
      `Searching for: "${this.value}"\n\nResults would include courses, announcements, and materials matching your query.`
    );
  }
});

// Notification bell
document
  .querySelector(".notification-icon")
  .addEventListener("click", function () {
    alert(
      "Notifications:\n\n1. New announcement in Programming I\n2. Assignment graded: Linear Algebra\n3. Upcoming deadline: Project Proposal (Tomorrow)"
    );
  });
