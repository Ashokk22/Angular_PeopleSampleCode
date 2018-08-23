import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()

export class PeopleService {
  private url = './assets/people.json';
  constructor(private http: Http) {}
  getEmp(): Promise<any> {
    return this.http.get(this.url).toPromise().then(res => res.json());
  }
}
