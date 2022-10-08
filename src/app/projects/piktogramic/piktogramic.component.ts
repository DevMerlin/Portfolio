import { Component, OnInit } from '@angular/core';
import { DatahandlerService } from 'src/app/system/datahandler.service';

@Component({
  selector: 'app-piktogramic',
  templateUrl: './piktogramic.component.html',
  styleUrls: ['./piktogramic.component.scss']
})
export class PiktogramicComponent implements OnInit {
  imageObject: Array<object> = [{
    image: `assets/projects/PiktogramicShotOne.png`,
  }];

  constructor(private data: DatahandlerService) { }

  ngOnInit(): void {
    this.data.SetScrollState(true);
    this.data.SetAsMain(false);    
  }

}
