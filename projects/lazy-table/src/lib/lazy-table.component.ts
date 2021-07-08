import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';


export interface IColumn {
  name: string,
  field: string,
  type: 'number' | 'text' | 'date'
}


@Component({
  selector: 'lib-lazy-table',
  templateUrl: './lazy-table.component.html',
  styleUrls: ['./lazy-table.component.scss']
})
export class LazyTableComponent implements OnInit {
  @Input() columns: IColumn[] = [];
  @Input() tableData: any;


  constructor() { }

  ngOnInit(): void { }
}
