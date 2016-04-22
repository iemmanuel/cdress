$( document ).ready(function() {
   
var currentShirt = 0;
function loadShirt(shirt){

var shirts = ["shirt1.jpg","shirt2.jpg","shirt3.jpg","shirt4.jpg","shirt5.jpg"];
$("#row1").append("<img src = \"shirts/" + shirts[0]+"\">");
}
var countTheArray = shirts.length;


for (var i = 0; i < shirts.length; i++) {
    document.getElementById("back1").onclick
    }
next.onclick = function(loadShirt){
        document.getElementById("currentImage").src = currentShirt + 1;
        currentShirt++;
    }
prev.onclick = function(loadShirt){
        document.getElementById("currentImage").src = currentShirt - 1;
        currentShirt--;
    }
$("#back1").click(function(){
    $("#row1").empty();
});
var ties = ["tie1.jpg","tie2.jpg","tie3.jpg","tie4.jpg","tie5.jpg"];
$("#row2").append("<img src =  \"ties/" + ties[1]+"\">");
    


var pants = ["pants1.jpg","pants2.jpg","pants3.jpg","pants4.jpg","pants5.jpg"];
$("#row3").append("<img src = \"pants/" + pants[1]+"\">");
    

var shoes = ["shoes1.jpg","shoes2.jpg","shoes3.jpg","shoes4.jpg","shoes5.jpg"];
$("#row4").append("<img src = \"shoes/" + shoes[1]+"\">");
    
});

