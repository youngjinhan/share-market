$(document).ready(() => {
    let zidx = 10;
  
    $(".menu").mouseover(function () {
      $(this).css("color", "rgb(235, 147, 184)");
      $(this).css("background-color", "gray");
    });
  
    $(".menu").mouseleave(function () {
      $(this).css("color", "white");
      $(this).css("background-color", "black");
    });
  
    // 대여 버튼 마우스 오버시
    $(".sharemenu").mouseover(function () {
      $(this).next().css("opacity", 1);
      $(this)
        .next()
        .css("z-index", zidx++);
    });
  
    // 마우스 리브 add 삭제
    $("#semimenu-share").mouseleave(function () {
      $(this).css("opacity", 0);
      $(this).css("z-index", -1);
    });
  
    $(".buymenu").mouseover(function () {
      if ($("#semimenu-share").css("opacity") == 1) {
        $("#semimenu-share").css("opacity", 0);
      }
      $(this).next().css("opacity", 1);
      $(this)
        .next()
        .css("z-index", zidx++);
    });
  
    // 마우스 리브 add 삭제
    $("#semimenu-buy").mouseleave(function () {
      $(this).css("opacity", 0);
      $(this).css("z-index", -1);
    });
  
    $(".carpoolmenu").mouseover(function () {
      if ($("#semimenu-buy").css("opacity") == 1) {
        $("#semimenu-buy").css("opacity", 0);
      }
      $(this).next().css("opacity", 1);
      $(this)
        .next()
        .css("z-index", zidx++);
    });
  
    $("#semimenu-carpool").mouseleave(function () {
      $(this).css("opacity", 0);
      $(this).css("z-index", -1);
    });
  
    // 판매 버튼 마우스 오버시
    $(".sellmenu").mouseover(function () {
      if ($("#semimenu-carpool").css("opacity") == 1) {
        $("#semimenu-carpool").css("opacity", 0);
      }
    });
  });