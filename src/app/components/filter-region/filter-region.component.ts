import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filter-region',
  templateUrl: './filter-region.component.html',
  styleUrls: ['./filter-region.component.sass']
})
export class FilterRegionComponent {

  @Output() changeRegion = new EventEmitter<string>();

  faChevronDown = faChevronDown;
  region: string = '';
  openOptions: boolean = false;

  selectRegion(region: string) {
    this.region = region;
    this.changeRegion.emit(this.region);
    this.openOptions = false;
  }

  toggleOptions() {
    this.openOptions = !this.openOptions
  }

}
