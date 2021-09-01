import { Component, AfterViewInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { EventDisplayService } from 'phoenix-ui-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  year: number;

  constructor(
    private eventDisplay: EventDisplayService,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {
    this.year = new Date().getFullYear();
    this.eventDisplay.getThreeManager().stopAnimationLoop();

    let script = this._renderer2.createElement('script');
    script.type = `module`;
    script.text = `
    import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.min.js";
    import { TrackballControls } from "https://orvillechomer.github.io/miscJsFiles/THREEJS/r120/jsm/controls/TrackballControls.js";
    import {
      CSS3DRenderer,
      CSS3DObject,
    } from "https://orvillechomer.github.io/miscJsFiles/THREEJS/r120/jsm/renderers/CSS3DRenderer.js";
  
    let camera, scene, renderer;
    let controls;
  
    function Element(id, x, y, z, ry) {
      const div = document.createElement("div");
      div.style.width = "480px";
      div.style.height = "360px";
      div.style.backgroundColor = "#000";
  
      const iframe = document.createElement("iframe");
      iframe.style.width = "480px";
      iframe.style.height = "360px";
      iframe.style.border = "0px";
      iframe.src = ["https://www.youtube.com/embed/", id, "?rel=0"].join("");
      div.appendChild(iframe);
  
      const object = new CSS3DObject(div);
      object.position.set(x, y, z);
      object.rotation.y = ry;
  
      return object;
    }
  
    init();
    animate();
  
    function init() {
      const videoContainer = document.getElementById("videoContainer");
  
      camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        1,
        5000
      );
      camera.position.set(500, 350, 750);
  
      scene = new THREE.Scene();
  
      renderer = new CSS3DRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      videoContainer.appendChild(renderer.domElement);
  
      const group = new THREE.Group();
      group.add(new Element("bv-wFtA0gCQ", 0, 0, 240, 0));
      group.add(new Element("y-GchoT0rKk", 240, 0, 0, Math.PI / 2));
      group.add(new Element("8lbQUa8z3M0", 0, 0, -240, Math.PI));
      group.add(new Element("rsmBMuTFdkA", -240, 0, 0, -Math.PI / 2));
      scene.add(group);
  
      controls = new TrackballControls(camera, renderer.domElement);
      controls.rotateSpeed = 4;
  
      window.addEventListener("resize", onWindowResize);
  
      // Block iframe events when dragging camera
  
      const blocker = document.getElementById("blocker");
      blocker.style.display = "none";
  
      controls.addEventListener("start", function () {
        blocker.style.display = "";
      });
      controls.addEventListener("end", function () {
        blocker.style.display = "none";
      });
    }
  
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
  
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }`;
    
    this._renderer2.appendChild(this._document.body, script);  
  }

  ngAfterViewInit() {
    this.eventDisplay.getUIManager().detectColorScheme();
  }
}
