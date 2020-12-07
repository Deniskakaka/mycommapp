import('./main.scss');
import $ from "jquery";
import WOW from 'wow.js';
import 'slick-carousel';
import "selectric";
import language from './language.json';

$( document ).ready(function() {
    let paragraphItems = $('.service-list__paragraph');
    let controller = new ScrollMagic.Controller();
    paragraphItems.on('click', function () {
        $(this).find('.service-list__text').slideToggle(800);
        $(this).toggleClass("burn")
        $(this).find(".around").toggleClass("burn")
        $(this).find(".around").toggleClass("up")
        $(this).find(".service-list-description__text").toggleClass("color")
    })

    let stages = $('.workwithmycomapp-stages-item');

    stages.each(function () {
        let currentItem = this;
        new ScrollMagic.Scene({
            triggerElement: this
        })
            .addTo(controller)
            .reverse(false)
            .on('enter', function(e){
                $(currentItem).find('.workwithmycomapp-stages-item__after').addClass('show');
                $(currentItem).find('.line').addClass('light');
            });
    });

    $('.count').each(function () {
        new ScrollMagic.Scene({
            triggerElement: this
        })
            .addTo(controller)
            .reverse(false)
            .on('enter', function(e){
                $('.count').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).attr('data-value')
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(this.Counter.toFixed(0));
                        }
                    });
                });
            });
    });


    $(function() {
        $('.success-slider').slick({
            infinite: true,
            slidesToShow: 2,
            speed: 800,
            prevArrow: '<button class="slick-prev slick-arrow wow fadeInLeft" data-wow-delay="0.7s" aria-label="Next" type="button" style="">Prev</button>',
            nextArrow: '<button class="slick-next slick-arrow wow fadeInLeft" data-wow-delay="0.7s" aria-label="Next" type="button" style="">Next</button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    });

    var defaultLanguage = 'ru';
    function changeLanguage(lang) {
        $('.lang').each(function(index, item) {
            $(this).html(language[lang][$(this).attr('data-lang')]);
        });
    }
    changeLanguage(defaultLanguage);

    $('.select').selectric({
        onBeforeOpen:  function () {
            $('.selectric').addClass('click')
        },
        onBeforeClose: function () {
            $('.selectric').removeClass('click')
        }
    }).on('change', function() {
        var lang = $(this).find('option:selected').attr('data-lang');
        changeLanguage(lang)
    });


    new WOW().init();

    let wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
    })
    wow.init();
});