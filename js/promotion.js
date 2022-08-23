window.addEventListener("wheel", function(e){
    e.preventDefault();
},{passive : false});

var $html = $("html");
var page = 1;
var lastPage = $(".content").length;

$html.animate({scrollTop:0},10);

$(window).on("wheel", function(e){

if($html.is(":animated")) return;

if(e.originalEvent.deltaY > 0){
    if (page == lastPage) return;

    page++;
} else if(e.originalEvent.deltaY < 0){
    if (page == 1) return;

    page--;
}
var posTop = (page-1) * $(window).height();

$html.animate({scrollTop : posTop});

});

// floating
// $(document).ready(function () {

//     $("#box-btn").hide();

//     document.getElementById("icon-btn").onclick = function() {

//         if (document.getElementById("box-btn").style.display == "") {

//             document.getElementById("box-btn").style.display = "none";

//         } else {

//             document.getElementById("box-btn").style.display = "";
//         }
//     }
//   });
  // floating