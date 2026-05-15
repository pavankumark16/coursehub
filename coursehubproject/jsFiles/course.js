"use strict";

document.addEventListener("DOMContentLoaded", () => {


const courseVideos = {
  python: "https://www.youtube.com/embed/_uQrJ0TkZlc",
  web: "https://www.youtube.com/embed/UB1O30fR-EE",
  ml: "https://www.youtube.com/embed/Gv9_4yMHFhI",
  ds: "https://www.youtube.com/embed/ua-CiDNNj30",
  ai: "https://www.youtube.com/embed/JMUxmLyrhSk",
  java: "https://www.youtube.com/embed/grEKMHGYyns",
  mysql: "https://www.youtube.com/embed/7S_tz1z_5bA",
  js: "https://www.youtube.com/embed/PkZNo7MFNFg",
  fullstack: "https://www.youtube.com/embed/nu_pCVPKzTk",
  react: "https://www.youtube.com/embed/bMknfKXIFA8",
  node: "https://www.youtube.com/embed/TlB_eWDSMt4",
  backend: "https://www.youtube.com/embed/Oe421EPjeBE"
};


  /* ================= ENROLL BUTTON ================= */
 document.querySelectorAll(".cb").forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.innerText === "Enroll") {
      btn.innerText = "Enrolled";
      btn.style.backgroundColor = "green";
      btn.style.color = "white";
      btn.disabled = true;
      btn.style.cursor = "not-allowed";

      const msg = document.createElement("p");
      msg.innerText = "Start Learning";
      msg.style.color = "green";
      msg.style.fontSize = "14px";
      msg.style.marginTop = "5px";
      msg.style.cursor = "pointer";
      msg.style.fontWeight = "bold";

      const courseKey = btn.dataset.course;

      msg.addEventListener("click", () => {
        window.location.href = `player.html?course=${courseKey}`;
        console.log(courseKey);

      });

      btn.parentElement.appendChild(msg);
    }
  });
});




  /* ================= COURSE DATA ================= */
  const courseData = {
    python: {
      title: "Python Programming",
      duration: "8 Weeks",
      roadmap: [
        "Python Basics",
        "Control Flow",
        "Functions & OOP",
        "Modules & Libraries",
        "Mini Project"
      ]
    },
    web: {
      title: "Web Development",
      duration: "6 Weeks",
      roadmap: [
        "HTML Fundamentals",
        "CSS Styling",
        "JavaScript Basics",
        "Responsive Design",
        "Website Project"
      ]
    },
    ml: {
      title: "Machine Learning",
      duration: "10 Weeks",
      roadmap: [
        "Math for ML",
        "Python for ML",
        "Supervised Learning",
        "Unsupervised Learning",
        "ML Project"
      ]
    },
    ds: {
      title: "Data Science",
      duration: "12 Weeks",
      roadmap: [
        "Python & Statistics",
        "Data Analysis",
        "Visualization",
        "Machine Learning",
        "Capstone Project"
      ]
    },
    ai: {
      title: "Artificial Intelligence",
      duration: "14 Weeks",
      roadmap: [
        "Python Basics",
        "ML Concepts",
        "Deep Learning",
        "Neural Networks",
        "AI Project"
      ]
    },
    java: {
      title: "Java Programming",
      duration: "8 Weeks",
      roadmap: [
        "Java Basics",
        "OOP Concepts",
        "Collections",
        "Exception Handling",
        "Java Project"
      ]
    },
    mysql: {
      title: "MySQL Database",
      duration: "4 Weeks",
      roadmap: [
        "SQL Basics",
        "CRUD Operations",
        "Joins & Subqueries",
        "Indexes",
        "Database Project"
      ]
    },
    js: {
      title: "JavaScript",
      duration: "5 Weeks",
      roadmap: [
        "JS Basics",
        "DOM Manipulation",
        "Events",
        "ES6 Features",
        "Mini Project"
      ]
    },
    fullstack: {
      title: "Full Stack Development",
      duration: "16 Weeks",
      roadmap: [
        "Frontend Basics",
        "Backend Development",
        "Database Integration",
        "Authentication",
        "Full Stack Project"
      ]
    },
    react: {
      title: "React JS",
      duration: "6 Weeks",
      roadmap: [
        "React Basics",
        "Components & Props",
        "Hooks",
        "Routing",
        "React Project"
      ]
    },
    node: {
      title: "Node JS",
      duration: "6 Weeks",
      roadmap: [
        "Node Basics",
        "Express JS",
        "REST APIs",
        "Database Connection",
        "Backend Project"
      ]
    },
    backend: {
      title: "Back-End Development",
      duration: "8 Weeks",
      roadmap: [
        "Server Concepts",
        "APIs",
        "Authentication",
        "Database",
        "Backend Project"
      ]
    }
  };

  /* ================= POPUP LOGIC ================= */
  const popup = document.getElementById("detailsPopup");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".view-details").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.course;
      const course = courseData[key];

      if (!course) {
        alert("Course details coming soon!");
        return;
      }

      document.getElementById("pTitle").innerText = course.title;
      document.getElementById("pDuration").innerText = course.duration;

      const list = document.getElementById("pRoadmap");
      list.innerHTML = "";
      course.roadmap.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
      });

      popup.style.display = "block";
    });
  });

  closeBtn.onclick = () => popup.style.display = "none";

  window.onclick = e => {
    if (e.target === popup) popup.style.display = "none";
  };

});


const form = document.getElementById("contact-form");

// form.addEventListener("submit", function (e) {
//   e.preventDefault(); // stop page refresh

//   if (form.checkValidity()) {
//     alert("Your query was sent ✅");
//     form.reset(); // clear form after submit
//   }
// });


form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    name: form[0].value,
    email: form[1].value,
    subject: form[2].value,
    message: form[3].value
  };

  console.log("User Query:", data);
  alert("Your query was sent ✅");
  form.reset();
});

let body=document.getElementById("body");
let maincont = document.getElementById("maincont");
let light = document.getElementById("light");
let foot = document.getElementById("foot");
light.addEventListener("click",function(){
  light.innerText="Light";
  dark.innerText="🌙";
  body.style.background="white";
  body.style.color="black";
  maincont.style.border="3px solid black";
  maincont.style.background="orange";
  maincont.style.opacity="1";
})
let dark=document.getElementById("dark");
dark.addEventListener("click",function(){
  light.innerText="🌞";
  dark.innerText="Dark";
  body.style.background="black";
  body.style.color="white";
  maincont.style.border="3px solid white";
  maincont.style.background="gray";
  maincont.style.opacity="1";
  foot.style.color="yellow";
})
