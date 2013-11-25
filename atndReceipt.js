$(function(){
  $("body").html($("#events-members").html(););
  $(".a-b li em").each(function(){
    $(this).remove();
  });
  $(".a-b li").css("list-style-position","inside").each(function(){
    $(this).prepend('<input type="checkbox">/<input type="checkbox">');
  });
  $(".a-b li a").removeAttr("href").css("text-decoration","none");
  $("*").css("text-align","left");
  $("head").append('<meta name="viewport" content="width=device-width">');
  $("#members-info,#members-cancel").remove();
});
