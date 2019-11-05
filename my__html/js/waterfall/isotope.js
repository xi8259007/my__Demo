!function ($) {

    $(document).ready(function(){

        //瀑布流
        var $isoContainer = $('#iso_container');
        $isoContainer.imagesLoaded(function(){
            $isoContainer.isotope({
                itemSelector : '.item'
            });
        });

        //无限滚动
        $isoContainer.infinitescroll({
                navSelector  : '#page_nav',    //分页导航的选择器
                nextSelector : '#page_nav a',  //下页连接的选择器
                itemSelector : '.item',        //你要检索的所有项目的选择器
                loading: {
                    finishedMsg: '已经到最后一页.',//结束显示信息
                    img: 'images/ajax-loader.gif'//loading图片
                }
            },
            //作为回调函数触发isotope
            function( newElements ) {
                var $newElems = $( newElements );
                // 在添加到isotope布局之前保证图片载入
                $newElems.imagesLoaded(function(){
                    // 现在可以显示所有的元素了
                    //$newElems.fadeIn();
                    $isoContainer.isotope( 'appended', $newElems, true );
                });
            }
        );



    });

    $(window).load(function(){

    });

}(window.jQuery)

