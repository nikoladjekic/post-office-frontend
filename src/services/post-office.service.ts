import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PostOffice } from 'src/models/post-office.interface';

@Injectable({
  providedIn: 'root'
})
export class PostOfficeService {
  private dbUrl: string = `${environment.API_URL}/office`;

  constructor(private http: HttpClient) { }

  getOffices() {
    return this.http.get<PostOffice[]>(`${this.dbUrl}/list`);
  }
}
