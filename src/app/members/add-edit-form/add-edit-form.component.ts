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
    first_name: '',
    last_name: '',
    user_name: '',
    country: '',
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
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      user_name: ['', Validators.required],
      country: ['', Validators.required],
    });
  }





  public validateUsername(userName) {
    return this.uniqueNameService.validateUsername(userName);
  }

}



