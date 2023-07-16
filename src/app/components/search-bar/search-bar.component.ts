import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, filter, distinctUntilChanged, tap, pipe } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit, OnChanges {
  faSearch = faSearch;

  @Input() resetSearch: boolean = false
  @Output() emitirBusca = new EventEmitter<string>();


  public form: FormGroup = this.fb.group({
    valorBusca: ['']
  });

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['resetSearch'].currentValue === true) {
      this.form.get('valorBusca')?.setValue('');
    }
  }

  ngOnInit(): void {
    this.form?.get('valorBusca')?.valueChanges.subscribe(() => {
      this.emitirBusca.emit(this.form?.get('valorBusca')?.value)
    })
  }
}
