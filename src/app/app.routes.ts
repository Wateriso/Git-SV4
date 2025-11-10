import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Shop } from './shop/shop';
import { Man } from './man/man';
import { Woman } from './woman/woman';
import { Boy } from './boy/boy';
import { Girl } from './girl/girl';
import { Product1 } from './product1/product1';

export const routes: Routes = [
    {path:'', component: Home},
    {path:'home', component: Home},
    {path:'about', component: About},
    {path:'contact', component: Contact },
    {path:'shop', component : Shop},
    {path:'man', component: Man},
    {path:'woman', component: Woman},
    {path:'boy', component:Boy},
    {path:'girl', component: Girl},
    {path:'product1', component: Product1}
];
