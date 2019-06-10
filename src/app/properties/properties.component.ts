import { Component, OnInit, Input } from '@angular/core';
import * as convert from 'color-convert';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  public imageProperties: any;
  public colorValues: string;
  public percentValue: string;
  public colorBlock: any;

  @Input() propertiesData: any;

  constructor() { }

  ngOnInit() {
    console.log('propertiesData ==>', this.propertiesData);
    const colors = this.propertiesData.dominantColors.colors;
    this.imageProperties = this.decorateColors(colors);
  }

  getColorCode(color) {
    return `#${convert.rgb.hex(color.red, color.green, color.blue)}`;
  }

  getPercent(obj) {
    return `${Math.round(obj.percent)}%`;
  }

  hoverColorSection(property) {
    this.colorValues = `${this.getColorCode(property.color)}, RGB(${property.color.red}, ${property.color.green}, ${property.color.blue})`;
    this.percentValue = this.getPercent(property);
    this.colorBlock = `RGB(${property.color.red}, ${property.color.green}, ${property.color.blue})`;
  }

  decorateColors(colors) {
    const scoresSum = colors.reduce((sum, color) => {
      return sum + color.score;
    }, 0) / 100;

    return colors.map((color) => {
      color.percent = color.score / scoresSum;
      return color;
    });
  }
}
