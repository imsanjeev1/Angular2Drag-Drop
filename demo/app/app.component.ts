import {Component} from '@angular/core';
import {NgGrid, NgGridItem} from 'angular2-grid';

@Component({
    selector: 'my-app',
    template: '<div class="grid" [ngGrid]="{\'max_cols\': 12, \'auto_resize\': true}"><div class="grid-item" [ngGridItem]="{\'sizex\': 1, \'sizey\': 1}">Hi Rakesh</div><div class="grid-item" [ngGridItem]="">Hello Sanjeev</div></div>',
})
export class AppComponent {}