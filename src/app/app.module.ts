import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardListComponent } from './components/Cards/card-list/card-list.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SelectMobileComponent } from './components/selects/select-mobile/select-mobile.component';
import { CardsItemComponent } from './components/cards-item/cards-item.component';
import { ModalComponent } from './components/modal/modal.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './pages/detail/detail.component';
import { EpisodeComponent } from './components/episode/episode.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardListComponent,
    FiltersComponent,
    SelectMobileComponent,
    CardsItemComponent,
    ModalComponent,
    AvatarComponent,
    DetailComponent,
    EpisodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
