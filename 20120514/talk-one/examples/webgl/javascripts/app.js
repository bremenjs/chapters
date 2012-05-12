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

    // 1. Schritt: Initialisierung
    var renderer = new THREE.WebGLRenderer(),
        $containerNode = document.querySelector('#render-area');

    var size = (function () {
        var height = window.innerHeight - 200;
        var width = window.innerWidth;

        return {
            height: height,
            width: width,
            ratio: (width / height)
        };
    }());

    // 2. Schritt: Kamera und Würfel erzeugen
    // camera
    var camera = new THREE.PerspectiveCamera(45, size.ratio, 0.1, 10000);
    camera.position.z = 1000;

    // scene
    var scene = new THREE.Scene();

    // cube
    var cube = new THREE.Mesh(
        new THREE.CubeGeometry(400, 400, 400),
        new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('http://goo.gl/cx0Dn', null, function () {
                renderer.render(scene, camera);
            })
        })
    );

    scene.add(camera);
    scene.add(cube);

    cube.rotation.x = 10;
    cube.rotation.y = 2;

    // 3. Schritt: Licht und Animation
    var directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(2, 2, 2).normalize();

    scene.add(directionalLight);

    renderer.setSize(size.width, size.height);

    window.setInterval(function () {
        cube.rotation.y = cube.rotation.y + 0.01;
        cube.rotation.x = cube.rotation.x + 0.01;

        renderer.render(scene, camera);
    }, 25);

    $containerNode.appendChild(renderer.domElement);
}());
