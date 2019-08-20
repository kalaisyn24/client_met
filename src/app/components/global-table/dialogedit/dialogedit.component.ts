import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UserService} from '../../service/user.service';
import {PageDetails} from '../../../../model/PageDetails';
import {UsersModel} from '../../../../model/UsersModel';
import {CharmService} from '../../service/charm.service';

@Component({
  selector: 'app-dialogedit',
  templateUrl: './dialogedit.component.html',
  styleUrls: ['./dialogedit.component.scss']
})
export class DialogeditComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<DialogeditComponent>,
              @Inject(MAT_DIALOG_DATA)
              public userId,
              private userService: UserService,
              private  charmService: CharmService) {
  }

  selectedUser: UsersModel;
  pageFilter: PageDetails;
  validation: boolean;

  dataDialog(): void {
    this.pageFilter = new PageDetails();
    this.selectedUser =  this.userService.getEditData(this.userId);
  }

  onUpdate(): void {
    const updUser = this.userService.updateUsers(this.selectedUser);
    this.dialogRef.close(updUser);
  }
  update(): void {
    if (
      this.selectedUser.charmData !== ''
      && this.selectedUser.balance !== null
      && this.selectedUser.ageData !== null
      && this.selectedUser.fioData !== null
      && this.selectedUser.id !== null
    ) {
      this.dialogRef.close(this.selectedUser);
      this.validation = false;
    } else {
      this.validation = false;
    }
  }
  close(): void {
    this.dialogRef.close(null);
  }

  ngOnInit() {
    if (this.userId != null) {
      this.dataDialog();
    } else {
      this.selectedUser = {id: null, fioData: null, ageData: null, balance: null, charmData: null, addressOfResidence: {
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
      this.validation = true;
    }
  }

}
