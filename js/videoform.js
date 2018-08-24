$(function () {
    let vh = $(window).height() - 50;
    $('.content').css('minHeight', vh + 'px');
    $('.right').css('minHeight', vh + 'px');
    $(document).off('click', '.selectbtn').on('click', '.selectbtn', function () {
        var element = $(this).parent().find('.layui-btn');
        for (var i = 0; i < element.length; i++) {
            element.eq(i).removeClass('layui-btn-normal').addClass('layui-btn-primary');
        }
        $(this).addClass('layui-btn-normal').removeClass('layui-btn-primary');
    })
})