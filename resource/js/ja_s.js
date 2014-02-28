$(document).ready(function() {
    var activeId = $(".active").each(function(){
        $("#content" + $(this).attr("id").replace("tab","")).show();
    });
    $(".tabs a").click(function() {
        var $tabs =$(this).closest(".tabs");
        $("#content" +$tabs.attr("data-lastContent")).hide();
        $(this).closest(".tabs").find(".active").removeClass("active");
        $(this).addClass("active")
        var id = $(this).closest("li").attr("id").replace("tab","");
        $tabs.attr("data-lastContent", id);
        $("#content" + id).show();
    });
});
