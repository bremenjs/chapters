/*
* Bremen.js
*
* Licensed under the MIT:
* http://www.opensource.org/licenses/mit-license.php
*
*
* Authors:
*
*     Andre Koenig <andre.koenig@gmail.com>
*
*/

"use strict";

(function () {

    var $fileSelector,
        $output;

    // 1. Schritt: Feature-Detection
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        $fileSelector = document.querySelector('#file');
        $output = document.querySelector('#output');

        $fileSelector.addEventListener('change', handleFileSelection);
    } else {
        alert('Dein Browser unterstützt nicht die File API.');
    }

    // 2. Schritt: Event bei Dateiauswahl
    function handleFileSelection (evt) {
        var file = evt.target.files[0],
            reader = new FileReader();

        reader.onload = function (event) {
            var content = event.target.result;

            $output.value = content;
        };

        reader.readAsText(file);
    }
}());
