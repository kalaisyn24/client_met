import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ErrorMatcherService, errorMessages } from '../../services/form-validation/form-validators.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { countries } from '../../../server/countries-list';
import { UniqueNameService } from '../../services/unique-name.service';



@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  encapsulation: ViewEncapsulation.None
})



export class AddEditFormComponent implements OnInit {

  public addEditMemberForm: FormGroup;

  public matcher = new ErrorMatcherService();
  errors = errorMessages;  // для ошибок


  // для таблицы в html
  public countries = countries;

  public inDatabase;


  public formErrors = {
    balance: '',
    ageData: '',
    fioData: '',
    charmData: '',
  };



  constructor(
    private fb: FormBuilder,
    public uniqueNameService: UniqueNameService,
  ) {
    this.uniqueNameService.inDatabase.subscribe(result => {
      this.inDatabase = result;  // Когда  значение true, это вызывает сообщение.
    });
  }

  ngOnInit() {
    this.createForm();

    this.inDatabase = this.uniqueNameService.inDatabase.value;
  }


  // валидация + создание формы

  private createForm() {
    this.addEditMemberForm = this.fb.group({
      id: [''],
      balance: ['', Validators.required],
      ageData: ['', Validators.required],
      fioData: ['', Validators.required],
      charmData: ['', Validators.required],
    });
  }





  public validateUsername(fioTable) {
    return this.uniqueNameService.validateUsername(fioTable);
  }

}



