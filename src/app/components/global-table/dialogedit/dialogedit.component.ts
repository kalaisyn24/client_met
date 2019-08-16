import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UserService} from '../../service/user.service';
import {PageDetails} from '../../../../model/PageDetails';
import {UsersModel} from '../../../../model/UsersModel';

@Component({
  selector: 'app-dialogedit',
  templateUrl: './dialogedit.component.html',
  styleUrls: ['./dialogedit.component.scss']
})
export class DialogeditComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<DialogeditComponent>,
              @Inject(MAT_DIALOG_DATA)
              public userId,
              private userService: UserService) {
  }
  selectedUser: UsersModel;
  pageFilter: PageDetails;

  dataDialog(): void {
    this.pageFilter = new PageDetails();
    const user = this.userService.getEditData(this.userId);
    this.selectedUser = user;
  }

  onUpdate(): void {
    const updUser = this.userService.updateUsers(this.selectedUser);
    this.dialogRef.close(updUser);
  }

  ngOnInit() {
    this.dataDialog();
  }

}
