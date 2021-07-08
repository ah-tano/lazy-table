import { Component, Input, OnInit } from '@angular/core';
import { OrderTypeEnum } from './shared/enums/order-type.enum';
import { FormControl } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { NgUnsubscribe } from './shared/directives/ng-unsubscribe/ng-unsubscribe.directive';
import { columns, employees } from './shared/mock-data';


export interface IColumn {
  name: string,
  field: string,
  type: 'number' | 'text' | 'date'
}

export interface IActiveSort {
  activeOrder: OrderTypeEnum,
  column: IColumn
}


@Component({
  selector: 'lib-lazy-table',
  templateUrl: './lazy-table.component.html',
  styleUrls: ['./lazy-table.component.scss']
})
export class LazyTableComponent extends NgUnsubscribe implements OnInit {
  @Input() columns: IColumn[] = columns;
  @Input() tableData: any[] = employees;
  @Input() itemsOnPage: number = 5;

  @Input() withGlobalFilter: boolean = true;
  @Input() withPagination: boolean = true;

  public modifiedArray: any[] = [];
  public searchInputControl: FormControl = new FormControl('');

  public activePage: number = 1;
  private activeSort: IActiveSort;
  private activeSearchValue = '';

  public _totalRecords: number;

  get totalRecords() {
    return this._totalRecords;
  }
  set totalRecords(amount) {
    this._totalRecords = amount;
  }


  constructor() { super(); }

  ngOnInit(): void {
    this.setInitialValues();
    this.onSearchInputChange();
    this.modifyTable();
  }

  private setInitialValues() {
    this.totalRecords = this.tableData.length;
    this.activeSort = {
      activeOrder: OrderTypeEnum.Ascendant,
      column: this.columns[0]
    };
  }

  public onHeaderClick(column: IColumn) {
    if (this.activeSort.column.name === column.name) {
      this.activeSort.activeOrder = this.activeSort.activeOrder === OrderTypeEnum.Ascendant
                                    ? OrderTypeEnum.Descendent
                                    : OrderTypeEnum.Ascendant
    } else {
      this.activeSort = {
        activeOrder: OrderTypeEnum.Ascendant,
        column: column
      }
    }
    this.modifyTable();
  }

  public onPaginationSelect(pageNumber: number) {
    this.activePage = pageNumber;
    this.modifyTable();
  }

  public sortData() {
    this.modifiedArray.sort((a: any, b: any) => {
      const field = this.activeSort.column.field;
      const type = this.activeSort.column.type;
      const activeOrder = this.activeSort.activeOrder;

      let prev = a[field];
      let curr = b[field];

      if (type === 'text') {
        prev = prev.toLowerCase();
        curr = curr.toLowerCase();
      }

      return prev > curr ? (1 * activeOrder) : (-1 * activeOrder);
    });
  }

  private onSearchInputChange() {
    this.searchInputControl.valueChanges
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(value => {
        this.activePage = 1;
        this.activeSearchValue = value;
        this.modifyTable();
      });
  }

  private filterData() {
    if (!this.activeSearchValue) {
      this.modifiedArray = [...this.tableData];
      return;
    }

    const searchAsRegEx = new RegExp(this.activeSearchValue, 'gi');
    this.modifiedArray = [];

    this.tableData.forEach(row => {
      for (let key in row) {
        if (row.hasOwnProperty(key)) {
          const isRowMatched = !!row[key].toString().match(searchAsRegEx);

          if (isRowMatched) {
            this.modifiedArray.push(row);
            break;
          }
        }
      }
    });
  }

  public setPagination() {
    const startPageIndex = (this.activePage * this.itemsOnPage) - this.itemsOnPage;
    const endPageIndex = startPageIndex + this.itemsOnPage;

    this.totalRecords = this.modifiedArray.length;
    this.modifiedArray = this.modifiedArray.slice(startPageIndex, endPageIndex);
  }

  private modifyTable() {
    this.filterData();
    this.sortData();
    this.setPagination();
  }
}
