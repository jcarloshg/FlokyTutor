import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesBadgeComponent } from './categories-badge/categories-badge.component';
import { CategoriesBadgeDirective } from './categories-badge/categories-badge.directive';


@NgModule({
    declarations: [
        CategoriesBadgeComponent,
        CategoriesBadgeDirective,
    ],
    imports: [CommonModule],
    exports: [
        CategoriesBadgeComponent,
    ],
    providers: [],
})
export class ManagePostComponentsModule { }