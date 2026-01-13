const profile = {
  tagline: "AI & ML Engineer in the making · Builder · Problem Solver",
  about: `I am a B.Tech student in Artificial Intelligence and Machine Learning with a deep interest in programming,
  machine learning, and real-world problem solving. I have built ML-powered applications such as a Fake News Detection
  system and gained industry exposure through internships at IBM and Infeanet Media.`
};

const skills = [
  "Python","C++","Machine Learning","NLP","TF-IDF",
  "Streamlit","HTML","CSS","JavaScript","Data Structures","OOP"
];

const experience = [
  {
    title: "PR & Web Development Intern",
    company: "Infeanet Digital Solution & Web Media",
    desc: "Worked on digital creatives, responsive web pages, UI/UX decisions, and PR campaign execution."
  },
  {
    title: "Machine Learning Intern",
    company: "IBM SkillsBuild (CSRBOX)",
    desc: "Hands-on ML workflows, data preprocessing, model training, evaluation, and Python-based labs."
  }
];

const projects = [
  {
    title: "Fake News Detection Web App",
    desc: "NLP-based ML application using TF-IDF and Streamlit to classify news as real or fake.",
    tech: "Python · NLP · ML · Streamlit"
  }
];

document.getElementById("tagline").innerText = profile.tagline;
document.getElementById("aboutText").innerText = profile.about;

skills.forEach(s=>{
  const el=document.createElement("span");
  el.innerText=s;
  document.getElementById("skillsContainer").appendChild(el);
});

experience.forEach(e=>{
  document.getElementById("experienceContainer").innerHTML+=`
    <div class="glass">
      <h4>${e.title}</h4>
      <p><strong>${e.company}</strong></p>
      <p>${e.desc}</p>
    </div>`;
});

projects.forEach(p=>{
  document.getElementById("projectsContainer").innerHTML+=`
    <div class="glass">
      <h4>${p.title}</h4>
      <p>${p.desc}</p>
      <p><strong>${p.tech}</strong></p>
    </div>`;
});
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(reg => console.log("✅ Service Worker registered", reg))
      .catch(err => console.log("❌ Service Worker error", err));
  });
}
