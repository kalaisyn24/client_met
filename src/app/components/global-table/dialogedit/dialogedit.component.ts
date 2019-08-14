import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UserService} from '../../service/user.service';
import {PageDetails} from '../../../../model/PageDetails';

@Component({
  selector: 'app-dialogedit',
  templateUrl: './dialogedit.component.html',
  styleUrls: ['./dialogedit.component.scss'],
  providers: [UserService]
})
export class DialogeditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogeditComponent>,
              @Inject(MAT_DIALOG_DATA) public data, private userService: UserService) {
  }

  pageFilter: PageDetails;
  dataDialog(): void {
    this.pageFilter = new PageDetails();
    this.pageFilter.ind = this.data.ind;
    const user = this.userService.getEditData(this.pageFilter);
    this.data = user;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.dataDialog();
    // const user = this.userService.getEditData(this.pageFilter);

  }

}
