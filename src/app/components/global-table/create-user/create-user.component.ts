import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UserService} from '../../service/user.service';
import {UsersModel} from '../../../../model/UsersModel';
import {PageDetails} from '../../../../model/PageDetails';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  newUser: UsersModel = {id: null, fioData: null, ageData: null, balance: null, charmData: null, addressOfResidence: {
    street: null,
      home: null,
      flat: null
    },
    registrationAddress: {
    street: null,
      home: null,
      flat: null
    },
    phone: {
    mobile: null,
      work: null,
      home: null,
      mobile2: null
    }
  };
  validation: boolean;

  constructor(
    public dialogRef: MatDialogRef<CreateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  update(): void {
    if (
      this.newUser.charmData !== ''
      && this.newUser.balance !== null
      && this.newUser.ageData !== null
      && this.newUser.fioData !== null
      && this.newUser.id !== null
    ) {
      this.dialogRef.close(this.newUser);
    } else {
      this.validation = false;
    }
  }
  close(): void {
    this.dialogRef.close(null);
  }


}
