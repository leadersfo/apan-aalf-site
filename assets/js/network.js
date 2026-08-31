// Animated node graph for the hero — abstract Asia-Pacific REN mesh.
// Draws in on load, then pulses gently. Respects prefers-reduced-motion.
(function () {
  const mount = document.getElementById("hero-net");
  if (!mount) return;
  const nodes = [
    { x: 60,  y: 60  }, { x: 190, y: 40  }, { x: 330, y: 90  },
    { x: 470, y: 55  }, { x: 590, y: 110 }, { x: 700, y: 60  },
    { x: 120, y: 170 }, { x: 260, y: 200 }, { x: 400, y: 175 },
    { x: 540, y: 210 }, { x: 660, y: 175 }, { x: 780, y: 130 },
    { x: 40,  y: 250 }, { x: 190, y: 270 }, { x: 350, y: 255 },
    { x: 500, y: 285 }, { x: 630, y: 265 }, { x: 760, y: 245 }
  ];
  const edges = [
    [0,1],[1,2],[2,3],[3,4],[4,5],[1,6],[2,7],[3,8],[4,9],[5,10],[5,11],
    [6,7],[7,8],[8,9],[9,10],[10,11],[6,12],[7,13],[8,14],[9,15],[10,16],[11,17],
    [12,13],[13,14],[14,15],[15,16],[16,17],[2,8],[9,4],[13,7]
  ];
  const NS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 820 340");
  svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
  svg.classList.add("hero-net-svg");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  edges.forEach(([a, b], i) => {
    const n1 = nodes[a], n2 = nodes[b];
    const line = document.createElementNS(NS, "line");
    line.setAttribute("x1", n1.x); line.setAttribute("y1", n1.y);
    line.setAttribute("x2", n2.x); line.setAttribute("y2", n2.y);
    line.setAttribute("stroke", "rgba(47,127,193,0.28)");
    line.setAttribute("stroke-width", "1");
    if (!reduce) {
      line.style.strokeDasharray = "260";
      line.style.strokeDashoffset = "260";
      line.style.animation = `draw-line 1.4s ease forwards ${0.5 + i * 0.03}s`;
    }
    svg.appendChild(line);
  });
  nodes.forEach((n, i) => {
    const c = document.createElementNS(NS, "circle");
    c.setAttribute("cx", n.x); c.setAttribute("cy", n.y);
    c.setAttribute("r", i % 5 === 0 ? 3.4 : 2.2);
    c.setAttribute("fill", i % 5 === 0 ? "#C9A24D" : "#2F7FC1");
    c.style.opacity = reduce ? "0.9" : "0";
    if (!reduce) c.style.animation = `fade-in 0.6s ease forwards ${0.3 + i * 0.05}s`;
    svg.appendChild(c);
  });
  mount.appendChild(svg);
  const style = document.createElement("style");
  style.textContent = `
    @keyframes draw-line { to { stroke-dashoffset: 0; } }
    @keyframes fade-in { to { opacity: 0.95; } }
    .hero-net-svg { width: 100%; height: 100%; display: block; }
  `;
  document.head.appendChild(style);
})();
