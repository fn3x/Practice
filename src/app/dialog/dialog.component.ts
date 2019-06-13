import {Component, OnInit} from '@angular/core';
import { MatDialogRef} from '@angular/material';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  form: FormGroup;
  constructor(private dialogRef: MatDialogRef<DialogComponent>) { }
  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }
}
