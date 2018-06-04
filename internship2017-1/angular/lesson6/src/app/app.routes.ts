import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { EverySecondGuard } from './shared/guards/every-second.guard';
import { FormBuyBookComponent } from './books/form-buy-book/form-buy-book.component';

export const AppRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'books',
        children: [
            {
                path: '',
                component: BooksListComponent,
                canActivate: [EverySecondGuard],
            },
            {
                path: ':bookId',
                component: BookDetailsComponent
            },
            {
                path: ':bookId/buy',
                component: FormBuyBookComponent
            },
        ]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
]
