import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private readonly _router : Router) { }

  ngOnInit(): void {
  }

  onAppClick(appName: string) {
    if (appName === "qlinks") {
      this._router.navigate(['/qlinks']);
    }
    if (appName === "expense") {
      this._router.navigate(['/expense']);
    }
  }

}
