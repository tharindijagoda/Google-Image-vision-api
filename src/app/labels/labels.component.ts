import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css']
})
export class LabelsComponent implements OnInit {

  @Input() labelData: any;
  constructor() { }

  ngOnInit() {
}

  getPercentValue(score): string {
    return `${Math.round(score * 100)}%`;
  }
}
