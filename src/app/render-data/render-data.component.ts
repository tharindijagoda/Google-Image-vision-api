import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-render-data',
  templateUrl: './render-data.component.html',
  styleUrls: ['./render-data.component.css']
})
export class RenderDataComponent implements OnInit {

  public faceData: any;
  public labelData: any;
  public webData: any;
  public propertiesData: any;
  public safeSearchData: any;

  @Input() public tabId: string;
  @Input() public data: any;

  constructor() { }

  ngOnInit() {
    // this.faceData = this.data.responses[0].faceAnnotations;
    this.labelData = this.data.responses[0].labelAnnotations;
    // this.webData = this.data.responses[0].webDetection;
    this.propertiesData = this.data.responses[0].imagePropertiesAnnotation;
    this.safeSearchData = this.data.responses[0].safeSearchAnnotation;
  }

}
