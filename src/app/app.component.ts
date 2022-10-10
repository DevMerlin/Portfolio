import { Component, OnInit, HostListener, ViewChild, ElementRef, ChangeDetectorRef, Renderer2, Input  } from '@angular/core';
import { ChildrenOutletContexts, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { slideInAnimation } from './animations';
import { DatahandlerService } from './system/datahandler.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit {
  title = "Merlin's System";
  response: string = "";

  @Input() switchOff: boolean = true;
  mainPage: boolean = true;
  pageScrollPos: number = 0;

  dayEffect: string = "day-clear";
  timeZone: string = "America/New_York";

  PageChange!: Subscription;
  
  @ViewChild('ScrollDisplay', { static: false}) parentRef!: ElementRef;


  constructor(
    private data: DatahandlerService, 
    private contexts: ChildrenOutletContexts
  ) { }



  animationData()
  {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  getPhaseOfDay()
  {
    let initDate = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
    let date = new Date(initDate);
    let hours = date.getHours();

    let output = 0;

    if (hours <= 12 && hours >= 7)
    {
      output = 1; // Morning;
    } else if (hours >= 12 && hours <= 15) {
      output = 2; // Afternoon
    } else if (hours >= 15 && hours <= 17) {
      output = 3; // Evening
    } else if (hours >= 17 && hours <= 24) {
      output = 4; // Night
    } else if (hours < 7) {
      output = 5; // Night
    }

    return output;
  }

  ngOnInit()
  {

    let dayPhase = this.getPhaseOfDay();

    switch(dayPhase)
    {
      case 1:
      case 2:
      case 3:
        this.dayEffect = "day-clear";
      break;
      case 4:
        this.dayEffect = "night-clear";
      break;
      case 5:
        this.dayEffect = "night-deep";
      break;
    }
  }

  ngAfterViewInit()
  {
    this.PageChange = this.data.MainState.subscribe((data) => {
      if (this.parentRef)
      {
        this.parentRef.nativeElement.scrollTo(0, 0);
      }
    });
  }

  ngOnDestroy()
  {
    this.PageChange.unsubscribe();
  }
}