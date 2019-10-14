import { Component, OnInit } from '@angular/core';
import * as printJS from 'print-js';
import { MlAnalyticService } from 'ml-analytic';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';

  print() {
    this.svc.trackEvent('print with printjs');
    printJS(this.src);
  }

  print2() {
    this.svc.trackEvent('print with canvas');
    const pageNumber = 3;
    let dataurl = [];
    for (let i = 1; i <= pageNumber; i++) {
      const c: any = document.getElementById('page' + i);
      dataurl.push(c.toDataURL());
    }
    let windowContent = '<!DOCTYPE html>';

    dataurl.forEach(
      d => windowContent += '<img style="width:100%" src="' + d + '">'
    );
    const printWin = window.open('', '', '');
    printWin.document.open();
    printWin.document.write(windowContent);

    printWin.document.addEventListener('load', function () {
      printWin.focus();
      printWin.print();
      printWin.document.close();
      printWin.close();
    }, true);
  }
  constructor(
    private svc: MlAnalyticService
  ) { }

  ngOnInit() {
  }

}
