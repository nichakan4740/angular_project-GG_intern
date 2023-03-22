import { NgModule } from '@angular/core';
import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import { OpenOrderLinkComponent } from './open-order-link/open-order-link.component';
import { CommonModule } from '@angular/common';

// angular
import { NgSwitch } from '@angular/common';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSwitchCase } from '@angular/common';
import { NgSwitchDefault } from '@angular/common';
import { NgForOf } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';

// antd
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';




@NgModule({
    imports: [
        ProductListRoutingModule,
        CommonModule,

        // angular
        NgSwitch,
        NgClass,
        FormsModule,
        NgSwitchCase,
        NgSwitchDefault,
        NgForOf,
        // BrowserModule,

        // antd
        NzCheckboxModule ,
        NzSwitchModule,
        NzDropDownModule,
        NzTableModule,
        NzPaginationModule,
        NzInputModule,
        NzCollapseModule,
        NzGridModule,
        NzCardModule,
        NzDrawerModule,
        NzButtonModule,
        NzSelectModule,
        NzDatePickerModule,
        NzFormModule,
        NzSpaceModule,
        NzDividerModule,
        NzTabsModule
    ],
    declarations: [
        ProductListComponent,
        OpenOrderLinkComponent
    ],
    exports: [
        ProductListComponent,
        OpenOrderLinkComponent]
})
export class ProductListModule { }