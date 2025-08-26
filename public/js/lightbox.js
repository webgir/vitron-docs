const IMG_SELECTOR = ".sl-markdown-content img, main .sl-markdown-content img";

let state = {
  group: [],        // текущая группа изображений (массив DOM <img>)
  index: 0,         // активный индекс в группе
  mounted: false,
};

function ensureLightbox() {
  if (document.querySelector(".lightbox")) return;

  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.innerHTML = `
    <button class="lb-btn lb-prev" aria-label="Предыдущее">‹</button>
    <img class="lb-img" alt="" />
    <button class="lb-btn lb-next" aria-label="Следующее">›</button>
    <div class="lb-counter" aria-hidden="true"></div>
  `;
  document.body.appendChild(lb);

  // закрытие по клику на фон
  lb.addEventListener("click", (e) => {
    if (e.target === lb) closeLB();
  });

  // стрелки
  lb.querySelector(".lb-prev").addEventListener("click", (e) => {
    e.stopPropagation();
    prev();
  });
  lb.querySelector(".lb-next").addEventListener("click", (e) => {
    e.stopPropagation();
    next();
  });

  // клавиатура
  document.addEventListener("keydown", (e) => {
    if (lb.style.display !== "flex") return;
    if (e.key === "Escape") closeLB();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  });
}

function openLB(group, startIndex) {
  ensureLightbox();
  state.group = group;
  state.index = startIndex;

  const lb = document.querySelector(".lightbox");
  const imgEl = lb.querySelector(".lb-img");
  const counter = lb.querySelector(".lb-counter");

  const src = getSrc(state.group[state.index]);
  imgEl.src = src;
  lb.style.display = "flex";
  document.documentElement.style.overflow = "hidden"; // фикс скролла фона

  counter.textContent = `${state.index + 1} / ${state.group.length}`;
  updateArrows();
}

function closeLB() {
  const lb = document.querySelector(".lightbox");
  if (!lb) return;
  lb.style.display = "none";
  lb.querySelector(".lb-img").src = "";
  document.documentElement.style.overflow = "";
}

function prev() {
  if (state.group.length < 2) return;
  state.index = (state.index - 1 + state.group.length) % state.group.length;
  updateContent();
}
function next() {
  if (state.group.length < 2) return;
  state.index = (state.index + 1) % state.group.length;
  updateContent();
}

function updateContent() {
  const lb = document.querySelector(".lightbox");
  const imgEl = lb.querySelector(".lb-img");
  const counter = lb.querySelector(".lb-counter");
  imgEl.src = getSrc(state.group[state.index]);
  counter.textContent = `${state.index + 1} / ${state.group.length}`;
  updateArrows();
}

function updateArrows() {
  const lb = document.querySelector(".lightbox");
  const prevBtn = lb.querySelector(".lb-prev");
  const nextBtn = lb.querySelector(".lb-next");
  const many = state.group.length > 1;
  prevBtn.style.display = many ? "flex" : "none";
  nextBtn.style.display = many ? "flex" : "none";
}

function getSrc(imgEl) {
  return imgEl.currentSrc || imgEl.src;
}

function bindImages(root = document) {
  // в каждой .sl-markdown-content создаём свою группу
  root.querySelectorAll(".sl-markdown-content").forEach(section => {
    const imgs = Array.from(section.querySelectorAll("img"));
    imgs.forEach((img, i) => {
      if (img.dataset.lbBound === "1") return;
      img.dataset.lbBound = "1";
      img.style.cursor = "zoom-in";
      img.addEventListener("click", () => openLB(imgs, i));
    });
  });
}

// первичная инициализация + отслеживание изменений контента
function init() {
  if (state.mounted) return;
  state.mounted = true;
  ensureLightbox();
  bindImages(document);

  const root = document.querySelector("main") || document.body;
  const mo = new MutationObserver((mut) => {
    // перебиндить только если добавились картинки
    let need = false;
    for (const m of mut) {
      m.addedNodes && m.addedNodes.forEach(n => {
        if (n.nodeType === 1 && (n.matches?.("img") || n.querySelector?.("img"))) need = true;
      });
    }
    if (need) bindImages(document);
  });
  mo.observe(root, { childList: true, subtree: true });
}

document.addEventListener("DOMContentLoaded", init);
