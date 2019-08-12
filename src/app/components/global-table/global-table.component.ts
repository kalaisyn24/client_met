import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {UserService} from '../service/user.service';
import {UserData} from '../../../model/UserFilter';

@Component({
  selector: 'app-global-table',
  templateUrl: './global-table.component.html',
  styleUrls: ['./global-table.component.scss'],
  providers: [UserService]
})



export class GlobalTableComponent implements OnInit {

  private users;
  displayedColumns: string[] = ['fioData', 'ageData',  'balance', 'charmData', 'actions'];
  dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  private userServices: UserService;


  removeAt(index: number) {
    const data = this.dataSource.data;
    data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);

    this.dataSource.data = data;
  }
  constructor(userService: UserService) {
    this.userServices = userService;
    // Create 100 users

    this.users = this.userServices.getAll();
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  func() {
    console.log(this.paginator.pageSize); // размер страницы
    console.log(this.paginator.length); // размер массива
    console.log(this.paginator.pageIndex); // сколько кнопок
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    const endIndex = startIndex + this.paginator.pageSize;
    console.log(startIndex +  '-' + endIndex);
    for (let i = startIndex; i < endIndex ; i++ ) {
      console.log(this.dataSource.data[i]);
    }
  }
}
