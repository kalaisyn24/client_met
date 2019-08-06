import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { AddEditFormComponent } from '../add-edit-form/add-edit-form.component';

import { HttpService } from '../../http.service';
import { MessagesService } from '../../services/messages-service/messages.service';
import { FormErrorsService } from '../../services/form-validation/form-errors.service';




@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  encapsulation: ViewEncapsulation.None
})


export class AddMemberComponent {

  @ViewChild(AddEditFormComponent, {static: true})
  public addMemberForm: AddEditFormComponent;

  private membersUrl = 'api/members';

  constructor(
    private httpService: HttpService,
    public dialogRef: MatDialogRef<AddMemberComponent>,
    private messagesService: MessagesService,
    public formErrorsService: FormErrorsService
  ) { }


  reset() {
    this.addMemberForm.addEditMemberForm.reset();
  }

  //  проверка данных и сохранение

  public save(addMemberForm) {

    // проверяем форму на валидность, если false, ретурним, если тру закрываем окно

    if (this.addMemberForm.addEditMemberForm.valid) {

      const enteredData = this.addMemberForm.addEditMemberForm.value;

      this.httpService.addRecord(this.membersUrl, enteredData).subscribe();
      this.dialogRef.close();

    } else {
      this.addMemberForm.formErrors = this.formErrorsService.validateForm(
        this.addMemberForm.addEditMemberForm,
        this.addMemberForm.formErrors, false
      );
    }
    addMemberForm.addEditMemberForm.reset();
  }

  // private success() {
  //   this.messagesService.openDialog('Отлично', 'мембер добавлен');
  // }


}


