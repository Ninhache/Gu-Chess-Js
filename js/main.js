"use strict";

function define_html_elements() {
    canvas = document.querySelector("#my_canvas");
}



window.onload = () => {
    define_html_elements();

    board = new Board();

}