import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VersionService } from '@core/version.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-19-best-practicies';

  constructor(private versionService: VersionService) {}

  ngOnInit(): void {
    const version = this.versionService.getVersion();
    const metaTag = document.querySelector('meta[name="version"]');
    if (metaTag) {
      metaTag.setAttribute('content', version);
    }
  }
}
