import { Component, OnInit } from '@angular/core';
import { DatahandlerService } from 'src/app/system/datahandler.service';

@Component({
  selector: 'app-packetpop',
  templateUrl: './packetpop.component.html',
  styleUrls: ['./packetpop.component.scss']
})
export class PacketpopComponent implements OnInit {

  constructor(private data: DatahandlerService) { }

  ngOnInit(): void {
    this.data.SetScrollState(true);
    this.data.SetAsMain(false);        
  }

}
