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

// Grade items functionality - NEW
document.querySelectorAll(".grade-item").forEach((item) => {
  item.addEventListener("click", function () {
    const assignment = this.querySelector(".grade-assignment").textContent;
    const score = this.querySelector(".grade-score").textContent;
    const course = this.querySelector(".grade-course-name").textContent;
    alert(
      `Grade Details\n\nCourse: ${course}\nAssignment: ${assignment}\nScore: ${score}\n\nThis would show:\n• Detailed feedback from teacher\n• Grading rubric breakdown\n• Submission history\n• Comments and suggestions`
    );
  });
});

// View all grades link - NEW
const viewAllGradesLink = document.querySelector(".view-all-link");
if (viewAllGradesLink) {
  viewAllGradesLink.addEventListener("click", function (e) {
    e.preventDefault();
    alert(
      "All Grades Page\n\nThis would show:\n• Complete grade history for all courses\n• GPA calculation\n• Course averages\n• Grade trends and analytics\n• Export to PDF option"
    );
  });
}

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
