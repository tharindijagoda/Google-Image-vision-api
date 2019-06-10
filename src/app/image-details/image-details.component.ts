import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AppModelService } from '../app-model.service';

declare var componentHandler: any;

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {



  public tabs: any;
  public imageReports: any;
  public imgName: any;

  constructor(
    private appModelService: AppModelService,
    private router: Router
  ) { }

  ngOnInit() {

    this.imageReports = this.appModelService.imageAnalysisReport;
    this.imgName = this.appModelService.imgName;

    console.log('image report ==>', this.imageReports);
    this.tabs = [
      {id: 'tabFaces', title: 'Faces'},
      {id: 'tabLabels', title: 'Labels'},
      {id: 'tabWeb', title: 'Web'},
      {id: 'tabProperties', title: 'Properties'},
      {id: 'tabSafeSearch', title: 'Safe Search'},
      {id: 'tabJson', title: 'JSON'}
    ];


    setTimeout(function() {
      componentHandler.upgradeAllRegistered();
    }, 100);
  }

  exit() {
    this.router.navigate(['/']);
  }
}
