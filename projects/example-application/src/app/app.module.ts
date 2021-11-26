import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ErrorInterceptor, TokenInterceptor } from './shared/interceptors';
import { SharedModule } from './shared/shared.module';

const APP_MODULES = [SharedModule, LayoutModule];

// AOT compilation support
export function httpTranslateLoader(http: HttpClient): TranslateHttpLoader
{
  return new TranslateHttpLoader(http);
}
export function translateFactory(translate: TranslateService)
{
  return async (): Promise<void> =>
  {
    translate.setDefaultLang('en-us');
    translate.use('en-us');
    return new Promise<void>((resolve) =>
    {
      translate.onLangChange.subscribe(() =>
      {
        resolve();
      });
    });
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en-us',
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
    ...APP_MODULES
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: translateFactory, deps: [TranslateService], multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
