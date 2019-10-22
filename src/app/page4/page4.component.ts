import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AddToHomeScreen } from "a2hs.js";
import Compressor from "compressorjs";

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {
  name = 'Angular';
  @ViewChild('fileInput', {
    static: true
  })
  fileInput: ElementRef;
  data = {
    originalFileSize: 0,
    compressedFileSize: 0
  };
  img = {
    origin: null,
    compressed: null
  };
  constructor() { }

  ngOnInit() {
    this.toogle();
    AddToHomeScreen();
  }

  toogle() {
    const _doc: any = document;
    const _element: any = Element;
    if (!_doc.fullscreenElement &&    // alternative standard method
      !_doc.mozFullScreenElement && !_doc.webkitFullscreenElement && !_doc.msFullscreenElement) {  // current working methods
      if (_doc.documentElement.requestFullscreen) {
        _doc.documentElement.requestFullscreen();
      } else if (_doc.documentElement.msRequestFullscreen) {
        _doc.documentElement.msRequestFullscreen();
      } else if (_doc.documentElement.mozRequestFullScreen) {
        _doc.documentElement.mozRequestFullScreen();
      } else if (_doc.documentElement.webkitRequestFullscreen) {
        _doc.documentElement.webkitRequestFullscreen(_element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (_doc.exitFullscreen) {
        _doc.exitFullscreen();
      } else if (_doc.msExitFullscreen) {
        _doc.msExitFullscreen();
      } else if (_doc.mozCancelFullScreen) {
        _doc.mozCancelFullScreen();
      } else if (_doc.webkitExitFullscreen) {
        _doc.webkitExitFullscreen();
      }
    }
  }

  fullscreen() {
    const w: any = window;
    return 'fullscreen:' + w.navigator.standalone;
  }


  selectFile = () => {
    const file = this.fileInput.nativeElement.files[0];

    const c = new Compressor(file, {
      quality: 0.5,
      success(result) {
        globalThis.data = {
          originalFileSize: file.size,
          compressedFileSize: result.size
        };

        globalThis.img = {
          origin: URL.createObjectURL(file),
          compressed: URL.createObjectURL(result)
        };

        const oimg: any = globalThis.document.getElementById('originImg')
        oimg.src = URL.createObjectURL(file);
        const cimg: any = globalThis.document.getElementById('compressedImg');
        cimg.src = URL.createObjectURL(result);
        //console.log(img1);
      }
    });

    this.data = globalThis.data;
  }

}
