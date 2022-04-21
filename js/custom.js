$('.navbar-toggler.search-toggler').click(function() {
  $('.search.mobile').toggleClass('active');
});

$('#menu-close').click(function() {
  $('#navbars').removeClass('show');
});

jQuery(document).ready(function($) {
  // в класе faq при нажатии на элемент с тегом <dt>
  $(".map-faq dt").on('click', function() {
    // выезжает слайд с тегом <dd>
    $('.map-faq dd').not($(this).next()).hide(200);
    $(this).next().slideToggle(200);
  })
});

jQuery(document).ready(function($) {
  // в класе faq при нажатии на элемент с тегом <dt>
  $(".pm-accordeon").on('click', function() {
    // выезжает слайд с тегом <dd>
    $('pm-accordeon-ul li').hide(200);
  })
});

jQuery(document).ready(function($) {
  // в класе faq при нажатии на элемент с тегом <dt>
  $(".pm-accordeon").on('click', function() {
    // выезжает слайд с тегом <dd>
    $('ul').not($(this).next()).hide(500).prev().removeClass("pm-accordeon_active");
    $(this).next().slideToggle(500).prev().toggleClass("pm-accordeon_active");
  })
});

$(document).ready(function() {
  $('.partner-item').slick({
    accessibility: false,
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    dots: true,
    prevArrow: $('.partner-left button'),
    nextArrow: $('.partner-right button'),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.partners-news').slick({
    accessibility: false,
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    dots: false,
    prevArrow: $('.partner-news-left button'),
    nextArrow: $('.partner-news-right button'),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.us-slider-image').slick({
    accessibility: false,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    dots: true,
    prevArrow: $('.us-nav-prev button'),
    nextArrow: $('.us-nav-next button'),
    slidesToScroll: 1,
  });


  $('.ap-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    asNavFor: '.ap-img-for',
    dots: true,
    arrows : false
  });
 
  $('.ap-img-for').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.ap-img',
    focusOnSelect: true,
    centerMode: true,
  });

  $('.selection-image').slick({
    accessibility: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
  });
 
});


// Скрипт input-file-фото
let fields = document.querySelectorAll('.field__file');
Array.prototype.forEach.call(fields, function (input) {
  let label = input.nextElementSibling,
    labelVal = label.querySelector('.form-file-input').innerText;

  input.addEventListener('change', function (e) {
    let countFiles = '';
    if (this.files && this.files.length >= 1)
      countFiles = this.files.length;

    if (countFiles)
      label.querySelector('.form-file-input').innerText = 'Выбрано файлов: ' + countFiles;
    else
      label.querySelector('.form-file-input').innerText = labelVal;
  });
});
// Скрипт input-file-фото конец


jQuery(document).ready(function($) {
  // в класе faq при нажатии на элемент с тегом <dt>
  $(".arrow-accordeon").on('click', function() {
    // выезжает слайд с тегом <dd>
    $('.arrow-accordeon-wrap').not($(this).next()).hide(500).prev().removeClass("arrow-accordeon_active");
    $(this).next().slideToggle(500).prev().toggleClass("arrow-accordeon_active");
  })
});


$(function(){
  $('.sform-control-wrap').on('click','li', function(){
     $('li').removeClass("sform-control-active");
     $(this).addClass("sform-control-active")
  });
  
});

		// логика для модального окна2
$("[data-modal]").on("click", function(event){
  event.preventDefault();
  
  $("#modal_dialog").addClass('show');
  $("").removeClass('show');
  
  });
  
  $("#modal_close").on('click', function(){	
    $('#modal_dialog').removeClass('show');
  })
  
  $(document).click(function (e) {
    if ($(e.target).is('#modal_dialog')) {
      $("#modal_dialog").removeClass('show');
    }
});

// Маска
window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('#inputTel'), function(input) {
  var keyCode;
  function mask(event) {
    event.keyCode && (keyCode = event.keyCode);
    var pos = this.selectionStart;
    if (pos < 3) event.preventDefault();
    var matrix = "+7 (___) ___ ____",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, ""),
      new_value = matrix.replace(/[_\d]/g, function(a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a
      });
    i = new_value.indexOf("_");
    if (i != -1) {
      i < 5 && (i = 3);
      new_value = new_value.slice(0, i)
    }
    var reg = matrix.substr(0, this.value.length).replace(/_+/g,
      function(a) {
        return "\\d{1," + a.length + "}"
      }).replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
    if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

});

});

function colDiv(){
  const divs = $(".project-wraps > .project-inner");

  for (let i = 0; i < divs.length; i += 6) {
    divs.slice(i, i + 6).wrapAll("<div class='new-project-wraps'></div>");
  }

  lastElement = $(".new-project-wraps")[$(".new-project-wraps").length - 1];

  var elemCount = lastElement.childElementCount;

  if (elemCount < 6){
    lastElement.classList.add("flex-project-wraps");
    lastElement.classList.remove("new-project-wraps");
  }
}
colDiv();


