import { Component, OnInit } from '@angular/core';
import { DatahandlerService } from 'src/app/system/datahandler.service';

@Component({
  selector: 'app-fuseengine',
  templateUrl: './fuseengine.component.html',
  styleUrls: ['./fuseengine.component.scss']
})
export class FuseengineComponent implements OnInit {

  media: any;

  constructor(private data: DatahandlerService) { }

  ngOnInit(): void {
    this.data.SetScrollState(true);
    this.data.SetAsMain(false);        
  }

}
