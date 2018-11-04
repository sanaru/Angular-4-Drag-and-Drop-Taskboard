import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    mode = new FormControl('over');
  	shouldRun = true;

  	constructor() { }

  	ngOnInit() {
  	}
}
