import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuModel} from "../../models/menu.model";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input ('items') items: MenuModel[] = [];
  @Output ('onClick') onClickMenu= new EventEmitter<string>();

  ngOnInit(): void {
  }

  onClick(path: string) {
    this.onClickMenu.emit(path + '+++++++++++');
  }

}
