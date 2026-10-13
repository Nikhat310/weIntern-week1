// Task 3 - JS for interaction
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');
  const msg = document.getElementById('msg');
  let count = 0;

  btn.addEventListener('click', () => {
    count++;
    msg.innerText = `Clicked ${count} times - JS Working ✅`;
    btn.style.background = count % 2 === 0 ? '#ff9800' : '#fff';
  });

  // Reveal on scroll (bonus like Task 2)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){ e.target.style.opacity=1; e.target.style.transform='translateY(0)'; }
    });
  });
  
  document.querySelectorAll('.flex-card, .grid-item, .anim-card').forEach(el => {
    el.style.opacity=0;
    el.style.transform='translateY(20px)';
    el.style.transition='0.6s';
    observer.observe(el);
  });

  console.log('Task 3 CSS Challenge Loaded - SipBrew');
});