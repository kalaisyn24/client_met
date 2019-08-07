



//  Child components process their own data, not the main-processor service.

import { Component, AfterViewInit, Inject, ViewChild, ViewEncapsulation } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


import { HttpService } from '../../http.service';
import { MemberModel } from '../member.model';
import { AddEditFormComponent } from '../add-edit-form/add-edit-form.component';
import { UpdateDatatableService } from '../../services/update-datatable.service';

import { MessagesService } from '../../services/messages-service/messages.service';
import { FormErrorsService } from '../../services/form-validation/form-errors.service';



@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  encapsulation: ViewEncapsulation.None
})


export class EditMemberComponent implements AfterViewInit {

  private membersUrl = 'api/members';
  private formValue: MemberModel;

  private recordId: number;
  private idColumn;
  private paginator;
  private dataSource;


  // formbuilder
  @ViewChild(AddEditFormComponent, {static: true})
  private addEditForm: AddEditFormComponent;



  constructor(
    private httpService: HttpService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    // Used in modal for close()
    public dialogRef: MatDialogRef<EditMemberComponent>,
    private updateDatatableService: UpdateDatatableService,
    private messagesService: MessagesService,
    public formErrorsService: FormErrorsService,
  ) {}



  // ---- получение данных ----



  ngAfterViewInit() {
    setTimeout(() => {
      this.fetchRecord();
    }, 200);
  }

  public fetchRecord() {
    this.recordId = this.data.recordId;
    this.idColumn = this.data.idColumn;
    this.paginator = this.data.paginator;
    this.dataSource = this.data.dataSource;

    // Display the data retrieved from the data model to the form model.
    this.httpService.getRecordById(this.membersUrl, this.recordId)
      .subscribe(data => {
          this.fillForm(data);
        },
        (err: HttpErrorResponse) => {
          console.log(err.error);
          console.log(err.message);
        });
  }



  // Populate the form, called above in fetchRecord().

  private fillForm(parsedData) {
    this.addEditForm.addEditMemberForm.setValue({
      id: parsedData.id,
      balance: parsedData.balance,
      ageData: parsedData.ageData,
      fioData: parsedData.fioData,
      charmData: parsedData.charmData,
    });
    this.existingUserName(); // If existing name, don't validate.
  }



// ---- UPDATE ----  вызывается edit-member.component.html

  public update(formValue) {
    if (this.addEditForm.addEditMemberForm.valid) {
      this.httpService.updateRecord(this.membersUrl, formValue)
        .subscribe(
          result => {
            // Обновляем представление данных таблицы для изменений.
            this.updateDatatableService.updateDataTable(
              result, this.recordId, this.idColumn, this.paginator, this.dataSource, formValue);
            this.dialogRef.close(true);
          },
        );
    }
  }
   // Проверяем, есть ли в поле fioData имя
   // поле проверки уникального имени пользователя в false, так
   // проверка не запускается, пока не будет изменена.
  private existingUserName() {
    if (this.addEditForm.addEditMemberForm.controls.fioData
      .value !== null) {
      this.addEditForm.inDatabase = false;
    } else {
      return null;
    }
  }



}



