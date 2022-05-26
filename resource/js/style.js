$(document).ready(function(){
    //언어 변경
    $("header .lang_wrap .default").click(function() {
        if ( $(this).hasClass('active') ) {
            $(".lang_list").stop().slideUp(200);
            $(this).removeClass('active');
        }
        else {
            $(".lang_list").stop().slideDown(200);
            $(this).addClass('active');
        }
    });

    //메뉴오픈
    $("header .nav").mouseenter(function(){
        $(this).addClass("active");
    });
    $("header .nav").mouseleave(function(){
        $(this).removeClass("active");
    });


    //모바일메뉴 오픈
    $("header .left_wrap .mobile_menu").click(function(){
        $("header").toggleClass("active");
        $("body").toggleClass("active");
    });
    //모바일메뉴
    $("header .m_nav .m_nav_middle .m_depth_wrap .m_1depth_list li").click(function(){
        $("header .m_nav .m_nav_middle .m_depth_wrap .m_1depth_list li").removeClass("active");
        $(this).addClass("active");
    });
    $("header .m_nav .m_nav_middle .m_depth_wrap .m_1depth_list li").click(function(){
        $("header .m_nav .m_nav_middle .m_depth_wrap .m_1depth_list li").removeClass("active");
        $(this).addClass("active");
    });

    //지도 이벤트
    $(function(){
        $(".section05 .inner .con div .map a").click(function(){
            var thisInd = $(this).index();
            $(".section05 .inner .detail_wrap .list_wrap ul").removeClass("active");
            $(".section05 .inner .detail_wrap .list_wrap ul").eq(thisInd).addClass("active");
            if($(".section05 .inner .detail_wrap .list_wrap ul").eq(thisInd).hasClass("active")){
                $(".section05 .inner .con div .map").addClass("click_map0"+(thisInd+1));
            }
        });
        $(".section05 .inner .con div .map a").mouseenter(function(){
            var thisInd = $(this).index()+1;
            $(".section05 .inner .con div .map").removeClass().addClass("map").addClass("map0"+thisInd);
        });
        $(".section05 .inner .con div .map a").mouseleave(function(){
            var thisInd = $(this).index()+1;
            $(".section05 .inner .con div .map").removeClass("map0"+thisInd);
        });
    });

});