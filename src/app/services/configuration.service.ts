import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private _config: any;

  get config() {
    return this._config;
  }

  constructor(private httpClient: HttpClient) { }

  public loadConfig(location: string): any {
    this.httpClient.get(location)
    .subscribe(res => {
      // set the config to the response
      this._config = res;
    });
  }
}
