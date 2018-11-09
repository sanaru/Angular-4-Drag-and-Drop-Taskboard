import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { DataService } from './data.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        TaskboardComponent,
        SidebarComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        AppRoutingModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
