import {Component, OnInit} from '@angular/core';
import {MenuModel} from "../../../shared/models/menu.model";
import {PathEnum, PathNameEnum, TargetEnum} from "../../../shared/enums/path.enum";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  itemsStart: MenuModel[] = [
    {path: PathEnum.Start, name: PathNameEnum.Start, target: TargetEnum.Self},
    {path: PathEnum.Register, name: PathNameEnum.Register, target: TargetEnum.Blank}
  ];

  ngOnInit(): void {
  }

  onClickMenu(event: any) {
    console.log('clic en ', event);
  }

}
