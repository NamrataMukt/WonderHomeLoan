import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomepageComponent } from './template/homepage/homepage.component';
import { DashboardComponent } from './template/dashboard/dashboard.component';
import { LoginComponent } from './includes/login/login.component';
import { ContactComponent } from './template/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserdashBoardComponent } from './includes/userdash-board/userdash-board.component';
import { UserHeaderComponent } from './includes/user-header/user-header.component';
import { EmiCalculatorComponent } from './template/emi-calculator/emi-calculator.component';
import { PaginationComponent } from './template/pagination/pagination.component';
import { UserMenuComponent } from './includes/user-menu/user-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    DashboardComponent,
    LoginComponent,
    ContactComponent,
    UserdashBoardComponent,
    UserHeaderComponent,
    EmiCalculatorComponent,
    PaginationComponent,
    UserMenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
