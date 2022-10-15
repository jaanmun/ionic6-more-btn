import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

const MAX_COUNT = 7;
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('text') text: ElementRef;

  count = 2; // default
  isOpen = false;

  constructor(private renderer: Renderer2) {}

  inc(n: number) {
    this.count = Math.min(Math.max(1, this.count + n), MAX_COUNT);
    this.renderer.setStyle(this.text.nativeElement, 'webkitLineClamp', this.count);
  }

  more() {
    if (this.isOpen) {
      this.renderer.setStyle(this.text.nativeElement, 'display', '-webkit-box');
      this.isOpen = false; 
    } else {
      this.renderer.setStyle(this.text.nativeElement, 'display', 'block');
      this.isOpen = true; 
    }
  }

}
