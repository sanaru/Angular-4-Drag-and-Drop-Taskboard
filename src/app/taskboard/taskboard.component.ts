import { Component, OnInit, VERSION, ViewChild } from '@angular/core';

@Component({
  	selector: 'app-taskboard',
  	templateUrl: './taskboard.component.html',
  	styleUrls: ['./taskboard.component.css']
})

export class TaskboardComponent implements OnInit {
  	ngVersion: string = VERSION.full;
  	matVersion: string = '5.1.0';
  	// breakpoint: number;

    backLog: { id: number, heading: string, text:string, image:boolean }[] = [
        {id: 1, heading: 'Travel ', text: 'Curabitur blandit tempus porttitor.', image:false},
        {id: 2, heading: 'Budget ', text: 'Curabitur blandit tempus porttitor.', image:true},
        {id: 3, heading: 'Responsive ', text: 'Curabitur blandit tempus porttitor.', image:false}
    ];

    toDo: { id: number, heading: string, text:string, image:boolean }[] = [
        {id: 1, heading: 'Travel Budget2', text: 'Curabitur blandit tempus porttitor.', image:false},
        {id: 2, heading: 'Budget Final2', text: 'Curabitur blandit tempus porttitor.', image:false},
        {id: 3, heading: 'Responsive Design2', text: 'Curabitur blandit tempus porttitor.', image:false},
        {id: 4, heading: 'Travel Budget2', text: 'Curabitur blandit tempus porttitor.', image:true},
        {id: 5, heading: 'Budget Final2', text: 'Curabitur blandit tempus porttitor.', image:false},
        {id: 6, heading: 'Responsive Design2', text: 'Curabitur blandit tempus porttitor.', image:false},
    ];

    inProcess: { id: number, heading: string, text:string, image:boolean }[] = [
        {id: 1, heading: 'Travel Process ', text: 'Curabitur blandit tempus porttitor.', image:false},
        {id: 2, heading: 'Budget Process', text: 'Curabitur blandit tempus porttitor.', image:true},
        {id: 3, heading: 'Responsive Process', text: 'Curabitur blandit tempus porttitor.', image:false},
        {id: 4, heading: 'Budget Process', text: 'Curabitur blandit tempus porttitor.', image:true},
    ];

    processed: { id: number, heading: string, text:string, image:boolean }[] = [
        {id: 1, heading: 'Travel Process ', text: 'Curabitur blandit tempus porttitor.', image:false},
        {id: 2, heading: 'Budget Process', text: 'Curabitur blandit tempus porttitor.', image:false},
        {id: 3, heading: 'Responsive Process', text: 'Curabitur blandit tempus porttitor.', image:true}
    ];

    completed: { id: number, heading: string, text:string, image:boolean }[] = [
        {id: 1, heading: 'Travel Process ', text: 'Curabitur blandit tempus porttitor.',image:false},
        {id: 2, heading: 'Budget Process', text: 'Curabitur blandit tempus porttitor.',image:true},
        {id: 3, heading: 'Responsive Process', text: 'Curabitur blandit tempus porttitor.',image:false},
        {id: 4, heading: 'Responsive Process', text: 'Curabitur blandit tempus porttitor.',image:false}
    ];

    textToUpdate: { id: number, heading: string, text:string, image:boolean } = { id : undefined, heading: undefined, text: undefined, image:false};

  	constructor() {
    }

  	ngOnInit() {
  	}

    drop(ev) {
        ev.preventDefault();
        var id = ev.dataTransfer.getData("text");
        var draggedData = ev.dataTransfer.getData("text");
        draggedData = draggedData.split("-");
        var text = this.textToUpdate;
        var targetElement = (ev.target).closest('[id]');
        targetElement = targetElement.id;
        targetElement = targetElement.split("-");
        switch (targetElement[0]) {
            case 'toDo':
                var index = parseInt(targetElement[1]);
                this.toDo.splice( index, 0, text );
                this.deleteChild(draggedData);
                break;
            case 'backLog':
                var index = parseInt(targetElement[1]);
                this.backLog.splice( index, 0, text );
                this.deleteChild(draggedData);
                break;
            case 'inProcess':
                var index = parseInt(targetElement[1]);
                this.inProcess.splice( index, 0, text );
                this.deleteChild(draggedData);
                break;
            case 'processed':
                var index = parseInt(targetElement[1]);
                this.processed.splice( index, 0, text );
                this.deleteChild(draggedData);
                break;
            case 'completed':
                var index = parseInt(targetElement[1]);
                this.completed.splice( index, 0, text );
                this.deleteChild(draggedData);
                break;
            default:
                // statements_def
                break;
        }
    }

    deleteChild(flag) {
        switch (flag[0]) {
            case 'backLog':
                this.backLog.splice(flag[1],1);
                break;
            case 'toDo':
                this.toDo.splice(flag[1],1);
                break;
            case 'inProcess':
                this.inProcess.splice(flag[1],1);
                break;
            case 'processed':
                this.processed.splice(flag[1],1);
                break;
            case 'completed':
                this.completed.splice(flag[1],1);
                break;
            default:
                // statements_def
                break;
        }
    }

    allowDrop(ev) {
        ev.preventDefault();
    }

    drag(ev, data) {
        ev.dataTransfer.setData("text", ev.target.id);
        this.textToUpdate = data;
        ev.dataTransfer.setData("info", data);
    }
}

