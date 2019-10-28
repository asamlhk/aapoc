import { Component, OnInit } from '@angular/core';
import * as printJS from 'print-js';
import { PDFDocumentProxy } from 'pdfjs-dist';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  src = '/assets/sample.pdf';
  totalPages = 0;
  loadcompleted = false;
  print() {

    printJS(this.src);
  }



  afterLoadComplete(pdf: PDFDocumentProxy) {
    this.totalPages = pdf.numPages;
    setTimeout(
      () => {
        this.loadcompleted = true;
      }, 3000
    )

  }

  print2() {
    this.printPages(1, this.totalPages);

  }

  printPages(start, end) {
    let bloburl = [];
    for (let i = start; i <= end; i++) {
      const c: any = document.getElementById('page' + i);
      if (c) {
        const dl = c.toDataURL();
        bloburl.push(dl);
      }
    }
    let windowContent = '<!DOCTYPE html><body width="100%">';
    windowContent += '<button onClick="window.print()">Print</button>';

    bloburl.forEach(
      d => windowContent += '<img src=' + d + ' style="width:100%">'
    );

    windowContent += '</body>';
    const printWin = window.open('', '', '');
    printWin.document.open();
    printWin.document.write(windowContent);

    printWin.document.addEventListener('load', () => {
      printWin.focus();
      // printWin.print();
      // printWin.document.close();
      // printWin.close(); 
    }, true);
  }

  constructor(

  ) { }

  ngOnInit() {
  }

}
