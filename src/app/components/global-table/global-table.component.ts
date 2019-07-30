import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  name: string;
  character: string;
  age: number;
  balance: number;
  minBalance: number;
  maxBalance: number;
}


// /** Constants used to fill up our data base. */
// const COLORS: string[] = [
//   'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
//   'aqua', 'blue', 'navy', 'black', 'gray'
// ];
const CHARACTERS: string[] = [
  'Гипертимный', 'Дистимный', 'Циклоидный', 'Возбудимый', 'Застревающий', 'Педантичный', 'Тревожный',
  'Демонстративный', 'Холерик', 'Сангвиник',  'Флегматик', 'Меланхолик'
];
const NAMES: string[] = [
  'Петр', 'Анастасия', 'Асет', 'Ильяс', 'Эдуард', 'Айдос', 'Мадина', 'Ваха', 'Сула', 'Даулет',
  'Асыл', 'Голиб', 'Евгений', 'Максим', 'Ерлан', 'Олег', 'Константин', 'Дмитрий', 'Сеит',
  'Борис', 'Фаризат', 'Раис', 'Юлия', 'Жасулан', 'Нурбек', 'Назар', 'Ксения', 'Ирина', 'Акжол'
];


@Component({
  selector: 'app-global-table',
  templateUrl: './global-table.component.html',
  styleUrls: ['./global-table.component.scss']
})
export class GlobalTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'character', 'age', 'minBalance', 'maxBalance', 'balance', 'actions'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  removeAt(index: number) {
    const data = this.dataSource.data;
    data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);

    this.dataSource.data = data;
  }
  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
/** create random age */
function randomAge(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}
/* create minBalance **/
function minBalance(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}
/* create maxBalance **/
function maxBalance(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}
/** Builds and returns a new User. */
function createNewUser(age: number): { character: string; minBalance: any; balance: any; name: string; maxBalance: any; age: any } {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
  const minBalanceRandom = 1000;
  const maxBalanceRandom = 10000;
  const minBalanceRandomCreate = Math.floor(Math.random() * (+maxBalanceRandom - +minBalanceRandom)) + +minBalanceRandom;
  const minBalanceRandomB = 10000;
  const maxBalanceRandomB = 100000;
  const maxBalanceRandomCreate = Math.floor(Math.random() * (+maxBalanceRandomB - +minBalanceRandomB)) + +minBalanceRandomB;
  const totalBalance = maxBalanceRandomCreate + minBalanceRandomCreate;
  return {
    age: randomAge(18, 75),
    minBalance: minBalanceRandomCreate,
    maxBalance: maxBalanceRandomCreate,
    name,
    balance: totalBalance,
    character: CHARACTERS[Math.round(Math.random() * (CHARACTERS.length - 1))]
  };
}
