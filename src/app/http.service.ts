

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { MemberModel } from './members/member.model'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({ providedIn: 'root' })
export class HttpService {

  private api = '/api/';

  constructor(
    private http: HttpClient,
  ) { }

  // -------------- получить все записи ------------
  public getAllRecords(url): Observable<any> {
    return this.http.get<MemberModel>(url).pipe(
      catchError((error: any) => {
        console.error(error);
        return of();
      }),
    );
  }


  // ----------- создание нового мембера -----------

  public addRecord(url: string, recordData): Observable<any> {
    return this.http.post(url, recordData).pipe(
      catchError((error: any) => {
        console.error(error);
        return of();
      }),
    );
  }


  // ---------- Редактировать --------------

  // ---- Получение данных для редактирования ----

  public getRecordById(url, recordId): Observable<any> {
    return this.http.get<any>(`${url}/${recordId}`).pipe(
      catchError((error: any) => {
        console.error(error);
        return of();
      }),
    );
  }


  // ---- Сохранение данных ----

  public updateRecord(url, recordUpdate): Observable<any> {
    return this.http.put(url, recordUpdate, httpOptions).pipe(
      catchError((error: any) => {
        console.error(error);
        return of();
      }),
    );
  }




// --------------- Запросы(надо поизучать) ---------------------

  public searchCountries(url) {
    return this.http.get<any>(url).pipe(
      map(data => {
        return data;
      }),
      catchError((error: any) => {
        console.error(error);
        return of();
      }),
    );
  }

  // --------- поиск --------

  //  блин поиск который ищет в режиме live(нужно поизучать БД)

  public nameSearch(terms) {
    return terms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => {
        const url = `api/members/?fioData=${term}`;
        return this.http.get(url);
      }),
      catchError((error: any) => {
        console.error(error);
        return of();
      }),
    );
  }

  // --------------- Валидация форм и обезательных полей---------------------


  public validateUsername(fioTable) {

    const url = `api/members/?fioData=${fioTable}`;
    return this.http.get(url).pipe(
      map(data => {
        return data;
      }),
      catchError((error: any) => {
        console.error(error);
        return of();
      }),
    );
  }
}
