import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { DatahandlerService } from 'src/app/system/datahandler.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showMenu: boolean = false;
  MenuState!: Subscription;
  barIcon = faBars;

  @ViewChild('dropdown', { static: false}) dropdown!: ElementRef;


  constructor(private router: Router, private data: DatahandlerService, private renderer: Renderer2) 
  {}

  ngOnInit(): void {
    this.MenuState = this.data.MenuState.subscribe((data: boolean) => {
      this.showMenu = data;
    });
  }

  onClick()
  {
    this.dropdown.nativeElement.classList.toggle("show");
  }

  ngAfterViewInit()
  {
    this.renderer.listen('window', 'click',(e:Event)=>{
        let el: any = e.target;
        let panelCheck = el.closest(".toggleSwitch");
        let menuCheck = el.closest(".menu") || el.closest(".menuslot");

        if ((panelCheck === null && menuCheck === null) && this.showMenu)
        {
          this.setMenuVisibility();
        }
    });
  }

  navigate(dest: number = 0)
  {
    switch(dest)
    {
      case 1:
        this.router.navigate(['about']);
      break;
      case 2:
        this.router.navigate(['skills']);
      break;
      case 3:
        this.router.navigate(['projects']);
      break;
      case 4:
        this.router.navigate(['contact']);
      break;  
    }

    this.setMenuVisibility();
  }

  setMenuVisibility()
  {
    this.showMenu = !this.showMenu;
    this.data.SetMenuState(this.showMenu);
  }

  ngOnDestroy()
  {
    this.MenuState.unsubscribe();
  }

}
