import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject, catchError, EMPTY, Observable, tap } from 'rxjs';
import { CfxlookupService } from './cfxlookup.service';
import { CfxServer } from './cfxserver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fivem-server-details';

  details$: Observable<CfxServer>;
  loading = false;
  displayError = false;
  showJsonDiv = false;
  
  error: HttpErrorResponse;

  constructor(private cfxLookupService: CfxlookupService) {}

  search(code: string) {
    this.displayError = false;
    this.loading = true;
    this.details$ = this.cfxLookupService.getInfo(code)
    .pipe(
      tap(() => this.loading = false),
      catchError((err: HttpErrorResponse) => {
        this.error = err.error;
        this.displayError = true;
        this.loading = false;
        return EMPTY;
      })
    );
  }

  showJson() {
    if (this.showJsonDiv) {
      this.showJsonDiv = false;
    } else {
      this.showJsonDiv = true;
    }
  }
}
