// 라이트 박스

// 윈도우 팝업
$('.window').click(function (e) {
  e.preventDefault();
  // windoe.open('파일명','팝업이름','옵션설정')
  // 옵션 : left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen
  window.open(
    'sample_popup.html',
    'popup01',
    'width=800, height=590, left=50, scrollbars=0, toolbar=0, menubar=0'
  );
});
// 레이어 팝업
$('.layer').click(function (e) {
  e.preventDefault();
  // $('#layer').css('display','block');
  // $('#layer').show();
  // $('#layer').fadeIn();
  $('#layer').slideDown(200);
});
$('.close').click(function (e) {
  e.preventDefault();
  // $('#layer').css('display','none');
  // $('#layer').hide();
  // $('#layer').fadeOut();
  $('#layer').slideUp(200);
});
// 탭메뉴
// 변수 = 데이터를 저장하는 저장소
let $tab_list = $('.tab_menu');
$tab_list.find('ul ul').hide();
$tab_list.find('li.active > ul').show();

function tabMenu(e) {
  e.preventDefault();
  let $this = $(this);
  $this
    .next('ul')
    .show()
    .parent('li')
    .addClass('active')
    .siblings('li')
    .removeClass('active')
    .find('>ul')
    .hide();
}
$tab_list.find('ul>li>a').click(tabMenu).focus(tabMenu);

// 배너
// html 마크업 셋팅 -> css 연동 -> 제이쿼리 연동 --> 제이쿼리 호출
$('.ban').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
});

//갤러리
$('.gallery_img').slick({
  arrows: false, //버튼 사라지게
  fade: true, //자연스럽게 슥
  pauseOnHover: true, //마우스 올리면 멈춤
  infinite: true, //무한대
  autoplay: true, //자동플레이
  autoplaySpeed: 3000, //자동플레이 속도
  speed: 300,
  slideToShow: 1,
});

$('.play').click(function () {
  $('.gallery_img').slick('slickPlay');
});
$('.pause').click(function () {
  $('.gallery_img').slick('slickPause');
});
$('.prev').click(function () {
  $('.gallery_img').slick('slickPrev');
});
$('.next').click(function () {
  $('.gallery_img').slick('slickNext');
});

//버튼을 클릭하면 전체 메뉴를 보이게 하세요.
$('.tit .btn').click(function (e) {
  // 깜빡거리는게 없어짐
  e.preventDefault;
  // $('#con_nav').css('display', 'block');
  // $('#con_nav').show();
  // $('#con_nav').fadeIn();
  // $('#con_nav').slideDown();
  // $('#con_nav').toggle();
  // $('#con_nav').fadeToggle();
  $('#con_nav').slideToggle(200);
  // $('.tit .btn').addClass('on');
  // addClass와 removeClass를 같이 쓸 수있는게 toggleClass이다.
  // this는 자기자신이라는 뜻
  $(this).toggleClass('on');
});

$('.lightGallery').lightGallery({
  thembnail: true,
  autoplay: true,
  pause: 3000,
  progressBar: true,
});
