import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Qlinks } from '../models/qlinks.models';
import { CreateQlinks } from '../models/create-qlinks.models';

@Injectable()
export class QlinksService {
  constructor(private http: HttpClient) {}

  getQlinks(): Observable<any> {
    return this.http.get('http://localhost:5242/api/Qlinks/GetQlinks');
  } 

  getQlinksCateogory(): Observable<any> {
    return this.http.get('http://localhost:5242/api/Qlinks/GetQlinksCategory');
  } 

  createQlinks(qlinksObj: CreateQlinks): Observable<any> {
    const httpHeaders = new HttpHeaders(
        {
            "Content-Type": "application/json"
        }
    );

    const options = {
        headers: httpHeaders
    };
  return this.http.post<CreateQlinks>(
    'http://localhost:5242/api/Qlinks/AddQlink',
    JSON.stringify(qlinksObj),
    options
  );
}
}
