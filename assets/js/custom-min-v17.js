function myFunctions(e, s, a, i, t, n) {
  var o;
  $('.headermenu ul li')
    .not('.headermenu ul li li')
    .hover(function () {
      $('.headermenu ul li ul').css('display', 'none'),
        $('.headermenu ul li div:first-of-type').css('display', 'none'),
        $('.headermenu ul li').removeClass('headermenu-active'),
        $(this).find('div:first-of-type').css({ display: 'flex' }),
        $(this).find('ul').css({ display: 'flex' }),
        $(this).closest('li').addClass('headermenu-active'),
        $('.menu-blue-bar').removeClass('dis-none');
    }),
    $('.headermenu ul li')
      .not('.headermenu ul li li')
      .click(function () {
        $('.headermenu ul li ul').css('display', 'none'),
          $('.headermenu ul li div:first-of-type').css('display', 'none'),
          $('.headermenu ul li').removeClass('headermenu-active'),
          $(this).find('div:first-of-type').css({ display: 'flex' }),
          $(this).find('ul').css({ display: 'flex' }),
          $(this).closest('li').addClass('headermenu-active');
      });
  var r = $(window).width(),
    l = $('.desktop-header').outerHeight() - 1,
    d = $('.header-button').offset(),
    m = $('.headermenu').offset().left - 300,
    h = r - (d.left + $('.header-button').outerWidth()),
    u = l;
  $('.headermenu ul li .menu-bubble').css({ left: m, right: h, top: u }),
    $('.headermenu ul li')
      .not('.headermenu ul li li')
      .hover(function () {
        var e = $('.desktop-header').height(),
          s = $(this).offset(),
          a = s.left + $(this).outerWidth(),
          i = a - s.left;
        $('.menu-blue-bar').css({
          left: s.left,
          right: a,
          top: e - 5,
          width: i,
        });
      }),
    $('.header-menu-holder').mouseleave(function () {
      $('.headermenu ul li ul').css('display', 'none'),
        $('.headermenu ul li div:first-of-type').css('display', 'none'),
        $('.menu-blue-bar').addClass('dis-none');
    }),
    $('.scroll-home').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    }),
    $('.modal')
      .mousedown(function (e) {
        1 == e.which &&
          $(this).mouseup(function () {
            $(this).css({ opacity: '0' }),
              $(this).on(
                'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
                function (e) {
                  $(this).removeClass('flex').addClass('dis-none'),
                    $(this).off(
                      'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend'
                    );
                }
              ),
              $(this).unbind('mouseup');
          });
      })
      .children()
      .mousedown(function (e) {
        1 == e.which && e.stopPropagation();
      }),
    $('.modal-trigger').click(function () {
      var e = $(this).attr('value');
      $('.' + e)
        .removeClass('dis-none')
        .addClass('flex')
        .fadeIn('slow')
        .css({ opacity: '1' });
    }),
    $('.close-modal').click(function () {
      $(this).closest('.modal').css({ opacity: '0' }),
        $(this)
          .closest('.modal')
          .on(
            'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
            function (e) {
              $(this).removeClass('flex').addClass('dis-none'),
                $(this).off(
                  'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend'
                );
            }
          );
    }),
    $(window).resize(function () {
      var t = $(window).width(),
        n = $('.desktop-header').outerHeight(),
        o = $('.header-button').offset(),
        r = $('.headermenu').offset().left - 300,
        l = t - (o.left + $('.header-button').outerWidth()),
        d = n;
      if (
        ($('.headermenu ul li .menu-bubble').css({ left: r, right: l, top: d }),
        (g = 0),
        'flex' != $('#mobile-nav-bar').css('display')
          ? ((g = $('.desktop-header').height()),
            $('.headerbuffer').css({ 'margin-top': g }),
            $('.headerbuffermobile').css({ 'margin-top': 0 }))
          : ((g = $('#mobile-nav-bar').height()),
            $('.headerbuffermobile').css({ 'margin-top': g }),
            $('.headerbuffer').css({ 'margin-top': 0 })),
        (g = $('.hero-content').height()),
        $('.query-check').css('order') < '4'
          ? ($('#mobile-nav-window').css({ display: 'none' }),
            $('.hamburger-line-2').removeClass('dis-none'),
            $('.hamburger-line-1').removeClass('hamburger-menu-x-1'),
            $('.hamburger-line-1').addClass('mg-10'),
            $('.hamburger-line-3').removeClass('hamburger-menu-x-2'),
            $('.hamburger-line-3').addClass('mg-10'),
            $('.hamburger-menu').removeClass('w-60-p'),
            $('.hamburger-menu').addClass('w-100-p'),
            $('.mainmenu .menu-item-has-children').removeClass('menu-arrow-up'),
            $('.mainmenu .menu-item-has-children').addClass('menu-arrow-down'),
            'None' != e && '' != e
              ? $(window).scrollTop() >= i
                ? $('.mainmenu .menu-item-has-children').css({
                    color: '#363636',
                  })
                : 'Freespace' == e
                ? $('.mainmenu .menu-item-has-children').css({
                    color: '#363636',
                  })
                : $('.mainmenu .menu-item-has-children').css({ color: '#fff' })
              : $('.mainmenu .menu-item-has-children').css({
                  color: '#363636',
                }),
            'Slider' == e && $('.slideimagecontainer').css({ height: g + +s }),
            'Image' == e && $('.slideimagecontainer2').css({ height: g + +s }),
            'Video' == e && $('.videocontainer').css({ height: g + +s }))
          : ($('.mainmenu .menu-item-has-children').css({ color: '#363636' }),
            $('.slideimagecontainer').css({ height: g + +a }),
            $('.slideimagecontainer2').css({ height: g + +a }),
            $('.videocontainer').css({ height: g + +a })),
        'Video' == e)
      ) {
        var m = document.getElementById('header-video'),
          h = $('.video-container').width(),
          u = $('.video-container').height(),
          c = m.videoWidth,
          g = m.videoHeight,
          b = (c - h) / 2,
          f = (g - u) / 2;
        $('#header-video').css({ left: -b, top: -f });
      }
    });
  var c,
    g,
    b = 0;
  function f() {
    $(window).scrollTop() >= i &&
      0 == b &&
      ('Freespace' == e
        ? ($('#header-login').removeClass('site-white'),
          $('#header-login').addClass('site-black'),
          $('.support-link').removeClass('site-white'),
          $('.support-link').removeClass('site-white-hover'),
          $('.support-link').addClass('site-color-3'),
          $('.jobs-link').removeClass('site-white'),
          $('.jobs-link').removeClass('site-white-hover'),
          $('.jobs-link').addClass('site-color-1'),
          $('.main-flag').removeClass('site-white'),
          $('.main-flag').addClass('site-color-3'),
          $('.headermenu').removeClass('headermenu-white'),
          $('.headermenu').addClass('headermenu-black'),
          $('.headermenu').addClass('headermenu-scroll'),
          $('.desktop-header-inner').css({
            'background-color': '#fff',
            transition: '0.5s',
          }),
          $('.desktop-image-header').addClass('standard-desktop-header'),
          $('.header-logo-container').html(
            '<a href="/"><img src="' +
              n +
              '" alt="Cloudbeds" class="logo block" /></a>'
          ),
          $('.mainmenu .menu-item-has-children').css({ color: '#363636' }))
        : ($('#header-login').removeClass('site-white'),
          $('#header-login').addClass('site-black'),
          $('.support-link').removeClass('site-white'),
          $('.support-link').removeClass('site-white-hover'),
          $('.support-link').addClass('site-color-3'),
          $('.jobs-link').removeClass('site-white'),
          $('.jobs-link').removeClass('site-white-hover'),
          $('.jobs-link').addClass('site-color-1'),
          $('.main-flag').removeClass('site-white'),
          $('.main-flag').addClass('site-color-3'),
          $('.headermenu').removeClass('headermenu-white'),
          $('.headermenu').addClass('headermenu-black'),
          $('.headermenu').addClass('headermenu-scroll'),
          $('.desktop-image-header').addClass('standard-desktop-header'),
          $('.desktop-header-inner').css({
            'background-color': '#fff',
            transition: '0.5s',
          }),
          $('.header-logo-container').html(
            '<a href="/"><img src="' +
              n +
              '" alt="Cloudbeds" class="logo block" /></a>'
          ),
          $('.mainmenu .menu-item-has-children').css({ color: '#363636' })),
      (b = 1)),
      $(window).scrollTop() < i &&
        1 == b &&
        ('None' != e &&
          '' != e &&
          ('Freespace' != e
            ? ($('#header-login').removeClass('site-black'),
              $('#header-login').addClass('site-white'),
              $('.support-link').removeClass('site-color-3'),
              $('.support-link').addClass('site-white'),
              $('.support-link').addClass('site-white-hover'),
              $('.jobs-link').removeClass('site-color-1'),
              $('.jobs-link').addClass('site-white'),
              $('.jobs-link').addClass('site-white-hover'),
              $('.main-flag').removeClass('site-color-3'),
              $('.main-flag').addClass('site-white'),
              $('.headermenu').removeClass('headermenu-black'),
              $('.headermenu').addClass('headermenu-white'),
              $('.headermenu').removeClass('headermenu-scroll'),
              $('.desktop-image-header').removeClass('standard-desktop-header'),
              $('.desktop-header-inner').css({
                'background-color': 'transparent',
                transition: '0.5s',
              }),
              $('.header-logo-container').html(
                '<a href="/"><img src="' +
                  t +
                  '" alt="Cloudbeds" class="logo block" /></a>'
              ))
            : ($('.header-logo-container').html(
                '<a href="/"><img src="' +
                  t +
                  '" alt="Cloudbeds" class="logo block" /></a>'
              ),
              $('.desktop-image-header').removeClass('standard-desktop-header'),
              $('.desktop-header-inner').css({
                'background-color': 'transparent',
                transition: '0.5s',
              })),
          $('.query-check').css('order') < '4'
            ? 'Freespace' != e &&
              $('.mainmenu .menu-item-has-children').css({ color: '#fff' })
            : $('.mainmenu .menu-item-has-children').css({ color: '#363636' })),
        (b = 0));
  }
  ($(window).scroll(function () {
    f();
  }),
  f(),
  (myFunctions.lazyloadimages = function () {
    var e = 0,
      s = document.getElementsByTagName('img'),
      a = document.getElementsByClassName('lazyload');
    !(function (i) {
      if ((i > 0 && (e += i), e > 0 && e < 2)) {
        for (var t = 0; t < s.length; t++)
          s[t].getAttribute('data-src') &&
            s[t].setAttribute('src', s[t].getAttribute('data-src'));
        for (t = 0; t < a.length; t++)
          a[t].getAttribute('data-src') &&
            $(a[t]).css(
              'background-image',
              'url(' + a[t].getAttribute('data-src') + ')'
            );
      }
    })(1);
  }),
  $('.topslideshow').cycle(),
  $('.mainmenu .menu-item-has-children').addClass('menu-arrow-down'),
  (o = 0),
  'flex' != $('#mobile-nav-bar').css('display')
    ? ((o = $('.desktop-header').height()),
      $('.headerbuffer').css({ 'margin-top': o }),
      $('.headerbuffermobile').css({ 'margin-top': 0 }))
    : ((o = $('#mobile-nav-bar').height()),
      $('.headerbuffermobile').css({ 'margin-top': o }),
      $('.headerbuffer').css({ 'margin-top': 0 })),
  (o = $('.hero-content').height()),
  $('.query-check').css('order') < '4'
    ? ('Slider' == e && $('.slideimagecontainer').css({ height: o + +s }),
      'Image' == e && $('.slideimagecontainer2').css({ height: o + +s }),
      'Video' == e && $('.videocontainer').css({ height: o + +s }))
    : ($('.mainmenu .menu-item-has-children').css({ color: '#363636' }),
      $('.slideimagecontainer').css({ height: o + +a }),
      $('.slideimagecontainer2').css({ height: o + +a }),
      $('.videocontainer').css({ height: o + +a })),
  'Video' == e) &&
    document.getElementById('header-video').addEventListener(
      'loadedmetadata',
      function (e) {
        var s = $('.video-container').width(),
          a = $('.video-container').height(),
          i = (this.videoWidth - s) / 2,
          t = (this.videoHeight - a) / 2;
        $('#header-video').css({ left: -i, top: -t });
      },
      !1
    );
  $('.hamburger-container').click(function () {
    $('.hamburger-line-2').hasClass('dis-none')
      ? ($('.hamburger-line-2').removeClass('dis-none'),
        $('.hamburger-line-1').removeClass('hamburger-menu-x-1'),
        $('.hamburger-line-1').addClass('mg-10'),
        $('.hamburger-line-3').removeClass('hamburger-menu-x-2'),
        $('.hamburger-line-3').addClass('mg-10'),
        $('.hamburger-menu').removeClass('w-60-p'),
        $('.hamburger-menu').addClass('w-100-p'),
        $('#mobile-nav-window').slideUp('fast'),
        $('#mobile-nav-bar')
          .removeClass('bottom-0')
          .removeClass('overflow-auto'))
      : ($('.hamburger-line-2').addClass('dis-none'),
        $('.hamburger-line-1').addClass('hamburger-menu-x-1'),
        $('.hamburger-line-1').removeClass('mg-10'),
        $('.hamburger-line-3').addClass('hamburger-menu-x-2'),
        $('.hamburger-line-3').removeClass('mg-10'),
        $('.hamburger-menu').removeClass('w-100-p'),
        $('.hamburger-menu').addClass('w-60-p'),
        $('#mobile-nav-window').slideDown('fast'),
        $('#mobile-nav-bar').addClass('bottom-0').addClass('overflow-auto'));
  }),
    $('.menu-item-has-children').click(function () {
      $('.query-check').css('order') >= '4' &&
        ('none' == $(this).find('ul').css('display')
          ? ($('#mobile-nav-window .mainmenu .menu-item-has-children ul').css({
              display: 'none',
            }),
            $(
              '#mobile-nav-window .mainmenu .menu-item-has-children'
            ).removeClass('menu-arrow-up'),
            $('#mobile-nav-window .mainmenu .menu-item-has-children').addClass(
              'menu-arrow-down'
            ),
            $(this).find('ul').slideDown('fast'),
            $(this).removeClass('menu-arrow-down'),
            $(this).addClass('menu-arrow-up'))
          : ($(this).find('ul').slideUp('fast'),
            $(this).removeClass('menu-arrow-up'),
            $(this).addClass('menu-arrow-down')));
    }),
    navigator.userAgent.search('Firefox') >= 0 &&
      $('.hero-content:has(img)') &&
      $(window).on('load', function () {
        $(window).trigger('resize');
      }),
    (c = window.navigator.userAgent),
    ((g = c.indexOf('MSIE')) > 0
      ? parseInt(c.substring(g + 5, c.indexOf('.', g)))
      : navigator.userAgent.match(/Trident\/7\./)
      ? 11
      : 0) > 0 && $(window).trigger('resize'),
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
      $('.hero-content:has(img)') &&
      $(window).on('load', function () {
        $(window).trigger('resize');
      });
}
function loadimagesviewport() {
  var e;
  e = $('.query-check').css('order') < '4' ? 'desk' : 'mobile';
  for (
    var s = $(window).scrollTop() + $(window).innerHeight(),
      a = $(window).scrollTop(),
      i = 0;
    i < allimages.length;
    i++
  )
    if (allimages[i].getAttribute('data-src')) {
      var t = $(allimages[i]).offset().top,
        n = $(allimages[i]).offset().top + $(allimages[i]).outerHeight();
      s > t &&
        a < n &&
        allimages[i].getAttribute('data-src') &&
        (allimages[i].getAttribute('value')
          ? allimages[i].getAttribute('value') == e &&
            'hidden' != allimages[i].getAttribute('value') &&
            allimages[i].setAttribute(
              'src',
              allimages[i].getAttribute('data-src')
            )
          : allimages[i].setAttribute(
              'src',
              allimages[i].getAttribute('data-src')
            ));
    }
  for (i = 0; i < allbkimages.length; i++)
    if (allbkimages[i].getAttribute('data-src')) {
      (t = $(allbkimages[i]).offset().top),
        (n = $(allbkimages[i]).offset().top + $(allbkimages[i]).outerHeight());
      s > t &&
        a < n &&
        allbkimages[i].getAttribute('data-src') &&
        (allbkimages[i].getAttribute('value')
          ? allbkimages[i].getAttribute('value') == e &&
            'hidden' != allimages[i].getAttribute('value') &&
            $(allbkimages[i]).css(
              'background-image',
              'url(' + allbkimages[i].getAttribute('data-src') + ')'
            )
          : $(allbkimages[i]).hasClass('dis-none') ||
            $(allbkimages[i]).css(
              'background-image',
              'url(' + allbkimages[i].getAttribute('data-src') + ')'
            ));
    }
}
var allimages = document.getElementsByTagName('img'),
  allbkimages = document.getElementsByClassName('lazyload');
function headHeight() {
  if ($('.query-check').css('order') < '4')
    var e = $('.desktop-header').height();
  else e = $('#mobile-nav-bar').height();
  return e;
}
function animateme(e, s, a, i, t, n) {
  $(e).css('opacity', '0'),
    '1' == n
      ? $(window).scroll(function () {
          $(e).each(function () {
            var e = $(this).offset().top,
              n = $(this).height(),
              o = $(window).scrollTop();
            e < o + n + (o + n) * i
              ? ($(this).css({ opacity: '1' }),
                $(this).removeClass('animated ' + a),
                $(this).addClass('animated ' + s),
                $(this).css({ 'animation-duration': t + 's' }))
              : a &&
                ($(this).css({ opacity: '0' }),
                $(this).removeClass('animated ' + s),
                $(this).addClass('animated ' + a),
                $(this).css({ 'animation-duration': t + 's' }));
          });
        })
      : ($(e).css({ opacity: '1' }),
        $(e).addClass('animated ' + s),
        $(e).css({ 'animation-duration': t + 's' }));
}
function opennavigation() {
  'none' == $('#mobile-nav-window').css('display')
    ? $('#mobile-nav-window').slideDown('slow')
    : $('#mobile-nav-window').slideUp('slow');
}
loadimagesviewport(),
  $(window).on('load', function () {
    var e = 0;
    function s(s) {
      if ((s > 0 && (e += s), e > 0 && e < 2)) {
        for (var t = 0; t < a.length; t++)
          a[t].getAttribute('data-src') &&
            a[t].setAttribute('src', a[t].getAttribute('data-src'));
        for (t = 0; t < i.length; t++)
          i[t].getAttribute('data-src') &&
            $(i[t]).css(
              'background-image',
              'url(' + i[t].getAttribute('data-src') + ')'
            );
      }
    }
    var a = document.getElementsByTagName('img'),
      i = document.getElementsByClassName('lazyload');
    $(window).scroll(function () {
      s(1);
    }),
      $('.hamburger-container').click(function () {
        s(1);
      });
  });
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
});
