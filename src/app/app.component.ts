import { Component, ViewEncapsulation } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css'],
  	encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  	title = 'ng5-material';
  	mode = new FormControl('over');
  	shouldRun = true;

  	ab() {
  		console.log('abc');
  	}
}
