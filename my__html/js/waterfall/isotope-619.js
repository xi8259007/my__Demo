!function ($) {
    $(document).ready(function(){



    });

    $(window).load(function(){
        // 瀑布流
        var $container = $('#iso-container').isotope({
            itemSelector: '.item',
            getSortData: {
                number: '.number parseInt',
                symbol: '.symbol',
                weight: function( itemElem ) {
                    var weight = $( itemElem ).find('.weight').text();
                    return parseFloat( weight.replace( /[\(\)]/g, '') );
                }
            },
            sortBy: 'number,symbol,weight',
            sortAscending: false,


        });


        $('#load-more').click( function() {
            var $items = getItems();
            $container.isotopeImagesReveal( $items );

        });

        // sort items on button click
        $('#iso-sorts').on( 'click', 'a', function() {
            var sortByValue = $(this).attr('data-sort-by');
            $container.isotope({ sortBy: sortByValue });
        });


        /*// 点击加载更多
        $('#load-more').click(function(){
            var $boxes = $(getList());
            $container.append($boxes).isotope('appended',$boxes);

        });
        function getList() {
            var boxes = [],count = parseInt(Math.random()*10);
            for (var i=0; i < count; i++ ) {
                boxes.push('<li class="item"><a class="thumbnail" href="#"><img src="images/content/'+(i+1)+'.jpg" width="258" height="258" alt="" /></a><a href="#" target="_blank">图片'+(i+1)+'</a></li>');
            }
            //把数组转成字符串
            return boxes.join("");
        };*/





    });
}(window.jQuery)



$.fn.isotopeImagesReveal = function( $items ) {
    var iso = this.data('isotope');
    var itemSelector = iso.options.itemSelector;
    // hide by default
    $items.hide();
    // append to container
    this.append( $items );
    $items.imagesLoaded().progress( function( imgLoad, image ) {
        // get item
        // image is imagesLoaded class, not <img>, <img> is image.img
        var $item = $( image.img ).parents( itemSelector );
        // un-hide item
        $item.show();
        // isotope does its thing
        iso.appended( $item );
    });

    return this;
};

function randomInt( min, max ) {
    return Math.floor( Math.random() * max + min );
}

function getItem() {
    var width = randomInt( 150, 400 );
    var height = randomInt( 150, 250 );
    var number = (1+Math.random()*(1000-1)).toFixed(0);
    var item = '<li class="item">'+
        '<a class="thumbnail" href="#"><img src="http://lorempixel.com/' + width + '/' + height + '/nature" /></a>'+
        '<div class="caption"><p>'+number+'</p><h5>'+number+'</h5><h6><span class="likelove">'+
        '<a class="like" href="/"><i class="icon-like">赞</i>'+number+'</a> <a class="love" href="/"><i class="icon-love">爱心</i><i class="weight">'+number+'</i></a></span>'+number+'</h6>'+
        '<p class="number">'+number+'</p>'+
        '<p class="symbol">'+number+'</p></div></li>';
    return item;
}

function getItems() {
    var items = '';
    for ( var i=0; i < 6; i++ ) {
        items += getItem();
    }
    // return jQuery object
    return $( items );
}