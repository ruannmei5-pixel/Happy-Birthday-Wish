function buatBintang() {
  for(let i=0; i<40; i++){
    const s = document.createElement("div");
    s.className = "star";
    s.textContent = "★";
    s.style.left = Math.random()*100 + "vw";
    s.style.top = -10 + "px";
    s.style.fontSize = (10+Math.random()*20) + "px";
    s.style.animationDuration = (3+Math.random()*4) + "s";
    document.body.appendChild(s);
    setTimeout(()=>s.remove(), 7000);
  }
}

buatBintang();
setInterval(buatBintang, 3000); // bintang terus turun
