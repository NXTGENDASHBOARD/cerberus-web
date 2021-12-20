import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {}

  get theme(): string {
    return document.documentElement.getAttribute('data-theme') as string;
  }

  set theme(name: string) {
    document.documentElement.setAttribute('data-theme', name);
  }
  
}
