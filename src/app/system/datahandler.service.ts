import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class DatahandlerService { 

  private page: BehaviorSubject<number> = new BehaviorSubject(0);
  private scroll: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private response: BehaviorSubject<string> = new BehaviorSubject("");
  private menu: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private mainState: BehaviorSubject<boolean> = new BehaviorSubject(false);
  
  public readonly CurrentPage: Observable<number> = this.page.asObservable();
  public readonly ActiveResponse: Observable<string> = this.response.asObservable();
  public readonly ScrollState: Observable<boolean> = this.scroll.asObservable();
  public readonly MainState: Observable<boolean> = this.mainState.asObservable();

  public readonly MenuState: Observable<boolean> = this.menu.asObservable();


  constructor() { }

  public SetResponse(resp: string) {
    this.response.next(resp);
  }

  public SetCurrentPage(page: number) {
    this.page.next(page);
  }

  public SetMenuState(state: boolean)
  {
    this.menu.next(state);
  }

  public SetScrollState(state: boolean)
  {
    this.scroll.next(state);
  }

  public SetAsMain(state: boolean)
  {
    this.mainState.next(state);
  }

}