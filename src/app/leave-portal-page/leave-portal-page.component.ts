import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { Store } from '@ngxs/store';
import {Router} from "@angular/router";
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {AddPageRoute} from "../actions/page.actions";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-leave-portal-page',
  templateUrl: './leave-portal-page.component.html',
  styleUrls: ['./leave-portal-page.component.scss']
})
export class LeavePortalPageComponent implements OnInit, AfterViewInit {

  hideSection: boolean = true;
  leaveSates: any[] = [];
  leaveReasons: any[] = [];
  attachment: boolean = false;
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
  endDate: any;
  startDate: any;
  disableDate: boolean = true;
  currentDate = new Date(Date.now());
  minDate1 = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate());
  minDate2 = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate());
  leaveType: string;
  reason: string;
  phoneNumber: number;

  constructor(private router: Router, private store: Store) {
   // ADD ACTIVE ROUTE TO STATE
   this.store.dispatch(new AddPageRoute({page: this.router.url}));
  }

  dateChanged(event) {
    this.disableDate = false;
    this.minDate2 = new Date(event);
  }

  ngOnInit() {
    this.leaveSates = [
      {value: 'pending', viewValue: 'Pending Approval'},
      {value: 'approved', viewValue: 'Approved Leaves'},
      {value: 'open', viewValue: 'Open Leaves'}
    ];

    this.leaveReasons = [
      {value: 'Annual leave', viewValue: 'Annual leave'},
      {value: 'Sick leave', viewValue: 'Sick leave'},
      {value: 'Maternity leave', viewValue: 'Maternity leave'},
      {value: 'Paternity leave', viewValue: 'Paternity leave'},
      {value: 'Absence leave', viewValue: 'Absence leave'},
      {value: 'Compensatory leave', viewValue: 'Compensatory leave'},
      {value: 'Compassionate leave', viewValue: 'Compassionate leave'}
    ];
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showFrom() {
    this.hideSection = !this.hideSection;
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
  }
}
