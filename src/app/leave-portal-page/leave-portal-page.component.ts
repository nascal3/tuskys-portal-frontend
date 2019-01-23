import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-leave-portal-page',
  templateUrl: './leave-portal-page.component.html',
  styleUrls: ['./leave-portal-page.component.scss']
})
export class LeavePortalPageComponent implements OnInit {

  leaveSates: any[] = [];
  tableData = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', col2: 1.0079, symbol2: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', col2: 1.0079, symbol2: 'H'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', col2: 1.0079, symbol2: 'H'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', col2: 1.0079, symbol2: 'H'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', col2: 1.0079, symbol2: 'H'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', col2: 1.0079, symbol2: 'H'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', col2: 1.0079, symbol2: 'H'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', col2: 1.0079, symbol2: 'H'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', col2: 1.0079, symbol2: 'H'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', col2: 1.0079, symbol2: 'H'},
    {position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H', col2: 1.0079, symbol2: 'H'},
    {position: 12, name: 'Helium', weight: 4.0026, symbol: 'He', col2: 1.0079, symbol2: 'H'},
    {position: 13, name: 'Lithium', weight: 6.941, symbol: 'Li', col2: 1.0079, symbol2: 'H'},
    {position: 14, name: 'Beryllium', weight: 9.0122, symbol: 'Be', col2: 1.0079, symbol2: 'H'},
    {position: 15, name: 'Boron', weight: 10.811, symbol: 'B', col2: 1.0079, symbol2: 'H'},
  ];
  dataSource = new MatTableDataSource(this.tableData);
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','col2', 'symbol2'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.leaveSates = [
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'},
      {value: 'approved', viewValue: 'Approved'},
    ];

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}
