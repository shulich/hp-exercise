import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuItem } from 'src/app/models/menu-item';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  @Input() items$: Observable<MenuItem[]>;

  constructor(public menuservice: MenuService) { }

  ngOnInit() {
  }

  selectItem(item: MenuItem) {
    this.menuservice.showMenu(false);
  };
}



