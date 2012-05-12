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

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(pos) {
            alert('Deine Position: ' + pos.coords.latitude + ' - ' 
                  + pos.coords.longitude);
        }, function(error) {
           //   0: unknown error
           //   1: permission denied
           //   2: position unavailable
           //   3: timed out
           alert('Outsch. Problem:' + error.code);
        });

        navigator.geolocation.watchPosition(function(position) {
            console.log('Neue Position: ' + position.coords.latitude 
                        + ' - ' + position.coords.longitude);
        });
    } else {
        alert('Geolokalisierung nicht verfügbar.');
    }

}());
