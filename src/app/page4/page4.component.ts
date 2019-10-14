import { Component, OnInit } from '@angular/core';
import { AddToHomeScreen } from "a2hs.js";

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {

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
    return "fullscreen:" + w.navigator.standalone;
  }

}
