// footer 標籤-----------------------------
$('.jq-account').css("backgroundColor", "#3c2313")
$('.jq-products').css("backgroundColor", "#3c2313")
$('.jq-company').css("backgroundColor", "#3c2313")
$('.footer-nav-info').css("backgroundColor", "#3c2313")
$('.footer-nav-3row').css({ "marginBottom": "0px", "padding": "10px" })

$('#account').on('click', function () {
  $('.jq-account').toggle()
})

$('#products').on('click', function () {
  $('.jq-products').toggle()
})

$('#company').on('click', function () {
  $('.jq-company').toggle()
})

$('#info').on('click', function () {
  $('.footer-nav-3row').toggle()
})

// hamburger 收縮動畫-------------------------------
$('.media-category').css("left", "-450px")

$('#hamburger').on('click', function () {
  $('.media-category').animate({
    left: -130 + 'px'
  }, 500)
})

$('#fa-times').on('click', function () {
  $('.media-category').animate({
    left: -450 + 'px'
  }, 500)
})

// hamburger 內容收縮 ------------------------
$('#category').on('click', function () {
  $('#category').next('ul').toggle()
})

$('#cat').on('click', function () {
  $('#cat').next('ul').toggle()
})

$('#dog').on('click', function () {
  $('#dog').next('ul').toggle()
})

$('#fish').on('click', function () {
  $('#fish').next('ul').toggle()
})

// 圈圈----------------------------------------
$(function () {
  let now = 0
  const total = $('.five-circle .circle').length
  $('.five-circle').css('width', total * 200)

  $('#btn-circle-r').on('click', function () {
    if (now < total - 1) {
      now++
      const move = now * 200
      $('.five-circle').stop(true, true)
      $('.five-circle').animate({ left: `-${move + 60}px` }, 1000)
    }
  })

  $('#btn-circle-l').on('click', function () {
    if (now > 0) {
      now--
      const move = now * 200
      $('.five-circle').stop(true, true)
      if (move == 0) {
        $('.five-circle').animate({ left: `${move + 60}px` }, 1000)
      } else {
        $(".five-circle").animate({ left: `-${move - 60}px` }, 1000)
      }
    }
  })
})

// 輪播圖-------------------------------------------
// $(function autoPlay() {
//   time = setInterval(function () {
//     $('.slide-img img').eq(0).css({ "transform": "translateX(-600px)", "transition": "2s" })
//     $('.slide-img img').eq(1).css({ "transform": "translateX(-600px)", "transition": "2s" })
//   }, 4000)
//   time2 = setInterval(function () {
//     $('.slide-img img').eq(0).css({ "transform": "translateX(0px)", "transition": "2s" })
//     $('.slide-img img').eq(1).css({ "transform": "translateX(0px)", "transition": "2s" })
//   }, 10000)
// })

time = setInterval(function () {
  $('.slide-img img').eq(0).css({ "transform": "translateX(-600px)", "transition": "2s" })
  $('.slide-img img').eq(1).css({ "transform": "translateX(-600px)", "transition": "2s" })
}, 4000)
time2 = setInterval(function () {
  $('.slide-img img').eq(0).css({ "transform": "translateX(0px)", "transition": "2s" })
  $('.slide-img img').eq(1).css({ "transform": "translateX(0px)", "transition": "2s" })
}, 10000)
