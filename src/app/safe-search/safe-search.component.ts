import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-safe-search',
  templateUrl: './safe-search.component.html',
  styleUrls: ['./safe-search.component.css']
})
export class SafeSearchComponent implements OnInit {

  public safeSearchDataKeys: string[];
  @Input() public safeSearchData: any;

  constructor() { }

  ngOnInit() {
    this.safeSearchDataKeys = Object.keys(this.safeSearchData);
  }
}
