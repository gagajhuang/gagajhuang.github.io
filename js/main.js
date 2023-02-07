$(document).ready(function () {
  AOS.init({
    duration: 600,
  });

  $("#menu-btn").on("click", function (e) {
    e.preventDefault();
    $(".menu").toggleClass("menu-show");
  });
  $(".menu-close").on("click", function (e) {
    e.preventDefault();
    $(".menu").toggleClass("menu-show");
  });

  //收起 menu
  $(".menu a").on("click", function (e) {
    // e.preventDefault(); /*防止打開URL*/
    $(".menu").removeClass("menu-show");
  });

  // 滾動平滑效果
  // document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  //   anchor.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     document.querySelector(this.getAttribute("href")).scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   });
  // });
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 0);
            return false;
        }
    }
});
  
});
