import { ReactiveForm } from './components/reactive-form/reactive-form';
import { Routes } from '@angular/router';
import { Signal } from './components/signal/signal';
import { App } from './app';
import { Home } from './components/home/home';
import { DataBinding } from './components/data-binding/data-binding';
import { Admin } from './components/admin/admin';
import { TemplateForm } from './components/template-form/template-form';
import { LinkedSignal } from './components/linked-signal/linked-signal';
import { GetApi } from './components/API/get-api/get-api';
import { PostApi } from './components/API/post-api/post-api';
import { LifeCycle } from './components/API/life-cycle/life-cycle';
import { Tabs } from './components/reusable/tabs/tabs';
import { Login } from './components/login/login';
import { Layout } from './components/layout/layout';
export const routes: Routes = [
    {
        path: '',
        redirectTo : 'login',
        pathMatch : 'full'
    },
    {
        path: 'login',
        component:Login
    },
    {
        path : '',
        component : Layout,
        children: [
                    {
                path: 'admin',
                component: Admin,
            },
            {
                path: 'signal',
                component : Signal,
            },
            {
                path: 'data-binding',
                component: DataBinding,
            },
            {
                path: 'template-form',
                component : TemplateForm,
            },
            {
                path: 'linked-signal',
                component: LinkedSignal,
            }
        ]
    },
    
];
