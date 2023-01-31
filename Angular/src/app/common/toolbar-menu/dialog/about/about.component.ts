import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    public readonly dialogRef: MatDialogRef<AboutComponent>,
    @Inject(MAT_DIALOG_DATA) public readonly data: any
  ) { }

  ngOnInit(): void {
  }

}
