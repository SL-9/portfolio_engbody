$(function () {

  //スクロールエフェクト
  function fadeUpEffect() {
    $('.fadeUpEffect').each(function () {   /* .each()で、「.fadeUpEffect」が付いた要素1つずつに順番に処理を行う*/
      var elemPos = $(this).offset().top + 100;   /* .offset().topで、ページの最上部から「.fadeUpEffect」が付いた要素までの距離を取得して、変数elemPosに代入*/
      var scroll = $(window).scrollTop();   /* .scrollTop()で、スクロールした量を取得して、変数scrollに代入*/
      var windowHeight = $(window).height();   /* .height()で、ウィンドウの高さを取得して、変数windowHeightに代入*/
      if (scroll >= elemPos - windowHeight) {   /* スクロール量が要素の位置を過ぎた瞬間、「.fadeUpEffect」が付いた要素にfadeUpクラスが付きます*/
        $(this).addClass('fadeUp');
      }
    });
  }
  $(window).scroll(function () {
    fadeUpEffect();
  });

  //トレーナーのタブ
  $tabs = $('.tab');
  $('.tab').on('click', function () {    //クリックしたらどうなるか
    $('.tab--active').removeClass('tab--active');    //既にactiveクラスがある要素からこのクラスを削除
    $(this).addClass('tab--active');    //クリックされたタブにactiveクラスを追加
    const index = $tabs.index(this);    //クリックされたタブが、全タブの中で何番目に位置しているかを判定
    $('.tab-content').removeClass('show').eq(index).addClass('show');    //すべてのコンテンツからshowクラスを削除し、クリックされたタブに対応するコンテンツにのみshowクラスを追加
  })

  // FAQのアコーディオン
  $('.accordion__question').on('click', function () {
    $(this).toggleClass('active');
    $(this).next().slideToggle(200);
  })

  // FAQのアコーディオン
  var $pageTop = $('.page-top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $pageTop.fadeIn();
    } else {
      $pageTop.fadeOut();
    }
  });
  $pageTop.on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 200);
    return false;
  });


  // スクロールに応じてヘッダーにactiveクラスを付与
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.header').addClass('header--active');
    } else {
      $('.header').removeClass('header--active');
    }
  })

  // Swiperの初期化
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  // スクロールイベント
  $(".price-list").scroll(function () {
    if ($(this).scrollLeft() > 20) {
      $(" .price-list__scroll").fadeOut();
    }
  });

  /*
  背景色が伸びてテキストを表示
  */
  // 動きのきっかけの起点となるアニメーションの名前を定義
  function BgFadeAnime() {

    // 背景色が伸びて出現（左から右）
    $('.bgLRextendTrigger').each(function () { //bgLRextendTriggerというクラス名が
      var elemPos = $(this).offset().top - 50;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
      } else {
        $(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
      }
    });

    // 文字列を囲う子要素
    $('.bgappearTrigger').each(function () { //bgappearTriggerというクラス名が
      var elemPos = $(this).offset().top - 50;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
      } else {
        $(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
      }
    });
  }

  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

  // 画面が読み込みれたらすぐに動かしたい場合の記述
  $(window).on('load', function () {
    BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

});


$('.slider').slick({
  arrows: true,

  // arrowsを入れる設定
  appendArrows: $('.arrow_box'),
  prevArrow: '<div class="slide-arrow prev-arrow"></div>',
  nextArrow: '<div class="slide-arrow next-arrow"></div>',

  dots: true,
  dotsClass: 'dots-class',
});

// new ScrollHint(".js-table-scroll-hint");

document.addEventListener('DOMContentLoaded', () => {
  const tableContainers = document.querySelectorAll('.table-container');

  for (const tableContainer of tableContainers) {
    const scrollHint = document.createElement('div');
    scrollHint.className = 'scroll-hint scroll-hint--show';

    scrollHint.innerText = 'スクロール';
    tableContainer.appendChild(scrollHint);

    const showScrollHint = () => {
      if (tableContainer.scrollWidth > tableContainer.clientWidth) {
        scrollHint.classList.add('scroll-hint--show');
      } else {
        scrollHint.classList.remove('scroll-hint--show');
      }
    };
    showScrollHint();

    tableContainer.addEventListener('scroll', () => {
      scrollHint.classList.remove('scroll-hint--show');
    });
  }
});

// アコーディオン実装

// const accordion = document.querySelectorAll(".FAQ__accordion-header");

// accordion.forEach((selected) => {
//   selected.addEventListener("click", () => {

//     // 要素の親の子リスト内ですぐ次を選択
//     let content = selected.nextElementSibling;
//     content.classList.toggle("show");
//   });
// });

// ピンクの矢印180回転

const rotate1 = document.querySelector("#FAQ-header1");

rotate1.addEventListener("click", function () {
  const content = document.querySelector(".FAQ__accordion-header-one");
  content.classList.toggle("active");
});

const rotate2 = document.querySelector("#FAQ-header2");

rotate2.addEventListener("click", function () {
  const content = document.querySelector(".FAQ__accordion-header-two");
  content.classList.toggle("active");
});

const rotate3 = document.querySelector("#FAQ-header3");

rotate3.addEventListener("click", function () {
  const content = document.querySelector(".FAQ__accordion-header-three");
  content.classList.toggle("active");
});

//ページトップへ戻る

//「pagetop」という名前のついた箱に、class要素を入れるという意味（idも可）
var $pageTop = $('.page-top');

//window（画面）をスクロールした時に｛　｝内の処理が実行
$(window).scroll(function () {

  //もし、スクロールの値が300以上だったら.pagetop要素をフェードインで表示。それ以外（スクロールの値が300以下）だったら、.-pagetop要素をフェードアウトで非表示
  if ($(this).scrollTop() > 300) {
    $pageTop.fadeIn();
  } else {
    $pageTop.fadeOut();
  }
});

//「$pageTop要素がクリックされたら〇〇する」という意味
$pageTop.on('click', function () {

  //0pxの位置（ページの最上部）まで、0.3秒かけて移動
  $('body,html').animate({
    scrollTop: 0
  }, 300);

  //jQueryでのreturn false 親要素へのイベント伝播を止める
  //JavaScriptでのreturn false 親要素へのイベント伝播を止めない
  return false;
});

//背景色が伸びてテキスト表示

//   const fadeIn = function(){

//     const target = document.getElementsByClassName('effect');
//     const position = Math.floor(window.innerHeight * .75);

//     for (let i = 0; i < target.length; i++) {

//         let offsetTop = Math.floor(target[i].getBoundingClientRect().top);
//         let offsetBottom = Math.floor(target[i].getBoundingClientRect().bottom);

//         if (offsetTop < position) {
//             target[i].classList.add('scroll-in');
//         }

//         if(offsetBottom < 0){
//             target[i].classList.remove('scroll-in');
//         }
//     }
// }



// タブ切り替え

// $("#js-tab li").click(function () {
//   $("#js-tab li").removeClass("employee__active");
//   $(this).addClass("employee__active");

//   let index = $(this).index();

//   $(".employee__content").removeClass("employee__active");
//   $(".employee__content").eq(index).addClass("employee__active");

// });

// $("#js-tab li").click(function () {
//   $("#js-tab li").removeClass("employee__line");
//   $(this).addClass("employee__line");
// });

// スクロールしたら下からふわっと表示2

$(window).on('scroll load ', function () {        /* ページロード時、またはスクロールされた時*/
  var scroll = $(this).scrollTop();            /* 現在のスクロール量を測定 */
  var windowHeight = $(window).height();       /* ウィンドウの高さを測定 */
  $('.fadeUps').each(function () {                /* 「fadeUps」のクラスがついているものを1つずつ確認し・・・ */
    var cntPos = $(this).offset().top;         /* 対象の要素の上からの距離を測定 */
    if (scroll > cntPos - windowHeight + windowHeight / 15) {  /* 要素がある位置までスクロールされていたら */
      $(this).addClass('active');              /* 「active」のクラスを付与 */
    }
  });
});