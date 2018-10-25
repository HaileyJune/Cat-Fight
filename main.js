$(document).ready(function() {
  var src = "black.png";
  $(".player").hide();
  $("h3").hide();
  $("button").hover(
    function() {
      var alt = $(this).attr("alt");
      $("main").css("background-image", "url(images/" + alt + ")");
    },
    function() {
      if (!$("button").data("clicked")) {
        $("main").css("background-image", "url(images/" + src + ")");
      }
    }
  );
  $("h3").click(function() {
    $("main").html("<h4>" + $(".one").data("firstplayername") + "</h4>" + "<h4>" + $(".two").data("secondplayername") + "</h4>" + "<img class='char first' alt='character1' src='" + $(".one").data("firstplayerimg") + "'>" + "<img class='char second' alt='character2' src='" + $(".two").data("secondplayerimg") + "'>");
  });
  $("button").click(function() {
    $(this).data("clicked", true);
    $(".select").html(
      '<h1>Select Players</h1><img src="images/heisencat.png" alt="HeisenCat"><img src="images/riddlocat.png" alt="RiddloCat"><img src="images/oktobercat.png" alt="OktoberCat"><img src="images/domo-cat.png" alt="DomoCat"><img src="images/ironcat.png" alt="IronCat"><img src="images/stormtroopocat.png" alt="StormTroopoCat"><img src="images/cooler.png" alt="Cooler"><img src="images/daftpunk.gif" alt="DaftPunk">'
    );
    $(".player").show();
    $(".select img").mouseover(function() {
      if (!$(".one").data("firstplayername")) {
        var name = $(this).attr("alt");
        var pic = $(this).attr("src");
        $(".one h2").html(name);
        $(".one img").attr("src", pic);
      }
    });
    $(".select img").click(function() {
      if (!$(".one").data("firstplayername")) {
        var name = $(this).attr("alt");
        var pic = $(this).attr("src");
        $(".one").data("firstplayerimg", pic);
        $(".one").data("firstplayername", name);
        $(".one h2").html(name);
        $(".one img").attr("src", pic);
      }
      $(".select img").mouseover(function() {
        if (!$(".two").data("secondplayername")) {
          var name = $(this).attr("alt");
          var pic = $(this).attr("src");
          $(".two h2").html(name);
          $(".two img").attr("src", pic);
        }
      });
      $(".select img").click(function() {
        var name = $(this).attr("alt");
        var pic = $(this).attr("src");
        $(".two").data("secondplayerimg", pic);
        $(".two").data("secondplayername", name);
        $(".two h2").html(name);
        $(".two img").attr("src", pic);
        $("h3").show();
      });
    });
  });
});
