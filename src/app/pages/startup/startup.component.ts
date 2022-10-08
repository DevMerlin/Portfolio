import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatahandlerService } from '../../system/datahandler.service';

@Component({
  selector: 'Start',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.scss'],
  host: {
    '(document:keyup)': 'registerEvent($event)'
  }
})
export class StartupComponent implements OnInit {

  hasClicked: boolean = false;
  showParent: boolean = true;

  pointAbout: number = 0;

  isReady: boolean = false;

  constructor(private router: Router, private data: DatahandlerService) { 
  }

  ngOnInit(): void {
    this.data.SetScrollState(false);
    this.data.SetAsMain(true);
    this.data.SetCurrentPage(0);
  }

  ngAfterViewInit()
  {
    this.isReady = true;
  }

  detectClick()
  {
    if (!this.hasClicked && this.isReady) {
      this.navHome();
    }
  }

  registerEvent(event: any)
  {
    
    if (event.keyCode > 0 && !this.hasClicked && this.isReady)
    {
      this.navHome();
    }
    
  }

  navHome()
  {
    this.router.navigate(['about']);
    this.data.SetScrollState(true);
  }

  ngOnDestroy()
  {
    window.removeEventListener('keydown', this.registerEvent);
  }

}
