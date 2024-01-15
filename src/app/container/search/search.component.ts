import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = "";

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchInput')
  searchInput: ElementRef;
  
  updateSearchText() {
    // this.searchText = event.target.value;
    // console.log(inputEl.value);
    this.searchText = this.searchInput.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
