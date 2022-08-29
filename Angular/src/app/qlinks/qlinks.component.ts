import { LIVE_ANNOUNCER_DEFAULT_OPTIONS } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { Qlinks } from './models/qlinks.models';
import { QlinksService } from './service/qlinks.service';
import { CreateQlinksComponent } from './create-qlinks/create-qlinks.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-qlinks',
  templateUrl: './qlinks.component.html',
  styleUrls: ['./qlinks.component.scss']
})
export class QlinksComponent implements OnInit {

  qlinksArr: Array<Qlinks> = [];

  constructor(private readonly _qlinksService : QlinksService,
    private readonly _dialog : MatDialog) { }

  ngOnInit(): void {
    this._qlinksService.getQlinks().subscribe((result) => {
      this.qlinksArr = result;    
    })
  }

  onAddQlinkClick() {
    const dialogRef = this._dialog.open(CreateQlinksComponent, {
      width: '400px',
      data: '',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  } 
}
