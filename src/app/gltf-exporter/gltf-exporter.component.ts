import {
  Component,
  AfterViewInit,
  Renderer2,
  Inject,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScriptLoader } from 'phoenix-event-display';
import * as FileSaver from 'file-saver';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

@Component({
  selector: 'app-gltf-exporter',
  templateUrl: './gltf-exporter.component.html',
  styleUrls: ['./gltf-exporter.component.scss'],
})
export class GltfExporterComponent implements AfterViewInit {
  year: number;

  rootURL = this.formBuilder.group({
    rooturl: '',
    rootObject: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {
    this.year = new Date().getFullYear();

    /// a way to run javascript ES6 code inside Typescript
    let js_script = this._renderer2.createElement('script');
    js_script.type = 'module';

    /// add your javascript code inside the ``
    js_script.text = `



    `;

    /// appending the script tag inside the body of our document.
    /// similar to "manually" adding the script tag and the js code at the end of the <body> tag
    this._renderer2.appendChild(this._document.body, js_script);

    ScriptLoader.loadJSRootScripts().then((JSROOT) => {
      /// ... perform JSROOT operations

      /**
       * un-comment the following line and
       * create a div with an id="rootGUI"
       * and that way you'll have the jsRoot GUI with io operations
       * displayed on that particular div.
       */
      JSROOT.buildGUI('rootGUI');
    });
  }

  /**
   * Each time the user clicks the "Import ROOT" button
   * We want to draw that particular root geometry
   * inside our <div id="drawing"></div>
   */
  onSubmit(): void {
    console.log(this.rootURL.value.rooturl);
    console.log(this.rootURL.value.rootObject);

    let rootFilename = this.rootURL.value.rooturl;
    let rootObject = this.rootURL.value.rootObject;

    ScriptLoader.loadJSRootScripts().then((JSROOT) => {
      /// ... perform JSROOT operations

      /// web links to root files can be used as well as local files

      // let filename = 'https://root.cern/js/files/hsimple.root'; /// Object: hpxpy;1
      // let filename = '../../../assets/geometry/lhcbfull.root'; /// Object: Geometry;1

      JSROOT.openFile(rootFilename)
        .then((file) => file.readObject(rootObject))
        .then((obj) => JSROOT.draw('drawing', obj, 'colz'))
        //.then(() => console.log('drawing completed'));
    });
  }

  exportGeometry(): void {
    let rootFilename = this.rootURL.value.rooturl;
    let rootObject = this.rootURL.value.rootObject;
    let objToBeExported = null;

    console.log(rootFilename);
    console.log(rootObject);

    ScriptLoader.loadJSRootScripts().then((JSROOT) => {
      JSROOT.openFile(rootFilename)
        .then((file) => file.readObject(rootObject))
        .then((obj) => (objToBeExported = obj))
        .then(() => this.exportFinaly(objToBeExported));
    });

    /// The below method is responsible for the button "Clear Scene"
    /// It basically empties the root url, object values and clear's the #draw div element
    this.rootURL.reset();
  }

  exportFinaly(threeObj): void {
    let exporter = new GLTFExporter();

    // comment out the numfaces, numnodes for better performance (removes geometry layers)
    // uncomment for a more in depth geometry visualization (affects the performance)
    let opt = {
      numfaces: 5000000,
      numnodes: 50000,
      dflt_colors: true, // apply default ROOT colors
      vislevel: 4
    };

    ScriptLoader.loadJSRootScripts().then((JSROOT) => {
      // building a three.js model from a .root model
      // @DOC https://github.com/root-project/jsroot/blob/master/docs/JSROOT.md#tgeo-api
      let obj3d = JSROOT.GEO.build(threeObj, opt);

      exporter.parse(
        obj3d,
        (gltf) => {
          console.log(obj3d);
          console.log(gltf);

          let fileToSave = new Blob([JSON.stringify(gltf)], {
            type: 'application/json',
          });

          // Save the file
          FileSaver.saveAs(fileToSave, 'exportedGeom.gltf');
        },
        {} // keeping default options is sufficient.
      );
    });
  }

  /// File Handling (to import local root files)

  handleROOTInput(e: Event) {

    let exporter = new GLTFExporter();

    // comment out the numfaces, numnodes for better performance (removes geometry layers)
    // uncomment for a more in depth geometry visualization (affects the performance)
    let opt = {
      numfaces: 5000000,
      numnodes: 50000,
      dflt_colors: true, // apply default ROOT colors
      vislevel: 4
    };

    /// The following comment suppresses the error "object is possibly null" as we're sure that after importing the file it won't be! 
    // @ts-ignore: Object is possibly 'null'.
    let file = (<HTMLInputElement>e.target).files[0];
    console.log("Is the root file read properly? 👉", file);

    ScriptLoader.loadJSRootScripts().then((JSROOT: any) => {
      const objectName = prompt('Enter object name in ROOT file');
      JSROOT.openFile(file).then((file: any) => {
        file.readObject(objectName).then((obj: any) => {
          JSROOT.draw('drawing', obj, 'colz');
          console.log("Drawing completed!");

          // building a three.js model from a .root model
          // @DOC https://github.com/root-project/jsroot/blob/master/docs/JSROOT.md#tgeo-api
          let obj3d = JSROOT.GEO.build(obj, opt);

          exporter.parse(
            obj3d,
            (gltf) => {
              console.log(obj3d);
              console.log(gltf);
    
              let fileToSave = new Blob([JSON.stringify(gltf)], {
                type: 'application/json',
              });
    
              // Save the file
              FileSaver.saveAs(fileToSave, 'exportedGeom.gltf');
            },
            {} // keeping default options is sufficient.
          );
        });
      });
    });
  }
  
  ngAfterViewInit() {}
}