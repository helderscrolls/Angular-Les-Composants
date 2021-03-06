
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HighlightDirective } from './highlight.directive';
import { DisplayMoviesDirective } from './display-movies.directive';
import { MenuComponent } from './components/menu/menu.component';
import { UserService } from './services/user-service.service';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyFormComponent } from './components/my-form/my-form.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { MagicOvenComponent } from './components/magic-oven/magic-oven.component';
import { DeveloperComponent } from './components/developer/developer.component';
import { SkillComponent } from './components/skill/skill.component';
import { YodaComponent } from './components/yoda/yoda.component';
import { QuestionComponent } from './components/question/question.component';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { CocktailService } from './services/cocktail.service';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    HighlightDirective,
    DisplayMoviesDirective,
    MenuComponent,
    SearchMovieComponent,
    UsersPageComponent,
    SignUpPageComponent,
    HomePageComponent,
    MoviesPageComponent,
    MyFormComponent,
    KitchenComponent,
    MagicOvenComponent,
    DeveloperComponent,
    SkillComponent,
    YodaComponent,
    QuestionComponent,
    CocktailListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UserService, CocktailService],
  bootstrap: [AppComponent]
})
export class AppModule { }