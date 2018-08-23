import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { PeopleService } from './people/people.service';
import { PeopleFilter } from './people/people.filter';
import { FormsModule } from '@angular/forms';
import { HeadComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PeopleFilter,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    PeopleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
