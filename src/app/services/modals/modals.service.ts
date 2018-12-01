import { Injectable } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  constructor(private ngxSmartModalService: NgxSmartModalService) {

  }

  showSimpleDialog(data) {
    this.ngxSmartModalService.setModalData(data, 'simpleModal');
    this.ngxSmartModalService.getModal('simpleModal').open();
  }
}
