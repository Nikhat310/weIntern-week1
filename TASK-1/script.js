function handleSubmit(e) {
  e.preventDefault();
  alert("Thank you! Message sent (demo). Connect your form to backend later.");
  e.target.reset();
}

// 1. Animated reveal on scroll - PDF requirement
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("active");
    });
  },
  { threshold: 0.15 },
);
document.querySelectorAll(".card, .section-title, .hero").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});

// 2. Dark/Light toggle - Bonus feature from PDF
const toggleBtn = document.createElement("button");
toggleBtn.innerHTML = "🌙";
toggleBtn.style.cssText =
  "position:fixed;bottom:20px;right:20px;width:50px;height:50px;border-radius:50%;background:var(--pink);border:none;color:#fff;font-size:20px;cursor:pointer;z-index:999";
document.body.appendChild(toggleBtn);
toggleBtn.onclick = () => {
  document.body.classList.toggle("light");
  toggleBtn.innerHTML = document.body.classList.contains("light") ? "🌞" : "🌙";
  localStorage.setItem(
    "theme",
    document.body.classList.contains("light") ? "light" : "dark",
  );
};
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  toggleBtn.innerHTML = "🌞";
}

// 3. Smooth scroll + form
function handleSubmit(e) {
  e.preventDefault();
  e.target.style.transform = "scale(0.98)";
  setTimeout(() => {
    alert("Thank you! Message sent (demo)");
    e.target.reset();
    e.target.style.transform = "scale(1)";
  }, 200);
}

// 4. Project filtering animation (optional)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.transform = "translateY(-2px)";
  });
  link.addEventListener("mouseleave", () => {
    link.style.transform = "translateY(0)";
  });
});
