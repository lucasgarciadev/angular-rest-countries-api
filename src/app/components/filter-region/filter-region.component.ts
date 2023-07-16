import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filter-region',
  templateUrl: './filter-region.component.html',
  styleUrls: ['./filter-region.component.sass']
})
export class FilterRegionComponent implements OnChanges {

  @Input() resetFilter: boolean = false;
  @Output() changeRegion = new EventEmitter<string>();

  faChevronDown = faChevronDown;
  region: string = '';
  openOptions: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['resetFilter'].currentValue === true) {
      this.selectRegion('');
    }
  }

  selectRegion(region: string) {
    this.region = region;
    this.changeRegion.emit(this.region);
    this.openOptions = false;
  }

  toggleOptions() {
    this.openOptions = !this.openOptions
  }

}
