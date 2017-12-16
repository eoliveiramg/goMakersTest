import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {
  @Output() navigationClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  private onClick(value) {
    this.navigationClick.emit(value);
  }
}
