import { Component } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css']
})

export class PeopleComponent {

  starRating: any;
  starRating_full: any;
  empList: any;
  imageWidth: Number = 100;
  people: any;
  enterData: string;
  constructor(peopleService: PeopleService) {
    peopleService.getEmp().then(res => {
      console.log(res);
      this.empList = res.People;
      this.people = this.empList[0];
      this.starRating = new Array(this.people.rating);
      this.starRating_full = new Array(5 - parseInt(this.people.rating));
    });

  }
  showPeople(emp) {
    console.log(emp);
    this.people = this.empList.filter(res => res === emp)[0];
    this.starRating = new Array(this.people.rating);
    this.starRating_full = new Array(5-parseInt(this.people.rating))
    console.log(this.people);
  }

}
