import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { RoleManagementComponent } from './pages/role-management/role-management.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'user-management', component: UserManagementComponent },
      { path: 'role-management', component: RoleManagementComponent },
      { path: '', redirectTo: 'user-management', pathMatch: 'full' }
    ]
  }
];
