$(document).ready(function (){	
	$("#gototop").click(function(){
		//alert("lskdjf");
		$('html, body').animate({
		scrollTop: $("#top").offset().top
		}, 500);
	});
	if($(window).width() < 1000)
    {
	$("#menu-responsive").click(function(){
    	$("#menu-responsive-list").slideToggle();
		$(".bt_menu-responsive").slideToggle();
	});
	}
	//Allgemeine Funktion für eine Scroll-Animation innerhalb einer Seite
	$('a[href^=#]').on('click', function(e){
		var href = $(this).attr('href');
		$('html, body').animate({
			scrollTop:$(href).offset().top
		},'slow');
		e.preventDefault();
	});
	var r = Math.random()+2;
	$(function () {
      // Slideshow 4
      $("#anzeigen").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: r*500,
        namespace: "callbacks",
        before: function () {
          $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
          $('.events').append("<li>after event fired.</li>");
        }
      });
    });
	$(function () {
      $("#lh").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: r*450,
        namespace: "callbacks",
        before: function () {
          $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
          $('.events').append("<li>after event fired.</li>");
        }
      });
    });
		$(function () {
      $("#mailings").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: r*520,
        namespace: "callbacks",
        before: function () {
          $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
          $('.events').append("<li>after event fired.</li>");
        }
      });
    });
		$(function () {
      $("#hochzeit").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: r*700,
        namespace: "callbacks",
        before: function () {
          $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
          $('.events').append("<li>after event fired.</li>");
        }
      });
    });
		$(function () {
      $("#infografik").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: r*400,
        namespace: "callbacks",
        before: function () {
          $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
          $('.events').append("<li>after event fired.</li>");
        }
      });
    });
		$(function () {
      $("#locka").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: r*600,
        namespace: "callbacks",
        before: function () {
          $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
          $('.events').append("<li>after event fired.</li>");
        }
      });
    });
		$(function () {
      $("#momentaufnahmen").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: r*550,
        namespace: "callbacks",
        before: function () {
          $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
          $('.events').append("<li>after event fired.</li>");
        }
      });
    });
	$(function () {
      $("#spiel").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: r*510,
        namespace: "callbacks",
        before: function () {
          $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
          $('.events').append("<li>after event fired.</li>");
        }
      });
    });
	$(function () {
      $("#montagen").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: r*530,
        namespace: "callbacks",
        before: function () {
          $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
          $('.events').append("<li>after event fired.</li>");
        }
      });
    });
	$(function () {
      $("#bewerberleitfaden").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: r*555,
        namespace: "callbacks",
        before: function () {
          $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
          $('.events').append("<li>after event fired.</li>");
        }
      });
    });
	$(function () {
      $("#jasmin").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: r*543,
        namespace: "callbacks",
        before: function () {
          $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
          $('.events').append("<li>after event fired.</li>");
        }
      });
    });
	$(function () {
      $("#stephie").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: r*829,
        namespace: "callbacks",
        before: function () {
          $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
          $('.events').append("<li>after event fired.</li>");
        }
      });
    });
	$(function () {
      $("#banner").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: r*655,
        namespace: "callbacks",
        before: function () {
          $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
          $('.events').append("<li>after event fired.</li>");
        }
      });
    });
});

$(window).scroll(function() {
	if ($(this).scrollTop()>0)
     {
        $("#gototop").fadeIn();
     }
    else
     {
      $("#gototop").fadeOut();
     }
});
