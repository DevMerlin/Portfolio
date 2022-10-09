import { Component, OnInit, HostListener, ViewChild, ElementRef, ChangeDetectorRef, Renderer2, Input  } from '@angular/core';
import { ChildrenOutletContexts, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { slideInAnimation } from './animations';
import { DatahandlerService } from './system/datahandler.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ],
  host: {
    '(document:scroll)': 'getScroll($event)'
  }
})
export class AppComponent implements OnInit {
  title = "Merlin's System";
  response: string = "";

  @Input() switchOff: boolean = true;
  menuState: boolean = false;
  showScroll: boolean = false;
  mainPage: boolean = true;
  currentPage: number = 0;
  maxPage: number = 6;
  countScrolls: number = 0;

  dayEffect: string = "day-clear";
  timeZone: string = "America/New_York";

  ScrollCheck!: Subscription;
  MenuCheck!: Subscription;
  pageCheck!: Subscription;
  isMain!: Subscription;
  
  @ViewChild('ScrollDisplay', { static: false}) parentRef!: ElementRef;


  constructor(
    private data: DatahandlerService, 
    private router: Router, 
    private contexts: ChildrenOutletContexts, 
    private cdRef: ChangeDetectorRef
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

    if (hours < 12)
    {
      output = 1; // Morning;
    } else if (hours >= 12 && hours <= 15) {
      output = 2; // Afternoon
    } else if (hours >= 15 && hours <= 17) {
      output = 3; // Evening
    } else if (hours >= 17 && hours <= 24) {
      output = 4; // Night
    }

    return output;
  }

  scrolled(e: any)
  {
    let nae = this.parentRef.nativeElement;
    let scrollY = nae.scrollTop;
    let scrollHeight = nae.scrollHeight;
    let offsetHeight = nae.offsetHeight;
    let elementHeight = Math.abs(scrollHeight - offsetHeight);

    if (scrollY >= elementHeight - nae.offsetTop) {
      this.nextPlus();
    } else if (scrollY === 0)
    {
      this.nextMinus();
    }
  }

  getScrollingElement(): Element {
    return document.scrollingElement || document.documentElement;
  }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }

  ngOnInit()
  {
    this.ScrollCheck = this.data.ScrollState.subscribe((data) => {
      this.showScroll = data;
      this.cdRef.detectChanges();
    }); 

    this.pageCheck = this.data.CurrentPage.subscribe((set) => {
      this.currentPage = set;
    });

    this.isMain = this.data.MainState.subscribe((set) => {
      this.mainPage = set;
    });

    this.MenuCheck = this.data.MenuState.subscribe((set: boolean) => {
      this.switchOff = !set;
      this.menuState = set;
    });

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
    }
  }

  onWheel(e: WheelEvent) {
    if (this.parentRef)
    {
      let deltaY = e.deltaY;
      if (deltaY < 0)
      {
        this.scrollAtTop();
      } else if (deltaY > 0) {
        this.scrollAtBottom();
      }
    }
  }

  scrollAtTop()
  {
    let nae = this.parentRef.nativeElement;
    let scrollY = nae.scrollTop;
    
    if (scrollY == 0)
    {
      this.nextMinus();
    }
  }

  scrollAtBottom()
  {
    let nae = this.parentRef.nativeElement;
    let scrollY = nae.scrollTop;
    let scrollHeight = nae.scrollHeight;
    let offsetHeight = nae.offsetHeight;
    let elementHeight = Math.abs(scrollHeight - offsetHeight);
    if (scrollY >= (elementHeight - nae.offsetTop) - 1) {
      this.nextPlus();
    }
  }

  nextPlus()
  {
    this.countScrolls++;

    if (this.countScrolls >= 4 && this.mainPage)
    {
      // Navigate to the next page //
      let next = this.currentPage;

      if (next < this.maxPage)
      {
        next++;
        this.gotoSetPage(next);
      }

      this.countScrolls = 0;
    }
  }

  nextMinus()
  {
    this.countScrolls++;
      
    if (this.countScrolls >= 4 && this.mainPage)
    {
      
      // Navigate to the previous page //
      let next = this.currentPage;
      if (next > 0)
      {
        next--;
        this.gotoSetPage(next);
      }

      this.countScrolls = 0;
    }
  }

  gotoSetPage(next: number = 0)
  {
    
    switch(next)
    {
      case 0:
        this.router.navigate(['']);
      break;
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

    this.currentPage = next;
  }

  openMenu()
  {
    let state = this.menuState;
    this.data.SetMenuState(!state);
  }

  ngOnDestroy()
  {
    this.ScrollCheck.unsubscribe();
    this.pageCheck.unsubscribe();
    this.isMain.unsubscribe();
  }
}