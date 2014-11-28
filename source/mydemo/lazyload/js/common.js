$(function() {
    $("img.lazy").lazyload({
        // threshold 所谓的阀值吧，在滚动距离图片还有200px的时候开始加载
        threshold: 10,
        // 添加时间，默认是滚动到图片的位置就加载进来
        // 比如下面的click，要点击才可以触发加载
        //这个值还可以是mouseover，还可以是其他的，自己定义的事件
        // 比如
        // $(function() {
        //     $("img.lazy").lazyload({
        //         event: "sporty"
        //     });
        // });

        // $(window).bind("load", function() {
        //     var timeout = setTimeout(function() {
        //         $("img.lazy").trigger("sporty")
        //     }, 5000);
        // });
        // 页面加载完五秒后加载所有的图片

        // event: "click",

        // 也可以设置加载时候的动画效果，比如下面的fadeIn
        effect : "fadeIn",
    });
});
