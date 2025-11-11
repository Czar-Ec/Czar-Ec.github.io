import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private _config: any = {};

  get configuration() {
    if (!this._config) {
      throw new Error('Config not loaded yet!');
    }
    return this._config;
  }

  constructor(private http: HttpClient) { }

  /**
   * Loads configuration from the specified URL.
   * @param configUrl 
   */
  public async loadConfig(configUrl: any) {
    const config = await firstValueFrom(this.http.get(configUrl));
    this._config = config;
  }
}
