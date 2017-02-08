/**
 * Created by Nutan on 2/7/2017.
 */

import {Directive, HostListener, ElementRef, Renderer} from '@angular/core';
declare let $: any;

// Directive decorator
@Directive({selector: '[myscroll]'})
// Directive class
export class MyScrollDirective {
  constructor(private renderer: Renderer,
              private el: ElementRef) {
  }

    @HostListener('click', ['$event.target']) clickListener(target) {//target is the clicked element
      event.preventDefault();
      let targetEl = $(target.hash);
      let scrollPos = targetEl.offset() ? targetEl.offset().top : 0;
      $("html, body").animate({ scrollTop:scrollPos }, 600);
  }
}
