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
