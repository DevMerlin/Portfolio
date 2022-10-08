import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DatahandlerService } from 'src/app/system/datahandler.service';

@Component({
  selector: 'Main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private data: DatahandlerService) { }

  ngOnInit(): void {
    this.data.SetScrollState(true);
    this.data.SetCurrentPage(1);
    this.data.SetAsMain(true);
  }

}
