import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {UserService} from '../service/user.service';
import {PageDetails} from '../../../model/PageDetails';
import {DialogeditComponent} from './dialogedit/dialogedit.component';
import {MatDialog} from '@angular/material';
import {UsersModel} from '../../../model/UsersModel';
import {OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-global-table',
  templateUrl: './global-table.component.html',
  styleUrls: ['./global-table.component.scss']
})

export class GlobalTableComponent implements OnInit, OnDestroy {
  private users;
  displayedColumns: string[] = ['fioData', 'ageData', 'balance', 'charmData', 'actions'];
  dataSource;
  subscribe: Subscription;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  private user: UsersModel;

  constructor(public userService: UserService, public dialog: MatDialog) {
    this.userServices = userService;
    this.users = this.userServices.getAll();
    this.dataSource = new MatTableDataSource(this.users);
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  private userServices: UserService;

  pageFilter: PageDetails;

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogeditComponent, {
      width: '350px',
      data: id
    });
    this.subscribe = dialogRef.afterClosed().subscribe(result => {
      this.dataSource.data = result;
    });
  }

  //
  // sortInfo() {
  //   this.pageFilter = new PageDetails();
  //   this.pageFilter.filter = this.dataSource.filter;
  //   this.pageFilter.offset = this.paginator.pageIndex * this.paginator.pageSize;
  //   this.pageFilter.limit = this.pageFilter.offset + this.paginator.pageSize;
  //   this.pageFilter.sortName = this.dataSource.sort.direction;
  //   this.pageFilter.sortActive = this.dataSource.sort.active;
  //   this.userService.getSortedData(this.pageFilter);
  // }
// fixme
  remove(index: number) {
    //   this.pageFilter = new PageDetails();
    //   const arrayNumber = (this.paginator.pageIndex * this.paginator.pageSize) + index;
    //   this.pageFilter.id = this.dataSource.data[arrayNumber].id;
    //   this.userService.getDeleteId(this.pageFilter);
    console.log(this.users[index]);
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
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

  //
  // dataSort() {
  //   console.log(this.dataSource.sort.direction + ',' + this.dataSource.sort.active);
  // }
  //
  // dataFilter() {
  //   console.log(this.dataSource.filter);
  // }
  //
  // dataPagination() {
  //   const offset = this.paginator.pageIndex * this.paginator.pageSize;
  //   const limit = offset + this.paginator.pageSize;
  //   console.log(offset + '-' + limit);
  //   for (let i = offset; i < limit; i++) {
  //     console.log(this.dataSource.data[i]);
  //   }
  // }
}
