import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from '../models/menu-item';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private _jsonURL = 'assets/menuItem.json';
  private _isShowMenu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public isShowMenu = this._isShowMenu.asObservable();
  
  constructor(private http: HttpClient) { }

  public getMenuItems(): Observable<MenuItem[]> {
    return this.http.get(this._jsonURL) as Observable<MenuItem[]>;
  }

  showMenu(isShow: boolean){
    this._isShowMenu.next(isShow);
  }
}
