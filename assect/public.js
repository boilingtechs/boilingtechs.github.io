jQuery(function () {

    function menu() {
        if ($(window).width() > 992) {
            $('.navBoxm').hide()
            $('.menuBtn').removeClass('active')
        }
    }

    menu()

    $('.navList .navSubLi h4').on('click', function () {
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active')
            $(this).next('.navThrList').slideUp()
            $(this).parent().find('.navFouList').slideUp()
        } else {
            $(this).parent().addClass('active')
            $(this).next('.navThrList').slideDown()

        }
    })
    $('.navList .navThrLi h5').on('click', function () {
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active')
            $(this).next('.navFouList').slideUp()
        } else {
            $(this).parent().addClass('active')
            $(this).next('.navFouList').slideDown()
        }
    })

    $('.navList .navLi').hover(function () {
        $(this).addClass('active')
        $(this).find('.navSub').stop().slideDown()
    }, function () {
        $(this).removeClass('active')
        $(this).find('.navSub').stop().slideUp()
        $('.navThrList').slideUp()
        $('.navFouList').slideUp()
    })

    // $('.navBoxm').append('<ul class=\'navListm\'></ul>')
    $('.navListm').html($('.navList').html())

    $('.navSubLi').each(function (index, element) {
        if ($(this).find('.navThrList').length > 0) {
            $(this).addClass('has')
            $(this).find('h4 a').attr('href', 'javascript:;')
        }
    })
    $('.navThrLi').each(function (index, element) {
        if ($(this).find('.navFouList').length > 0) {
            $(this).addClass('has')
            $(this).find('h5 a').attr('href', 'javascript:;')
        }
    })
    $('.navListm .navLi').each(function (index, element) {
        if ($(this).find('.navSub').length > 0) {
            $(this).addClass('has')
            $(this).find('h3 a').attr('href', 'javascript:;')
        }
    })

    $('.navListm .navLi h3').on('click', function () {
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active')
            $(this).next('.navSub').slideUp()
            $(this).parent().find('.navFouList').slideUp()
        } else {
            $('.navListm .navLi').removeClass('active')
            $('.navSub').slideUp()
            $('.navThrList').slideUp()
            $('.navFouList').slideUp()
            $(this).parent().addClass('active')
            $(this).next('.navSub').slideDown()

        }
    })
    $('.navListm .navSubLi h4').on('click', function () {
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active')
            $(this).next('.navThrList').slideUp()
            $(this).parent().find('.navFouList').slideUp()
        } else {
            $('.navListm .navSubLi').removeClass('active')
            $('.navThrList').slideUp()
            $('.navFouList').slideUp()
            $(this).parent().addClass('active')
            $(this).next('.navThrList').slideDown()

        }
    })
    $('.navListm .navThrLi h5').on('click', function () {
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active')
            $(this).next('.navFouList').slideUp()
        } else {
            $('.navListm .navThrLi').removeClass('active')
            $('.navFouList').slideUp()
            $(this).parent().addClass('active')
            $(this).next('.navFouList').slideDown()
        }
    })

    $(window).on('click', function () {
        $('.menuBtn').removeClass('active')
        $('.navBoxm').slideUp()
    })
    $('.menuBtn').on('click', function (event) {
        $(this).toggleClass('active')
        $('.navBoxm').slideToggle()
        event.stopPropagation()
    })
    $('.navBoxm').on('click', function (event) {
        event.stopPropagation()
    })

    function hderHig(x) {
        var hig = $('.headerBg').height()
        x.css('padding-top', hig + 'px')
    }

    function myhegiht(divW, divN) {
        var $columns = $(divW).find('li')
        var contact_inforH = 0
        $columns.each(function () {
            if ($(this).find(divN).height() > contact_inforH) {
                contact_inforH = $(this).find(divN).height()
            }
        })
        $columns.height(contact_inforH)
    }

    myhegiht('.pro2', '.proText2')

    function equip() {
        var sUserAgent = navigator.userAgent.toLowerCase()
        if ((sUserAgent.match(/(ipod|iphone os|midp|ucweb|android|windows ce|windows mobile)/i))) {
            $('.xgInput').focus(function () {
                $('.headerBg').css('position', 'absolute')
            })
            $('.xgInput').focus(function () {
                $('.headerBg').css('position', 'fixed')
            })
        }
    }

    equip()
    $(window).resize(function () {
        menu()
        $('.arLef').css('min-height', $('.arRig').height() + 100)
        myhegiht('.pro2', '.proText2')
        $('.mainSpace').css('height', $('.proNavBg').height())
        equip()
    })
})

//屏蔽页面错误
jQuery(window).error(function () {
    return true
})
jQuery('img').error(function () {
    $(this).hide()
})
