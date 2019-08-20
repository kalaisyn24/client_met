import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
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
  dataSource: MatTableDataSource<UsersModel>;
  subscribe: Subscription;
  pageFilter: PageDetails;
  length: number;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public userService: UserService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.users);
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogeditComponent, {
      width: '350px',
      data: id
    });
    this.subscribe = dialogRef.afterClosed().subscribe(result => {
    });
  }

  createUser(): void {
    const dialogRef = this.dialog.open(DialogeditComponent, {
      width: '350px',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.dataSource.data.unshift(result);
        if (this.dataSource.data.length >= 5) {
          this.dataSource.data.pop();
        }
        this.userService.getNewUser(result);
        console.log(this.dataSource.data);
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
    this.paginator.pageSize = 5;
    this.pageFilter = new PageDetails();
    this.pageFilter.offset = this.paginator.pageSize * this.paginator.pageIndex;
    this.pageFilter.limit = this.pageFilter.offset + this.paginator.pageSize;
    this.dataSource.data = this.userService.getSortedData(this.pageFilter);
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
    setTimeout(() => {
        const sortedData = this.userService.getSortedData(this.pageFilter);
        this.length = this.userService.getFilteredLength(this.pageFilter);
        this.dataSource.data = sortedData;
      }
      , 3000);
    this.dataSource._updateChangeSubscription();
  }


  setPage($event: PageEvent) {
    this.pageFilter.filter = this.dataSource.filter;
    this.pageFilter.offset = $event.pageIndex * $event.pageSize;
    this.pageFilter.limit = this.pageFilter.offset + $event.pageSize;
    const sortedData = this.userService.getSortedData(this.pageFilter);
    this.dataSource.data = sortedData;
    console.log(this.dataSource);
  }

  data() {
    console.log(this.dataSource.data);
  }

  change(sort: Sort) {
    console.log(sort);
  }
}
