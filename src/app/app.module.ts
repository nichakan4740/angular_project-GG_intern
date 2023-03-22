import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSwitch, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// import { ProductListComponent } from './product-list/product-list.component';


import { NzTableModule } from 'ng-zorro-antd/table';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { PipeProductsModule } from 'src/shared/pipe/pipe-products/pipe-products.module'
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { MenuFoldOutline, MenuUnfoldOutline } from '@ant-design/icons-angular/icons';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { IconsProviderModule } from './icons-provider.module';

registerLocaleData(en);



@NgModule({
  declarations: [	
    AppComponent,
    // ProductListComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NzTableModule,
    NzFormModule,
    NzRadioModule,
    NzCheckboxModule,
    NzPaginationModule,
    NzButtonModule,
    NzCollapseModule,
    BrowserAnimationsModule,
    NzInputModule,
    NzDividerModule,
    FormsModule,
    PipeProductsModule,
    NzCardModule,
    NgSwitch,
    NzIconModule.forRoot([MenuFoldOutline, MenuUnfoldOutline]),
    NzSwitchModule,
    ReactiveFormsModule,
    NzModalModule,
    NzDropDownModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    HttpClientModule,
    RouterModule,
    IconsProviderModule

  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
