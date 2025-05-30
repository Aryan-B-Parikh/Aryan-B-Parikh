
const skills = ["C", "C++", "Python", "MySQL", "Pandas", "NumPy", "scikit-learn"];
const projects = [
  {
    title: "GitHub Profile README",
    description: "A self-descriptive repository that reflects my interests and skills in AI/ML and development.",
    link: "https://github.com/Aryan-B-Parikh/Aryan-B-Parikh"
  },
  {
    title: "Data Visualizer",
    description: "Interactive Python project using matplotlib and seaborn to visualize real-world data.",
    link: "https://github.com/Aryan-B-Parikh/data-visualizer"
  }
];

const skillsList = document.getElementById("skills-list");
skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

const projectsList = document.getElementById("projects-list");
projects.forEach(project => {
  const projectDiv = document.createElement("div");
  const a = document.createElement("a");
  const p = document.createElement("p");
  a.href = project.link;
  a.target = "_blank";
  a.textContent = project.title;
  p.textContent = project.description;
  projectDiv.appendChild(a);
  projectDiv.appendChild(p);
  projectsList.appendChild(projectDiv);
});

const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
sections.forEach(section => observer.observe(section));

const topBtn = document.getElementById("topBtn");
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
