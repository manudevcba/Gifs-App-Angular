import { SideMenuOptions } from './side-menu-options/side-menu-options';
import { Component } from '@angular/core';
import { SideMenuHeader } from './side-menu-header/side-menu-header';

@Component({
  selector: 'gifs-side-menu',
  imports: [SideMenuHeader, SideMenuOptions],
  templateUrl: './side-menu.html'
})
export class SideMenu { }
