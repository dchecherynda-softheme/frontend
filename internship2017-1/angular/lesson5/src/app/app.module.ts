import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { BytesPipe } from './pipes/bytes.pipe';
import { HttpModule } from '@angular/http';
import { BooksService } from './services/books.service';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AppRoutes } from './app.routes';

@NgModule({
    declarations: [
        AppComponent,
        BooksListComponent,
        FavoriteComponent,
        HighlightDirective,
        UnlessDirective,
        BytesPipe,
        BookDetailsComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(AppRoutes),
    ],
    providers: [BooksService],
    bootstrap: [AppComponent]
})
export class AppModule { }
