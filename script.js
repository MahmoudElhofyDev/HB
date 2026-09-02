let currentPage = 1;

const totalPages = 5;

const song = document.getElementById("song");

const miniPlay = document.getElementById("miniPlay");


/* ==========================
   التنقل بين الصفحات
========================== */

function showPage(pageNumber) {

  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const page = document.getElementById(
    "page" + pageNumber
  );

  if (page) {
    page.classList.add("active");
  }
}


function nextPage() {

  if (currentPage < totalPages) {

    currentPage++;

    showPage(currentPage);

  }

}


function previousPage() {

  if (currentPage > 1) {

    currentPage--;

    showPage(currentPage);

  }

}


/* ==========================
   تشغيل الأغنية
========================== */

function startMusic() {

  song.play()
    .then(() => {

      updatePlayer(true);

    })
    .catch(() => {

      console.log("اضغط زر التشغيل لتشغيل الأغنية");

    });

}


function toggleMusic() {

  if (song.paused) {

    song.play()
      .then(() => {

        updatePlayer(true);

      })
      .catch(() => {

        console.log("ضع ملف الأغنية داخل assets");

      });

  } else {

    song.pause();

    updatePlayer(false);

  }

}


function updatePlayer(isPlaying) {

  miniPlay.textContent =
    isPlaying ? "❚❚" : "▶";

  document.querySelectorAll(".play-button")
    .forEach(button => {

      button.textContent =
        isPlaying ? "❚❚" : "▶";

    });

}


song.addEventListener("play", () => {
  updatePlayer(true);
});


song.addEventListener("pause", () => {
  updatePlayer(false);
});


/* ==========================
   العد التنازلي
========================== */

const targetDate =
  new Date("2026-09-15T00:00:00");


function updateCountdown() {

  const now = new Date();

  const difference =
    targetDate - now;


  if (difference <= 0) {

    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";

    return;
  }


  const days =
    Math.floor(
      difference /
      (1000 * 60 * 60 * 24)
    );


  const hours =
    Math.floor(
      (difference %
        (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
    );


  const minutes =
    Math.floor(
      (difference %
        (1000 * 60 * 60)) /
      (1000 * 60)
    );


  const seconds =
    Math.floor(
      (difference %
        (1000 * 60)) /
      1000
    );


  document.getElementById("days").textContent =
    String(days).padStart(2, "0");


  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");


  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");


  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");
}


updateCountdown();

setInterval(updateCountdown, 1000);


/* ==========================
   القلوب الطائرة
========================== */

function createFloatingHeart() {

  const heart =
    document.createElement("div");

  heart.className =
    "floating-heart";


  const heartTypes = [
    "❤️",
    "💗",
    "💕",
    "💖",
    "💓",
    "♡",
    "♥"
  ];


  heart.textContent =
    heartTypes[
      Math.floor(
        Math.random() *
        heartTypes.length
      )
    ];


  heart.style.left =
    Math.random() * 100 + "vw";


  heart.style.fontSize =
    (15 + Math.random() * 22) + "px";


  heart.style.setProperty(
    "--move",
    (-120 + Math.random() * 240) + "px"
  );


  heart.style.animationDuration =
    (4 + Math.random() * 4) + "s";


  document.body.appendChild(heart);


  setTimeout(() => {

    heart.remove();

  }, 8000);

}


setInterval(
  createFloatingHeart,
  600
);


/* قلوب تبدأ فور فتح الموقع */

for (let i = 0; i < 8; i++) {

  setTimeout(
    createFloatingHeart,
    i * 300
  );

}