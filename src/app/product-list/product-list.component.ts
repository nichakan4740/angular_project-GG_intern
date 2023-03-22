import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
import { MockupProductsService, Product } from '../service/mockup-products.service';


//test
import { TemplateRef, ViewChild } from '@angular/core';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { OpenOrderLinkComponent } from './open-order-link/open-order-link.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {


  @ViewChild('drawerFooter', { static: false }) drawerFooter?: TemplateRef<{
    $implicit: { value: string };
    drawerRef: NzDrawerRef<string>;
  }>;

  value = 'ng';

  products: Product[] = [];


  total: number = 0;
  pageIndex: number = 1;
  pageSize: number = 4;
  nameGroup: any;
  searchText: string = "";

  selectedOption: any;


  constructor(
    // private route: ActivatedRoute,
    private Service_MockupProducts: MockupProductsService,

    // test
    private drawerService: NzDrawerService
  ) { }


  openComponent(): void {
    const drawerRef = this.drawerService.create<OpenOrderLinkComponent, { value: string }, string>({
      nzTitle: 'การเพิ่มคุณสมบัติ',
      nzFooter: this.drawerFooter,
      // nzExtra: 'Extra',
      nzWidth: '90%',
      nzContent: OpenOrderLinkComponent
      // nzContentParams: {
      //   // value: this.value
      // }
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Component) open');
    });

    drawerRef.afterClose.subscribe(data => {
      console.log(data);
      if (typeof data === 'string') {
        this.value = data;
      }
    });
  }
  //////

  ngOnInit() {
    this.Service_MockupProducts.search({ page: this.pageIndex, page_size: this.pageSize, search: this.searchText }).then((res: any) => {
      this.products = res.data;
      this.total = res.count;
      // console.log(res)
    }).catch((error: any) => {
      console.log(error)
    })
    this.products = this.products.map((x: any) => {
      x.disable = false;
      return x;
    });
  }



  productPages(): void {
    this.Service_MockupProducts.search({ page: this.pageIndex, page_size: this.pageSize, search: this.searchText }).then((res: any) => {
      this.products = res.data;
      this.total = res.count;
      console.log(res)
    }).catch((error: any) => {
      console.log(error)
    })
  }



  search(name: string) {
    this.Service_MockupProducts.search({ page: this.pageIndex, page_size: this.pageSize, search: name }).then((res: any) => {
      this.products = res.data;
      this.total = res.count;
      console.log(res)
    }).catch((error: any) => {
      console.log(error)
    })
  }


  // inputSearch(){
  //   const data = input.search
  // ? products.filter((x) =>
  //     x.title_lang1.toLowerCase().includes(input.search.toLowerCase()) ||
  //     x.sku.toLowerCase().includes(input.search.toLowerCase())
  //   )
  // : products;
  // }


  onPageIndexChange(index: number): void {
    this.pageIndex = index;
    this.productPages();
  }


  onPageSizeChange(size: number): void {
    this.pageSize = size;
    this.productPages();
  }
  displayStyle = "none";
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}