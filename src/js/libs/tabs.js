$(document).ready(function(){
$('[data-action="tab"]').click(function () {
        $(this).closest('.tabs__list').children('li').removeClass('active');
        $(this).parent().addClass('active');
        var tabTarget = $(this).attr('data-target');
        $(this).closest('.tabs').find('.tabs__content .active').removeClass('active');
        $(tabTarget).addClass('active');
    });
});
