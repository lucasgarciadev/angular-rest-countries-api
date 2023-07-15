import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, filter, distinctUntilChanged, switchMap, tap, pipe, map } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {
  faSearch = faSearch;

  @Output() emitirBusca = new EventEmitter<string>();


  public form: FormGroup = this.fb.group({
    valorBusca: ['', Validators.minLength(3)]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form?.get('valorBusca')?.valueChanges.subscribe(() => {
      if(this.form?.valid) {
        pipe()
        this.emitirBusca.emit(this.form?.get('valorBusca')?.value);
      } else {
        this.emitirBusca.emit('')
      }
    })
  }
}
