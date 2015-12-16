$(document).ready(function() {

  // Toggle menu dropdown
  /*$('#header nav ul li.dropdown a').click(function() {
    $('#header nav ul li.dropdown').toggleClass('active');

    // Lower the content when dropdown menu is active
    $('#main').toggleClass('dropdown-active');
  });*/


  // Toggle mobile menu
  $("#header a.menu-icon").click(function() {
    $('#header nav').toggleClass('open');
    /*$('#header nav').fadeToggle(200, function() {
      $('#header nav').toggleClass('open');
    });*/
    $('#header a.menu-icon').toggleClass('active');
  });


  // Toggle search
  $("#header .search .icon-search").click(function() {
    $('#header #searchForm').toggleClass('open');
    $('#header #searchForm').fadeToggle(200);
  });


  // 'Load More' articles button
  $("#loadMore span").on("click", function(e) {
    $(".list-group .card:hidden:lt(5)").show(0, function() {
      !$(".list-group .card:hidden").length && $("#loadMore").remove();
    });
  }).trigger("click");


  // Toggle 'Top Articles' list
  $(function() {
    var storyList = '.story-grid .grid-list';
    $(storyList + ' .block-title').click(function() {
      $(storyList + ' .grid-content').slideToggle();
      $(storyList + ' span').toggleClass('vflip');
    });
  });


  // Story list content scroll fade
   $(function() {
    var list = '.story-grid-list .grid-list';
    var more = '.story-grid-list #scrollMore';

    $(list).bind('scroll', function() {
      if ($(this).scrollTop() > 0) {
        $(more).fadeOut();
      } else {
        $(more).fadeIn();
      }
    });

    $(window).on("resize", function() {
      if ($(window).width() >= 1200 || $(window).width() <= 768) {
        $(more).remove();
      } else {
        $(more).add();
      }
    }).resize();
  });

});


// Sticky Elements
$(document).ready(function() {
  // Header
  var header        = $("#header").offset().top;
  var headerHeight  = $("#header").outerHeight();

  $(window).scroll(function() {
    var windowTop = $(window).scrollTop();

    if (windowTop > header) {
      $("body").addClass("sticky-header");
    } else {
      $("body").removeClass("sticky-header");
    }
  });

  // Article Page
  if (!!$('.article').offset()) {
    var article = $(".article .article-content").offset().top,
        social  = $(".article .article-content").offset().top - headerHeight - 10,
        adTop   = $(".article .sidebar-ad-one").offset().top - headerHeight - 10,
        articleBottom = $('.article-content').position().top + $('.article-content').offset().top + $('.article-content').outerHeight(true),
        sidebarContBottom = $('.article .sidebar-container.bottom').position().top + $('.article .sidebar-container.bottom').offset().top + $('.article .sidebar-container.bottom').outerHeight(true);

    // Sets height distance from social media to top of window on load
    $('.article #social-media').css('top', (article + 'px'));

    $(window).scroll(function() {
      var windowTop = $(window).scrollTop();

      // Social Media
      if (windowTop > social) {
        $(".article #social-media").addClass("sticky").css('top', ((headerHeight + 10) + 'px'));
      } else {
        $(".article #social-media").removeClass("sticky").css('top', (article + 'px'));
      }

      // Sidebar Top Ad
      if (windowTop > adTop) {
        $(".article .sidebar-ad-one").addClass("sticky").css('top', ((headerHeight + 10) + 'px'));
      } else {
        $(".article .sidebar-ad-one").removeClass("sticky").css('top', '0' + 'px');
      }
    });

    $.fn.followTo = function(pos) {
      var $this = this,
          $window = $(window);

      $window.scroll(function (e) {
        if ($window.scrollTop() > pos) {
          $this.css({
            position: 'absolute',
            top: pos
          });
        } else {
          $this.css({
            position: 'fixed',
            top: 0
          });
        }
      });
    };

    //$('.article .sidebar-ad-one').followTo(sidebarContBottom);
  }
});


$(document).ready(function() {

  // Match height of sidebar/content on article page for sidebar bottom position
  $(window).on("resize", function() {
    if ($(window).width() >= 768 && $("body").hasClass("article")) {
      $("#sidebar-second").height($("#content").height());
      $("#sidebar-first").height($("#content").height());
    } else {
      return false;
    }
  }).resize();


  // Images out of bounds of content widths
  $(window).on("resize", function() {
    if ($(window).width() >= 1200 && $("body").hasClass("article-long")) {
      outsideMargins();
    } else {
      $('.outside-left').css('margin-left', 0);
      $('.outside-right').css('margin-right', 0);
    }
  }).resize();

  function outsideMargins() {
    var widthLeft = $('.outside-left').width();
    var marginLeft = widthLeft / 2;
    $('.outside-left').css('margin-left', -marginLeft);

    var widthRight = $('.outside-right').width();
    var marginRight = widthRight / 2;
    $('.outside-right').css('margin-right', -marginRight);
  }


  // Scroll indicator
  $(window).scroll(function() {
    var wintop    = $(window).scrollTop(),
        docheight = $(document).height(), winheight = $(window).height();
    var scrolled = (wintop/(docheight-winheight))*100;

    $('#scrollProgress').css('width', (scrolled + '%'));
  });

});


// Call Hook - Stickem
//$('.article-content').stickem();


// Call Hook - Flexslider
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: false,
    slideshow: false,
    smoothHeight: true,
    customDirectionNav: $(".custom-navigation a")
  });
});
