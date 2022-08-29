import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private readonly _router : Router) { }

  title = 'MyBuddy';

  onTitleClick() {
    this._router.navigate(['']);
  }
}
