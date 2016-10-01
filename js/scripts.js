//popup form

var link = document.querySelector(".btn_box_1");
var popup = document.querySelector(".search");
var form = popup.querySelector("form");
var dateIn = document.querySelector("[name='hotel-in']");
var dateOut = document.querySelector("[name='hotel-out']");
var adult = document.querySelector("[name='adults']");
var child = document.querySelector("[name='children']");
        
    link.addEventListener ("click", function(event) {
        event.preventDefault();

        if (popup.classList.contains("search_show")) {
            popup.classList.remove("search_show");
        } else {
            popup.classList.add("search_show");
            setTimeout(function() { dateIn.focus()}, 1100);
        }

    });

    form.addEventListener("btn_box_2", function(event) {
        if (!(dateIn.value && dateOut.value && adult.value)) {
          event.preventDefault();
          alert("Пожалуйста, заполните все необходимые поля");
        }
    });


//map

function initialize () {
    var mapOptions = {
        zoom: 9,
        center: new google.maps.LatLng(34.8630532, -111.7858492)
    }

    var map = new google.maps.Map(document.getElementById( "map_canvas" ), mapOptions);

    var myLatLng = new google.maps.LatLng(34.8630532, -111.7858492);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
            
    });
}
google.maps.event.addDomListener(window, "load", initialize);