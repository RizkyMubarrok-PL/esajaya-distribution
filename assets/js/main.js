//  menu
document.addEventListener("DOMContentLoaded", () => {
  function menuVisible() {
    if (window.innerWidth <= 820) {
      document.querySelector(".nav").classList.add("hidden");
      document.querySelector(".menu").classList.remove("d-none");
    } else {
      document.querySelector(".nav").classList.add("hidden");
      document.querySelector(".menu").classList.add("d-none");
    }
  }
  menuVisible();

  window.addEventListener("resize", () => {
    menuVisible();
  });

  document.querySelector(".menu").addEventListener("click", () => {
    if (document.querySelector(".nav.hidden")) {
      document.querySelector(".nav").classList.remove("hidden");
    } else {
      document.querySelector(".nav").classList.add("hidden");
    }
  });

  document.addEventListener("click", (event) => {
    if (window.innerWidth <= 820 && !document.querySelector(".menu").contains(event.target) && !document.querySelector(".nav").contains(event.target)) {
      if (!document.querySelector(".nav.hidden")) {
        document.querySelector(".nav").classList.add("hidden");
      }
    }
  });
});

//  logo - refresh
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".logo").addEventListener("click", () => {
    window.location = "index.html";
  });
});

//  nav aktif
document.addEventListener("scroll", () => {
  document.querySelectorAll(".content[id]").forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (window.scrollY > sectionTop && window.scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll(".nav-link").forEach((link) => {
        if (link.getAttribute("href") === "#" + sectionId) {
          link.classList.add("aktif");
        } else {
          link.classList.remove("aktif");
        }
      });
    }
  });
});

//  swiper js
document.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });
});

//produk overlay
document.addEventListener('DOMContentLoaded', () => {
  const prd_images = document.querySelectorAll('.swiper-wrapper .swiper-slide img');
  const overlay_product = document.getElementById('overlay-product');
  const prd_zoomedImg = document.getElementById('zoomed-img');

  prd_images.forEach(img => {
    img.addEventListener('click', () => {
      // console.log(img.src)
      prd_zoomedImg.src = img.src;
      overlay_product.classList.add('active');
    });
  });

  overlay_product.addEventListener('click', () => {
    overlay_product.classList.remove('active');
  });
});

//galeri overlay
document.addEventListener("DOMContentLoaded", () => {
  const gallery_images = document.querySelectorAll(".img-container img");
  const overlay_gallery = document.getElementById("overlay-gallery");
  const zoomedImg = document.getElementById("img-zoomed");

  gallery_images.forEach((img) => {
    img.addEventListener("click", () => {
      // console.log('active');
      // console.log(img.src)
      zoomedImg.src = img.src;
      overlay_gallery.classList.add("active");
    });
  });

  overlay_gallery.addEventListener("click", () => {
    overlay_gallery.classList.remove("active");
  });
});

//img-client
// 