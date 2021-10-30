import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private _config: any;

  get config() { return this._config; }

  constructor(private httpClient: HttpClient) { }

  public loadConfig(location: string): any {
    return this.httpClient.get(location)
      .pipe(tap(res => this._config = res));
  }
}
