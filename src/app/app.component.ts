import { Component } from '@angular/core';
import { MenuService } from './services/menu.service';
import { MenuItem } from './models/menu-item';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 
  public menueItems$: Observable<MenuItem[]>;
  public isShowMenu: boolean;

  constructor(public menuservice: MenuService) {
  }

  ngOnInit() {
    this.menueItems$ = this.menuservice.getMenuItems();
    this.menuservice.isShowMenu.subscribe(isShow=> this.isShowMenu = isShow);
  }

  showMenu(){
    this.menuservice.showMenu(true);
  }

}
