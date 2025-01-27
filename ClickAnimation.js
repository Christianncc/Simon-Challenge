import {music1,music2,music3,music4,music5} from "./AudioColor.js";

export var Greenbox = () => {
    $(".Green").on("click", function() {
        $(".Green").fadeOut(30).fadeIn(30);
        music1();
        setTimeout(function () {
            $("body").removeClass("background-red");
          }, 200);
        $(".Green").addClass("Greeny");
        setTimeout(function () {
            $(".Green").removeClass("Greeny");
            }, 200);  
    })
}

export var Whitebox = () => {
    $(".White").on("click", function() {
        $(".White").fadeOut(30).fadeIn(30);
        music2();
        setTimeout(function () {
            $("body").removeClass("background-red");
          }, 200);
          $(".White").addClass("Whitey");
        setTimeout(function () {
            $(".White").removeClass("Whitey");
            }, 200);
    })
    }

export var Redbox = () => {
    $(".Red").on("click", function() {
        
        $(".Red").fadeOut(30).fadeIn(30);
        music3();
        setTimeout(function () {
            $("body").removeClass("background-red");
          }, 200);
          $(".Red").addClass("Redy");
          setTimeout(function () {
              $(".Red").removeClass("Redy");
              }, 200);
    })
        }
export var Bluebox = () => {
    $(".Blue").on("click", function() {  
        $(".Blue").fadeOut(30).fadeIn(30);
        music5();
        setTimeout(function () {
            $("body").removeClass("background-red");
          }, 200);
          $(".Blue").addClass("Bluey");
          setTimeout(function () {
              $(".Blue").removeClass("Bluey");
              }, 200);
    })
            }





