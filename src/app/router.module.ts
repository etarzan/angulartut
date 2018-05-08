import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const approutes: Routes = [
    { path: "", component: AppComponent },
    {
        path: "recipes", component: RecipesComponent},
    {
        path: "shopping", component: ShoppingListComponent},
   // { path: "not-found", component: NotFoundComponent },
    { path: "**", redirectTo: "" }
];

@NgModule({
    imports: [ RouterModule.forRoot(approutes) ],
    exports: [RouterModule]
    })
export class RoutingModule {}