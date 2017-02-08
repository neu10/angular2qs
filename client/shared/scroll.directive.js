/**
 * Created by Nutan on 2/7/2017.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// Directive decorator
var MyScrollDirective = (function () {
    function MyScrollDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    MyScrollDirective.prototype.clickListener = function (target) {
        event.preventDefault();
        var targetEl = $(target.hash);
        var scrollPos = targetEl.offset() ? targetEl.offset().top : 0;
        $("html, body").animate({ scrollTop: scrollPos }, 600);
    };
    __decorate([
        core_1.HostListener('click', ['$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], MyScrollDirective.prototype, "clickListener", null);
    MyScrollDirective = __decorate([
        core_1.Directive({ selector: '[myscroll]' }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], MyScrollDirective);
    return MyScrollDirective;
}());
exports.MyScrollDirective = MyScrollDirective;
//# sourceMappingURL=scroll.directive.js.map