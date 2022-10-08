import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatahandlerService } from 'src/app/system/datahandler.service';

import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

// import pikto from 'assets/json/piktogramic.json';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  pageID?: string = "";
  pageSub!: Subscription;
  pageContent: string = "";

  // private Piktogramic = pikto;

  constructor(private data: DatahandlerService, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.data.SetScrollState(true);
    this.data.SetAsMain(false);  

    this.pageID = this.route.snapshot.paramMap.get('page')?.toString();

 
    switch(this.pageID)
    {
      case "piktogramic":
         //console.log(this.getFileContents(this.Piktogramic));
      break;
    }
     // console.log(pikto);
  }

  async getFileContents(url: string)
  {
    return await this.http.get(url).subscribe((data) => {
      return data;
    });
  }

  getJSON(url: string): Observable<any> {
    return this.http.get(url);
  }

}