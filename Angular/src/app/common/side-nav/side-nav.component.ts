import { Component, OnInit } from '@angular/core';
import { QlinksComponent } from 'src/app/qlinks/qlinks.component';
import { SideNav } from './side-nav.model';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  sideNavItem: Array<SideNav> | null = null;

  constructor() { }

  ngOnInit(): void {
    this.sideNavItem = [
      {
        navItem: "Apps",
        navList : [
          {
            name: "Qlinks",
            icon: "bookmark",
            href: "/qlinks"
          },
          {
            name: "Expense",
            icon: "payments",
            href: "/expense"
          }
        ]
      }
    ];
  }

}
