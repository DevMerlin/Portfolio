import { Component, Input, OnInit } from '@angular/core';

import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() title: string = "";
  @Input() src: string = "";
  @Input() github: string = "";
  @Input() link: string = "";
  @Input() showGit: boolean = false;
  @Input() param: string = "";
  @Input() path: string = "";
  @Input() alt: string = "Active Project";

  git = faGithubAlt;
  flink = faLink;

  constructor() { }

  ngOnInit(): void {
  }

}
