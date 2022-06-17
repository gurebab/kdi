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

    $(".m_2depth_list li a").click(function(){
        console.log("됨");
        $(".m_2depth_list li a").removeClass("open");
        $(this).next().slideToggle(0);
        $(this).addClass("open");
        $(".m_2depth_list li a").not(this).next().slideUp(0);
    return false;
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

    //스크롤이벤트
    $(window).scroll(function(){
        var scr = $(window).scrollTop();
        var section02_scr = $(".section02").offset().top - 400;
        var section03_scr = $(".section03").offset().top - 600;
        var section04_scr = $(".section04").offset().top - 400;
        var section05_scr = $(".section05").offset().top - 400;
        if(scr >= section02_scr){
            $(".section02 .item_wrap li").removeClass("scroll_mov");
        }else{
            $(".section02 .item_wrap li").addClass("scroll_mov");
        }
        if(scr >= section03_scr){
            $(".section03 .text_wrap").removeClass("scroll_mov");
            $(".section03 .btn_wrap .btn_go").removeClass("scroll_mov");
            $(".section03 .btn_wrap .section03_img").removeClass("scroll_mov");
            $(".section03 .section03_name").removeClass("scroll_mov");
        }else{ 
            $(".section03 .text_wrap").addClass("scroll_mov");
            $(".section03 .btn_wrap .btn_go").addClass("scroll_mov");
            $(".section03 .btn_wrap .section03_img").addClass("scroll_mov");
            $(".section03 .section03_name").addClass("scroll_mov");
         }
         if(scr >= section04_scr){
            $(".section04 .section04_inner .item").removeClass("scroll_mov");
        }else{
            $(".section04 .section04_inner .item").addClass("scroll_mov");
        }
        if(scr >= section05_scr){
            $(".section05 .inner .detail_wrap").removeClass("scroll_mov");
            $(".section05 .text_wrap").removeClass("scroll_mov");
        }else{
            $(".section05 .inner .detail_wrap").addClass("scroll_mov");
            $(".section05 .text_wrap").addClass("scroll_mov");
        }
    });

});