import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';



// Route Configuration
export const routes: Routes = [
  {
        path: '',
        children: [
            {
                path: '',
                component: HeaderComponent,
                outlet: 'header',
            }, {
                path: '',
                component: HomeComponent
            }, {
                path: '',
                component: FooterComponent,
                outlet: 'footer',
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CoreRoutingModule {}
