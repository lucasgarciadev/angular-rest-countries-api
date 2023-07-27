import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {
  faSearch = faSearch;

  @Output() emitirBusca = new EventEmitter<string>();


  public form: FormGroup = this.fb.group({
    valorBusca: ['']
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form?.get('valorBusca')?.valueChanges.subscribe(() => {
      this.emitirBusca.emit(this.form?.get('valorBusca')?.value)
    })
  }
}
