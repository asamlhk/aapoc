import { Component, OnInit } from '@angular/core';
import * as printJS from 'print-js';
import { AdobeAnalyticService } from '../adobe-analytic.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';

  print() {
    this.adobeSvc.trackEvent('print with printjs');
    printJS(this.src);
  }

  print2() {
    this.adobeSvc.trackEvent('print with canvas');
    const pageNumber = 3;
    let dataurl = [];
    for (let i = 1; i <= pageNumber; i++) {
      const c: any = document.getElementById('page' + i);
      dataurl.push(c.toDataURL());
    }
    let windowContent = '<!DOCTYPE html>';

    dataurl.forEach(
      d => windowContent += '<img src="' + d + '">'
    );
    const printWin = window.open('', '', 'width=' + screen.availWidth + ',height=' + screen.availHeight);
    printWin.document.open();
    printWin.document.write(windowContent);

    printWin.document.addEventListener('load', function () {
      printWin.focus();
      printWin.print();
      printWin.document.close();
      printWin.close();
    }, true);
  }
  constructor(private adobeSvc: AdobeAnalyticService) { }

  ngOnInit() {
  }

}
