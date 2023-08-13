$(document).ready(function () {
    let curentTab = "0"
    let currentMenuCard = "0"

    $('.nav-link').each(function () {
        $(this).on('click', function () {
            let checkedTab = $(this).attr('data-tab')
            if (checkedTab !== curentTab) {
                $('.nav-link').removeClass('checked')
                $(this).toggleClass('checked')
                curentTab = checkedTab

                $('.projects-tab').fadeOut(200)
                $('.projects-tab[data-tab=' + curentTab + ']').fadeIn(400)
            }
        })
    })
    $('.menu-card').each(function () {
        $(this).on('click', function () {
            let checkedMenuCard = $(this).attr('data-menu')
            if (checkedMenuCard !== currentMenuCard) {
                $('.menu-card').removeClass('checked')
                $(this).toggleClass('checked')
                currentMenuCard = checkedMenuCard

                let tab = $('.project-card[data-project=' + currentMenuCard + ']')
                $('.project-card').fadeOut(200, function () {
                    tab.fadeIn(400)
                })
            }
        })
    })
})