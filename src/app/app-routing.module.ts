import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./dashboard/dashboard.module').then(
                (mod) => mod.DashboardModule
            ),
        canActivate: [AuthGuard],
    },
    {
        path: 'login',
        component: LoginComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
