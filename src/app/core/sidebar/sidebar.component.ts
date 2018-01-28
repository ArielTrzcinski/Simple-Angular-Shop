import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private coreService: CoreService) { }

  ngOnInit() {
  }

  filterBy(name:string) {
    this.coreService.typeOfProduct = name;
  }

}
