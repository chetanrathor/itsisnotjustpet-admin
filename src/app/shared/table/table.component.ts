import { Component, Input, NgIterable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from 'src/app/interface/response/user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit ,OnChanges{
@Input() users! :any
  constructor() { }
  column!:any

  ngOnInit(): void {
    // console.log(this.users);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.users);
   this.column = this.users?Object.keys(this.users[0]):''
   console.log(this.column);
  }
}
