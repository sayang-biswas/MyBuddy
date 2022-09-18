import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-custom-error-dialog',
  templateUrl: './custom-error-dialog.component.html',
  styleUrls: ['./custom-error-dialog.component.scss']
})
export class CustomErrorDialogComponent implements OnInit {

  constructor(
    public readonly dialogRef: MatDialogRef<CustomErrorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public readonly data: any
  ) { }

  ngOnInit(): void {
  }

}
