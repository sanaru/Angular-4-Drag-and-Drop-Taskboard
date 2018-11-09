import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  	constructor() { }
  	backLog: { id: number, heading: string, text:string, image:string }[] = [
        {id: 1, heading: 'Travel ', text: 'Curabitur blandit tempus porttitor.', image:'assets/images/small-ribbon-red.png'},
        {id: 2, heading: 'Budget ', text: 'Curabitur blandit tempus porttitor.', image:'assets/images/small-ribbon-red.png'},
        {id: 3, heading: 'Responsive ', text: 'Curabitur blandit tempus porttitor.', image:undefined}
    ];
    toDo: { id: number, heading: string, text:string, image:string }[] = [
        {id: 1, heading: 'Travel Budget2', text: 'Curabitur blandit tempus porttitor.', image:undefined},
        {id: 2, heading: 'Budget Final2', text: 'Curabitur blandit tempus porttitor.', image:undefined},
        {id: 3, heading: 'Responsive Design2', text: 'Curabitur blandit tempus porttitor.', image:'assets/images/small-ribbon.png'},
        {id: 4, heading: 'Travel Budget2', text: 'Curabitur blandit tempus porttitor.', image:undefined},
        {id: 5, heading: 'Budget Final2', text: 'Curabitur blandit tempus porttitor.', image:undefined},
        {id: 6, heading: 'Responsive Design2', text: 'Curabitur blandit tempus porttitor.', image:'assets/images/small-ribbon.png'},
    ];

    inProcess: { id: number, heading: string, text:string, image:string }[] = [
        {id: 1, heading: 'Travel Process ', text: 'Curabitur blandit tempus porttitor.', image:undefined},
        {id: 2, heading: 'Budget Process', text: 'Curabitur blandit tempus porttitor.', image:undefined},
        {id: 3, heading: 'Responsive Process', text: 'Curabitur blandit tempus porttitor.', image:'assets/images/small-ribbon-green.png'},
        {id: 4, heading: 'Budget Process', text: 'Curabitur blandit tempus porttitor.', image:undefined},
    ];

    processed: { id: number, heading: string, text:string, image:string }[] = [
        {id: 1, heading: 'Travel Process ', text: 'Curabitur blandit tempus porttitor.', image:undefined},
        {id: 2, heading: 'Budget Process', text: 'Curabitur blandit tempus porttitor.', image:undefined},
        {id: 3, heading: 'Responsive Process', text: 'Curabitur blandit tempus porttitor.', image:'assets/images/small-ribbon-yellow.png'}
    ];

    completed: { id: number, heading: string, text:string, image:string }[] = [
        {id: 1, heading: 'Travel Process ', text: 'Curabitur blandit tempus porttitor.',image:undefined},
        {id: 2, heading: 'Budget Process', text: 'Curabitur blandit tempus porttitor.',image:undefined},
        {id: 3, heading: 'Responsive Process', text: 'Curabitur blandit tempus porttitor.',image:undefined},
        {id: 4, heading: 'Responsive Process', text: 'Curabitur blandit tempus porttitor.',image:'assets/images/small-ribbon-purple.png'}
    ];
}
