import {Component, ViewChild, Injectable, OnInit, AfterViewInit} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { MatPaginator, MatTableDataSource } from '@angular/material';
import { FormBuilder, FormControl } from '@angular/forms';

import { merge, Subject, Observable } from 'rxjs';
import { startWith, switchMap, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { MatDialog } from '@angular/material';

import { MemberModel } from './member.model';
import { HttpService } from '../http.service';

import { MessagesService } from '../services/messages-service/messages.service';

import { AddMemberComponent } from './add-member/add-member.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { countries } from '../../server/countries-list';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
})


export class MembersComponent implements AfterViewInit, OnInit{


  private idColumn = 'id';
  private dbTable = 'members';
  private membersUrl = 'api/members';

  private dsData: any;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  public dataLength: number;

  private addMemberComponent = AddMemberComponent;
  private editMemberComponent = EditMemberComponent;

  private idArray: number[] = [];  // id для флажка в таблице
  private memberArray = [];

  public displayedColumns = [
    'select',
    'firstName',
    'lastName',
    'userName',
    'charmData',
    'options'
  ];

  public dataSource = new MatTableDataSource;

  // сортировка по странам
  public countries = countries;
  public charmData: string;
  public countriesControl = new FormControl('');

  // запрос фамилии
  public searchTerm$ = new Subject<string>();

  constructor(
    private httpService: HttpService,
    public dialog: MatDialog,
    private messagesService: MessagesService,
  ) {


    // ------  ПОИСК ПО ИМЕНИ -------------

    this.httpService.nameSearch(this.searchTerm$)
      .subscribe(data => {
        this.dataLength = data.length;
        this.dataSource.data = data;
      });
  }

  ngOnInit() {
    this.getAllRecords();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // ----------------- получить данные ------------------

  //  для кнопки получить все данные
  public getAllRecords(): any {
    this.httpService.getAllRecords(this.membersUrl)
      .subscribe(data => {
        this.dataLength = data.length;
        this.dataSource.data = data;
      });
  }

  // ------------------ добавить --------------------


  public addRecord() {
    this.dialog.open(this.addMemberComponent);
  }


  // ----------- Редактировать --------------

  public editRecord(recordId) {
    this.dialog.open(this.editMemberComponent, {
      data: {recordId, idColumn: this.idColumn, paginator: this.paginator, dataSource: this.dataSource}
    });
  }



// --------------- Удалить ------------------

  public deleteRecord(recordId) {
    const dsData = this.dataSource.data;

    const name1 = 'balance';
    const name2 = 'ageData';
    const record = dsData.find(obj => obj[this.idColumn] === recordId);
    const name = 'Delete ' + record[name1] + ' ' + record[name2] + '?';

    const url = `${this.membersUrl}/${recordId}`;
    this.deleteRowDataTable (recordId, this.idColumn, this.paginator, this.dataSource);
  }

// Remove the deleted row from the data table. Need to remove from the downloaded data first.
  private deleteRowDataTable(recordId, idColumn, paginator, dataSource) {
    this.dsData = dataSource.data;
    const itemIndex = this.dsData.findIndex(obj => obj[idColumn] === recordId);
    dataSource.data.splice(itemIndex, 1);
    dataSource.paginator = paginator;
  }



  // ----------- поиск по странам ------------------

  public searchCountries(charmData): any {

    const url = `${this.membersUrl}/?charmData=${charmData}`;

    this.httpService.searchCountries(url)
      .subscribe(data => {
        this.dataLength = data.length;
        this.dataSource.data = data;
      });
  }




  // -------------- SELECT BOX ------------------


  public selectMember(selectedMember) {
    return this.idArray.push(selectedMember);
  }
  public getAllSelected() {
    this.memberArray = [];
    const tempArray = [];
    const ds = this.dataSource.data;
    const property = 'id';

    // arrow function
    // tslint:disable-next-line:only-arrow-functions
    this.idArray.forEach(function(id, i) {
      const memberId: number = id;  // Выбирает идентификатор выделенного из массива

      // Поиск dataSource для каждого member_id и вставка выбранных в новый объект данных.
      // tslint:disable-next-line:only-arrow-functions
      ds.forEach(function(member, index) {

        if (ds[index][property] === memberId) {
          tempArray.push(member);
        }
      });
    });

    this.idArray = []; // массив
    this.memberArray = tempArray;
    this.paginator.pageIndex = 0;
    this.dataSource.data = this.memberArray;
  }


}
