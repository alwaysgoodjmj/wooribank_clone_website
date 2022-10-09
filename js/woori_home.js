$(function () {
  // resize nav evt
  var win_w = $(window).width();

  $(this).on("resize", function () {
    win_w = $(window).width();
    if (win_w > 980) {
      $(".submenu").removeAttr("style");
    }
  });

  $(".toggle").on("click", function () {
    $(".menu_wrap").fadeToggle();
  });

  $("#login>li").on("mouseenter", function () {
    $(this).children(".submenu").show();
  });
  $("#login>li").on("mouseleave", function () {
    $(this).children(".submenu").hide();
  });

  $("#login>li").on("mouseenter", function () {
    if (win_w > 980) {
      $(this).children(".submenu").show();
    }
  });

  $("#maingnb>li").on("mouseenter", function () {
    if (win_w > 980) {
      $(this).children(".submenu").stop().slideDown();
    } else {
      $("#maingnb>li>a").off("click");
      $("#maingnb>li>a").on("click", function () {
        $(".submenu").stop().slideUp();
        $(this).next(".submenu").stop().slideToggle();
      });
    }
  });

  $("#maingnb>li").on("mouseleave", function () {
    if (win_w > 980) {
      $(this).children(".submenu").stop(true, true).hide();
    }
  });

  // main slide 
  var swiper = new Swiper(".mainslide", {
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // footer website link evt
  $(".more>li").on("mouseenter", function () {
    $(this).children(".link_site").show();
  });

  $(".more>li").on("mouseleave", function () {
    $(this).children(".link_site").hide();
  });

  // mid_menu click event
  isShow = true;
  $(".mid_menu>li:last-of-type, .q_btn").click(function () {
    if (isShow) {
      isShow = false;
      $(".mid_menu").hide();
      $(".q_menu").addClass("show");
    } else {
      isShow = true;
      $(".mid_menu").show();
      $(".q_menu").removeClass("show");
    }
  });
});
