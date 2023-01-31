import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutComponent } from './dialog/about/about.component';

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.scss']
})
export class ToolbarMenuComponent implements OnInit {

  constructor(
    private readonly _dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onAboutClick() {
    this._dialog.open(AboutComponent, {
      width: '600px'
    });
  }

}
