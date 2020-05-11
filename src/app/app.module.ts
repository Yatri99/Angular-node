import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const Route=[

  {

      path:'',
      redirectTo:'users',
      pathMatch:'full'

  },
  {

      path: 'users',component: UsersComponent

  }

];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(Route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
