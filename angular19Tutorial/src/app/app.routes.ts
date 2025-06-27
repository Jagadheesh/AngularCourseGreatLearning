import { Routes } from '@angular/router';
import { Signal } from './components/signal/signal';
import { App } from './app';
import { Home } from './components/home/home';
import { DataBinding } from './components/data-binding/data-binding';
import { Admin } from './components/admin/admin';
import { TemplateForm } from './components/template-form/template-form';
import { LinkedSignal } from './components/linked-signal/linked-signal';
export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
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
];
