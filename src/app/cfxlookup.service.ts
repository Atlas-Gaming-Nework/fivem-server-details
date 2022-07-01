import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CfxServer } from './cfxserver';

@Injectable({
  providedIn: 'root'
})
export class CfxlookupService {

  url = 'https://servers-frontend.fivem.net/api/servers/single';

  constructor(private http: HttpClient) { }

  getInfo(code: string): Observable<CfxServer> {
    return this.http.get<CfxServer>(`${this.url}/${code}`);
  }
}
