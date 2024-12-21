import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  constructor() {}

  public getVersion(): string {
    return environment.version;
  }
}
