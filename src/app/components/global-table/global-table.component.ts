import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {UserService} from '../service/user.service';
import {PageDetails} from '../../../model/PageDetails';
import {DialogeditComponent} from './dialogedit/dialogedit.component';
import {MatDialog} from '@angular/material';
import {UsersModel} from '../../../model/UsersModel';
import {OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {CreateUserComponent} from './create-user/create-user.component';

@Component({
  selector: 'app-global-table',
  templateUrl: './global-table.component.html',
  styleUrls: ['./global-table.component.scss']
})

export class GlobalTableComponent implements OnInit, OnDestroy {
  private users;
  displayedColumns: string[] = ['fioData', 'ageData', 'balance', 'charmData', 'actions'];
  dataSource: MatTableDataSource<UsersModel>;
  subscribe: Subscription;
  pageFilter: PageDetails;
  length: number;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public userService: UserService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.users);
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogeditComponent, {
      width: '350px',
      data: id
    });
    this.subscribe = dialogRef.afterClosed().subscribe(result => {
    });
  }

  createUser(): void {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '350px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.dataSource.data.unshift(result);
        this.userService.getNewUser(result);
      }
      this.dataSource._updateChangeSubscription();
      console.log(this.dataSource.data);
    });
  }

  remove(id: number) {
    this.userService.removeUser(id);
    this.dataSource.data = this.dataSource.data.filter(x => x.id !== id);
    console.log(this.dataSource.data);
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  ngOnInit() {
    this.length = this.userService.getLength();
    this.pageFilter = new PageDetails();
    this.paginator.pageSize = 5;
    this.paginator.pageIndex = 0;
    this.pageFilter.offset = this.paginator.pageSize * this.paginator.pageIndex;
    this.pageFilter.limit = this.pageFilter.offset + this.paginator.pageSize;
    this.dataSource.data = this.userService.getSortedData(this.pageFilter);
    console.log(this.dataSource.data);
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  sortData() {
    this.pageFilter = new PageDetails();
    this.pageFilter.filter = this.dataSource.filter;
    this.pageFilter.offset = this.paginator.pageIndex * this.paginator.pageSize;
    this.pageFilter.limit = this.pageFilter.offset + this.paginator.pageSize;
    this.pageFilter.sortName = this.dataSource.sort.direction;
    this.pageFilter.sortActive = this.dataSource.sort.active;
    const sortedData = this.userService.getSortedData(this.pageFilter);
    this.dataSource.data = sortedData;
    this.length = this.userService.getFilteredLength(this.pageFilter);
    console.log(this.dataSource.data);
  }

  sortInfo() {
    console.log(this.dataSource.sort.direction + ',' + this.dataSource.sort.active);
  }

  setPage($event: PageEvent) {
    this.pageFilter.filter = this.dataSource.filter;
    this.pageFilter.offset = $event.pageIndex * $event.pageSize;
    this.pageFilter.limit = this.pageFilter.offset + $event.pageSize;
    const sortedData = this.userService.getSortedData(this.pageFilter);
    this.dataSource.data = sortedData;
  }
}
