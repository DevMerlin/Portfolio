import { Component, OnInit } from '@angular/core';
import { DatahandlerService } from 'src/app/system/datahandler.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private data: DatahandlerService) { }

  ngOnInit(): void {
    this.data.SetScrollState(true);
    this.data.SetAsMain(true);
    this.data.SetCurrentPage(3);
  }

}
