import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressBarService } from './common/service/progress-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isSideNavOpen: boolean = false;

  constructor(private readonly _router : Router,
    public progressBarService: ProgressBarService ) { }

  title = 'MyBuddy';

  onTitleClick() {
    this._router.navigate(['']);
  }

  onSideNavButtonClick():void {
    if (this.isSideNavOpen) {
      this.isSideNavOpen = false;
    } else {
      this.isSideNavOpen = true;
    }
  }
}
