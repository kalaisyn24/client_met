import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UserService} from '../../service/user.service';

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

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    // const user = this.userService.getEditData(this.pageFilter);

  }

}
