import { Injectable } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { NzModalService } from "ng-zorro-antd/modal"

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modal_service: NzModalService) { }

  openMyModal() {
    this.modal_service.create({
      nzTitle: 'Modal Title',
      nzContent: ModalComponent
    });
  }

}
