// const photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg", "photo6.jpg", "photo7.jpg", "photo8.jpg", "photo9.jpg", "photo10.jpg", "photo11.jpg"];
// let current = 0;
const photos = [
  { src: "photo1.jpg", caption: "Foto favoti aku!! We Look so happy~" },
  { src: "photo2.jpg", caption: "Our Big Almamater!!! \nLangkah kita kala itu benar-benar bersinar " },
  { src: "photo3.jpg", caption: "ahahaha u noticed my cam was broken huhuu~" },
  { src: "photo4.jpg", caption: "I loved semua cara kita untuk saling tolong menolong. \n Let's cary it together, \n Yuu always have my back Priss!" },
  { src: "photo5.jpg", caption: "Rasanya udah lama kita tida menikmati banyak rasa berdua. \nNonton yukk?? \nada film kesukaan kita ga yaa?" },
  { src: "photo6.jpg", caption: "Ini nangisin playlist kita!! \nI hug you, always!" },
  { src: "photo7.jpg", caption: "Our favorit menuuu!!! \nLaper Ga?? Yokk, \nmakan bareng aku lagi yokk???\nKalau perutnya lapar, hatinya jangan ikut laper yaaa anak sulung" },
  { src: "photo8.jpg", caption: "HAHAHAHHA we so much Good, together" },
  { src: "photo9.jpg", caption: "EVRISKAAAA, You there??? KAAA, PRISSSS, AKUUU SELALUU MENDUKUNGMU YAAAAAA!!! \njangan sembunyi terlalu jauh, dan sembunyinya sendirian yaa, \nno matter what, you always have my back! " },
  { src: "photo10.jpg", caption: "HAHAHAHAH kali ini kita sesusah itu mo tidur, \nbut apakah istirahatmu cukup pris?" },
  { src: "photo11.jpg", caption: "Terima Kasih sudah sering sekali menemaniku untuk menikmati banyak rasa, \ndan izinkan aku juga melakukan hal yang sama" },
  { src: "photo12.jpg", caption: "You Really the best part of my journey life prisss" },
  { src: "photo13.jpg", caption: "I miss Us. I really happy To Know you. Pris, semoga hadirku tidak memperkeruhmu yaa \ndan maaf susunan webnya masih berantakan \nmaaf aku masih sulit menentukan prioritas terbaikku \nmenurutku semua adalah prioritas" }
];
let current = 0;
const photoElem = document.getElementById("photo");
const captionElem = document.getElementById("caption");

setInterval(() => {
  current = (current + 1) % photos.length;

  // Fade-out
  captionElem.style.opacity = 1;

  setTimeout(() => {
    // Ganti foto dan caption
    photoElem.src = photos[current].src;
    captionElem.innerHTML = photos[current].caption;

    // Fade-in
    captionElem.style.opacity = 1;
  }, 400);
}, 6000); // 4 detik ganti

function revealWish() {
  document.getElementById("hiddenWish").classList.remove("hidden");

  // Play music setelah tombol diklik
  const audio = new Audio('music.mp3');
  audio.play();
}

const message = "18 Juni 2025 \n Hai Pewis!  Sampai juga kita di doa tahun lalu, bertemu dan tetap berteman di ulangtahung berikutnya.Mari bertumbuh dan menjadi teman yang baik disetiap masa hidup kita. <33";
let index = 0;

function typeEffect() {
  const target = document.getElementById("typingText");

  if (index < message.length) {
    const char = message.charAt(index) === '\n' ? '<br>' : message.charAt(index);
    target.innerHTML += char;
    index++;
    setTimeout(typeEffect, 90); // Kecepatan ketik
  } else {
    // Munculkan tombol setelah efek selesai
    document.getElementById("nextPart").style.display = "block";
  }
}

window.onload = typeEffect;

let clickCount = 0;
const button = document.getElementById("nextBtn");

const buttonTexts = [
  "Ehh... belum, coba lagi 🤭",
  "Dikit lagi... klik sekali lagi 🫣",
  "Siap? Klik untuk buka kejutan! 🎉"
];

button.addEventListener("click", () => {
  clickCount++;
  if (clickCount < 3) 
  {
    button.textContent = buttonTexts[clickCount - 1];
    button.style.marginLeft = Math.floor(Math.random() * 200) + "px"; // pindah posisi
  } 
  else 
  {// Sembunyikan tombol lanjut
      document.getElementById("nextPart").style.display = "none";
      // Tampilkan bagian hadiah
      document.getElementById("giftSection").style.display = "block";

      // Munculkan pesan di hiddenWish
      const hiddenWish = document.getElementById("hiddenWish");
      hiddenWish.classList.remove("hidden");

      // Mainkan musik jika mau
      // const audio = new Audio('DISKORIA.mp3');
      // audio.play();

      // Ledakan konfeti
      if (window.confetti) 
      {
        confetti({
          particleCount: 3000,
          spread: 3000,
          origin: { x: 0.5, y: 0.4 }
          // shapes: ['circle'],
          // scalar: 1.4,
          // colors: ['#ff69b4', '#ff1493', '#ffb6c1']
        });
      } 
      else 
      {
        console.warn("confetti.js belum dimuat");
      }
      // Tampilkan slide message setelah 1 detik
      setTimeout(() => {
        const slide = document.getElementById("slideMessage");
        slide.classList.remove("hidden");
        slide.classList.add("show");
      }, 1000);

      // Tampilkan video setelah 3 detik
      setTimeout(() => {
        const video = document.getElementById("videoContainer");
        video.classList.remove("hidden");
        video.scrollIntoView({ behavior: "smooth" });
      }, 3000);
    }
});

// Bagian quotes berganti otomatis
const quotes = [
  "You are the best chapter in my life ✨",
  "Terima kasih sudah menjadi dirimu 💛",
  "Kalau capek, istirahat ya. Pelan-pelan aja 🤍",
  "Kamu pantas bahagia, Priss 🌷",
  "Aku bersyukur pernah dan masih ada kamu",
  "Selalu ada peluk meski dari jauh 🤗"
];

let qIndex = 0;
function startQuotes() {
  const quoteText = document.getElementById("quoteText");
  document.getElementById("quoteSlide").classList.remove("hidden");
  quoteText.textContent = quotes[qIndex];
  setInterval(() => {
    qIndex = (qIndex + 1) % quotes.length;
    quoteText.textContent = quotes[qIndex];
  }, 4000);
}

// Munculkan quotes dan hug setelah slide show selesai
setTimeout(() => {
  startQuotes();
}, 5000); // quotes muncul setelah 5 detik

setTimeout(() => {
  document.getElementById("hugSection").classList.remove("hidden");
}, 10000); // pelukan muncul setelah 10 detik

let clickStart = 0;
const btn = document.getElementById("startBtn");
const messages = [
  "Senyum duluuuu!! 😄",
  "Lebih lebarrrrr dan mari menari bersamaakuu 💃🕺",
];

btn.addEventListener("click", () => {
  clickStart++;

  if (clickStart < 3) {
    btn.textContent = messages[clickStart - 1];
  } else {
    btn.style.display = "none"; // sembunyikan tombol

    // Tampilkan konten utama
    document.getElementById("mainContent").style.display = "block";

    // Play musik
    document.getElementById("bgMusic").play();

    // Mulai animasi ketik jika ada
    if (typeof typeEffect === "function") {
      typeEffect();
    }
  }
});
// let clickStart = 0;
// const btn = document.getElementById("startBtn");
// const messages = [
//   "senyum duluuuu!! 😄",
//   "Lebih lebarrrrr dan mari menari bersamaakuu 💃🕺",
// ];

// btn.addEventListener("click", () => {
//   clickStart++;

//   if (clickStart < 3) {
//     btn.textContent = messages[clickStart - 1];
//   } else {
//     btn.style.display = "none"; // sembunyikan tombol

//     // Mulai musik
//     const music = document.getElementById("bgMusic");
//     music.play();

//     // Jalankan animasi mengetik dan semua isi
//     if (typeof typeEffect === "function") {
//       typeEffect(); // Panggil fungsi animasi ketik
//     }

//     // Tampilkan semua bagian awal halaman (jika sebelumnya disembunyikan)
//     document.getElementById("typingText").style.display = "block";
//     document.querySelector("h1").style.display = "block";
//     document.querySelector("p").style.display = "block";
//     document.querySelector(".slideshow").style.display = "block";
//   }
// });



