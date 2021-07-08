import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'lib-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() totalRecords: number = 0;
  @Input() itemsOnPage: number = 0;
  @Input() activePage: number = 1;
  @Output() pagination = new EventEmitter<number>();

  get pagesTotal() {
    const _pagesTotal = [];
    _pagesTotal.length = Math.ceil(this.totalRecords / this.itemsOnPage);

    for (let i = 0; i < _pagesTotal.length; i++) {
      _pagesTotal[i] = i + 1;
    }

    return _pagesTotal;
  }


  constructor() { }

  ngOnInit(): void { }

  public selectPage(page: number) {
    if (this.activePage === page) { return; }

    this.activePage = page;
    this.pagination.emit(page);
  }
}
