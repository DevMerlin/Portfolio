import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class DatahandlerService { 

  private mainState: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public readonly MainState: Observable<boolean> = this.mainState.asObservable();


  constructor() { }

  public SetAsMain(state: boolean)
  {
    this.mainState.next(state);
  }

}