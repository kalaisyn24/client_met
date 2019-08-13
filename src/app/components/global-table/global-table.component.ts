import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {UserService} from '../service/user.service';
import {PageDetails} from '../../../model/PageDetails';
import {DialogeditComponent} from './dialogedit/dialogedit.component';
import {MatDialog} from '@angular/material';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-global-table',
  templateUrl: './global-table.component.html',
  styleUrls: ['./global-table.component.scss'],
  providers: [UserService]
})

export class GlobalTableComponent implements OnInit {
  private users;
  private editableData;
  routeQueryParams$: Subscription;
  displayedColumns: string[] = ['fioData', 'ageData', 'balance', 'charmData', 'actions'];
  dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public userService: UserService, public dialog: MatDialog ) {
    this.userServices = userService;
    this.users = this.userServices.getAll();
    this.dataSource = new MatTableDataSource(this.users);
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  private userServices: UserService;

  pageFilter: PageDetails;

  openDialog(index: number): void {
    this.pageFilter = new PageDetails();
    const arrayNumber = (this.paginator.pageIndex * this.paginator.pageSize) + index;
    this.pageFilter.id = this.dataSource.data[arrayNumber].id;
    const user = this.userService.getEditData(this.pageFilter);
    const dialogRef = this.dialog.open(DialogeditComponent, {
      width: '350px',
      data: user
    });
  }

  sortInfo() {
    this.pageFilter = new PageDetails();
    this.pageFilter.filter = this.dataSource.filter;
    this.pageFilter.offset = this.paginator.pageIndex * this.paginator.pageSize;
    this.pageFilter.limit = this.pageFilter.offset + this.paginator.pageSize;
    this.pageFilter.sortName = this.dataSource.sort.direction;
    this.pageFilter.sortActive = this.dataSource.sort.active;
    this.userService.getSortedData(this.pageFilter);
  }

  remove(index: number) {
    this.pageFilter = new PageDetails();
    const arrayNumber = (this.paginator.pageIndex * this.paginator.pageSize) + index;
    this.pageFilter.id = this.dataSource.data[arrayNumber].id;
    this.userService.getDeleteId(this.pageFilter);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  dataSort() {
    console.log(this.dataSource.sort.direction + ',' + this.dataSource.sort.active);
  }

  dataFilter() {
    console.log(this.dataSource.filter);
  }

  dataPagination() {
    const offset = this.paginator.pageIndex * this.paginator.pageSize;
    const limit = offset + this.paginator.pageSize;
    console.log(offset + '-' + limit);
    for (let i = offset; i < limit; i++) {
      console.log(this.dataSource.data[i]);
    }
  }
}
