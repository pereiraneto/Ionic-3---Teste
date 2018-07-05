import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about';
import { MenuListComponent } from './menu-list/menu-list';
@NgModule({
	declarations: [AboutComponent,
    MenuListComponent],
	imports: [],
	exports: [AboutComponent,
    MenuListComponent]
})
export class ComponentsModule {}
