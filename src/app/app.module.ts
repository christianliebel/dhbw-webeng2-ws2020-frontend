import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YellPipe } from './yell.pipe';
import { TodoComponent } from './todo/todo.component';
import { TestDirective } from './test.directive';
import { Test2Directive } from './test2.directive';
import { AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    YellPipe,
    TodoComponent,
    TestDirective,
    Test2Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      // The domain and clientId were configured in the previous chapter
      domain: 'christianliebel.eu.auth0.com',
      clientId: 'mDjWaVqUfRT0kfzZa7Ps4qE2trGPa0JW',

      // Request this audience at user authentication time
      audience: 'https://christianliebel.com/dhbw/2020/ws/todo',

      // Specify configuration for the interceptor
      httpInterceptor: {
        allowedList: [
          {
            // Match any request that starts 'https://christianliebel.eu.auth0.com/api/v2/' (note the asterisk)
            uri: 'http://localhost:3000/*',
            tokenOptions: {
              // The attached token should target this audience
              audience: 'https://christianliebel.com/dhbw/2020/ws/todo',
            }
          }
        ]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
