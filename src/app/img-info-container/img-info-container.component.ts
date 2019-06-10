import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-info-container',
  templateUrl: './img-info-container.component.html',
  styleUrls: ['./img-info-container.component.css']
})
export class ImgInfoContainerComponent implements OnInit {

  @Input() public imgName;
  @Input() public tabId;
  @Input() public data;
  constructor() { }

  ngOnInit() {
  }

}
