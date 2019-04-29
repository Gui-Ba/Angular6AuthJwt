import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private local= 'http://localhost:8080';
  private heroku= 'https://boiling-reef-62053.herokuapp.com';

  private userUrl = 'https://boiling-reef-62053.herokuapp.com/api/test/user';
  private pmUrl = 'https://boiling-reef-62053.herokuapp.com/api/test/pm';
  private adminUrl =  'https://boiling-reef-62053.herokuapp.com/api/test/admin';

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getPMBoard(): Observable<string> {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
}
