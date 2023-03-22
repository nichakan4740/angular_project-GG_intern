import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Input, TemplateRef, ViewChild } from '@angular/core';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

import { MockupProductsService, Product } from '../../service/mockup-products.service';

@Component({
  selector: 'app-open-order-link',
  templateUrl: './open-order-link.component.html',
  styleUrls: ['./open-order-link.component.css']
})
export class OpenOrderLinkComponent implements OnInit {

  products: Product[] = [];

  @ViewChild('drawerFooter', { static: false }) drawerFooter?: TemplateRef<{
    $implicit: { value: string };
    drawerRef: NzDrawerRef<string>;
  }>;


  openTemplate(): void {
    const drawerRef = this.drawerService.create({
      nzTitle: 'Template',
      nzFooter: this.drawerFooter,
      nzExtra: 'Extra',
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Template) open');
    });

    drawerRef.afterClose.subscribe(() => {
      console.log('Drawer(Template) close');
    });
  }

  @Input() value = '';

  constructor(private drawerRef: NzDrawerRef<string>,
    private Service_MockupProducts: MockupProductsService,
    private drawerService: NzDrawerService
  ) { }

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

  selects: {
    id: number;
    sku: string;
    title_lang1: string;
    group_id: string;
    group: string;
    disable: boolean;
    productIndex: number;
    check: boolean;
    default: boolean;
    nameProp: string;
    propValueMain: string;
    propValueSub: string;
  }[] = [];

  groups: {
    group_id: string;
    group: string;
    member: {
      [key: string]: any;
      id: number;
      sku: string;
      title_lang1: string;
      disable: boolean;
      productIndex: number;
      check: boolean;
      default: boolean;
      nameProp: string;
      propValueMain: string;
      propValueSub: string;
    }[];
  }[] = [];

  propGroups: {
    [key: string]: any;
    id: number;
    sku: string;
    title_lang1: string;
    disable: boolean;
    productIndex: number;
    check: boolean;
    default: boolean;
    nameProp: string;
    propValueMain: string;
    propValueSub: string;
  }[] = [];

  total: number = 0;
  pageIndex: number = 1;
  pageSize: number = 4;
  nameGroup: any;

  selectedOption: any;

  selectAll: boolean = false;
  searchText: string = "";

  mainProp: string = '';
  mainValue: string = '';
  subProp: string = '';
  subValue: string = '';

  checkboxAll: boolean = false;

  switch: boolean = false;


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


  onPageIndexChange(index: number): void {
    this.pageIndex = index;
    this.productPages();
  }


  onPageSizeChange(size: number): void {
    this.pageSize = size;
    this.productPages();
  }


  close(): void {
    this.drawerRef.close(this.value);
  }


  toggleSelectAll(resetSelection: boolean = false) {
    this.selectAll = !this.selectAll;
    if (resetSelection) {
      this.selects = [];
    } else {
      this.selects = this.selectAll ? [...this.products] : [];
    }
    this.products = this.products.map((x: Product, index: number) => {
      x.disable = this.selectAll;
      x.productIndex = index;
      return x;
    });
  }


  selected(product: Product) {
    if (!this.selectAll && product) {
      let pass = true;
      let selectIndex = this.selects.findIndex((x: any) => x.sku === product.sku);
      product.disable = true
      if (selectIndex > -1) {
        console.log('found same product');
        pass = false;
      }
      if (pass) {
        let select = {
          id: product.id,
          sku: product.sku,
          title_lang1: product.title_lang1,
          group_id: product.group_id,
          group: product.group,
          disable: product.disable,
          productIndex: this.products.indexOf(product),
          check: product.check,
          default: product.default,
          nameProp: product.nameProp,
          propValueMain: product.propValueMain,
          propValueSub: product.propValueSub
        }
        this.selects.push(select);
      }
    }
  }


  createGroup() {
    if (!this.nameGroup) {
      alert('กรุณาตั้งชื่อกลุ่มและเลือกสินค้า');
      return;
    }
    let isGroupExists = this.groups.some(group => group.group === this.nameGroup);
    if (isGroupExists) {
      alert('ชื่อกลุ่มนี้ถูกใช้ไปแล้วกรุณาตั้งชื่อใหม่');
      return;
    }
    alert(`สร้างกลุ่มชื่อ: ${this.nameGroup} สำเร็จ`);
    for (let i = 0; i < this.selects.length; i++) {
      const product_selects = this.selects[i];
      product_selects.group = this.nameGroup;

      let pass = false;
      for (let j = 0; j < this.groups.length; j++) {
        let group_selected = this.groups[j];
        if (group_selected.group === product_selects.group) {
          group_selected.member.push(product_selects);
          pass = true;
          break;
        }
      }
      if (!pass) {
        const newGroup = {
          group_id: '',
          group: product_selects.group,
          id: 0,
          sku: '',
          title_lang1: '',
          disable: false,
          productIndex: 0,
          member: [product_selects]
        };
        this.groups.push(newGroup);
      }
    }
  }


  remove(i: number) {
    if (this.selects[i]) {
      let productIndex = this.selects[i].productIndex;
      this.selects.splice(i, 1);
      let product = this.products[productIndex];
      product.disable = false;
    }
  }


  selectedItems: any[] = [];
  checkAll() {
    this.selectedItems = [];
    for (const group of this.groups) {
      for (const member of group.member) {
        member.check = this.checkboxAll;
        if (member.check) {
          this.selectedItems.push(member);
          console.log(this.selectedItems);
        }
      }
    }
  }


  checkSingle() {
    this.selectedItems = [];
    for (const group of this.groups) {
      for (const member of group.member) {
        if (member.check) {
          this.selectedItems.push(member);
        }
      }
    }
  }


  onUpdateSub() {
    if (this.selectedItems) {
      this.propGroups = this.selectedItems
      console.log(this.propGroups)
      for (const member_prop of this.propGroups) {
        if (member_prop) {
          member_prop.nameProp = this.subProp;
          member_prop.propValueSub = this.subValue;
        }
      }
    }
  }


  onSwitch(id: number) {
    for (const group of this.groups) {
      for (const member of group.member) {
        if (member.id == id) {
          member.default = !member.default;
          console.log(this.switch)
          console.log(member.default)
          console.log(member)
          break;
        }
      }
    }
  }


  onSubmit() {
    if (this.selectedItems) {
      this.propGroups = this.selectedItems
      console.log(this.propGroups);
      alert(`บันทึกเรียบร้อย`);
      for (const member_prop of this.propGroups) {
        if (member_prop) {
          let from = 12, to = 18;
          let result = this.mainValue + "-" + this.subValue;
          member_prop.sku = member_prop.sku.substring(0, from) + result + member_prop.sku.substring(to);
        }
      }
    }
  }


  onUpdateMain() {
    if (this.selectedItems) {
      this.propGroups = this.selectedItems
      console.log(this.propGroups)
      for (const member_prop of this.propGroups) {
        if (member_prop) {
          member_prop.nameProp = this.mainProp;
          member_prop.propValueMain = this.mainValue;
        }
      }
    }
  }
}


