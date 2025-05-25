// Sample course data
const courses = [
  {
    id: "course1",
    title: "HTML Basics",
    videoSrc: "videos/html_basics.mp4"
  },
  {
    id: "course2",
    title: "CSS Fundamentals",
    videoSrc: "videos/css_fundamentals.mp4"
  },
  {
    id: "course3",
    title: "JavaScript Intro",
    videoSrc: "videos/js_intro.mp4"
  }
];

// DOM elements
const courseList = document.getElementById("course-list");
const videoSection = document.getElementById("video-section");
const videoPlayer = document.getElementById("course-video");
const courseTitle = document.getElementById("course-title");

let currentCourseId = null;

// Load course list
function renderCourses() {
  courseList.innerHTML = "";
  courses.forEach(course => {
    const div = document.createElement("div");
    div.className = "course-item";
    div.textContent = course.title;

    // Check progress
    if (localStorage.getItem(course.id) === "completed") {
      div.classList.add("completed");
    }

    div.onclick = () => {
      currentCourseId = course.id;
      courseTitle.textContent = course.title;
      videoPlayer.src = course.videoSrc;
      videoSection.classList.remove("hidden");
    };

    courseList.appendChild(div);
  });
}

function markAsCompleted() {
  if (currentCourseId) {
    localStorage.setItem(currentCourseId, "completed");
    renderCourses();
    alert("Marked as completed!");
  }
}

// Initial render
renderCourses();


