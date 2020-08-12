import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

import { MainComponent } from './main/main.component';
import { AuthComponent } from './auth/auth.component';

export const AppRoutes: Routes = [
   {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
   },
   {
      path: 'session', loadChildren: () =>
         import('./session/session.module').then(m => m.SessionModule)
   },
   {
      path: '',
      component: MainComponent,
      canActivate: [AuthGuard],
      runGuardsAndResolvers: 'always',
      children: [
      {
         path: 'dashboard', loadChildren: () =>
            import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
         path: 'home', loadChildren: () =>
            import('./home/home.module').then(m => m.HomeModule)
      },
      {
         path: 'chat', loadChildren: () =>
            import('./chat/chat.module').then(m => m.ChatModule)
      }, {
         path: 'user-pages', loadChildren: () =>
            import('./user-pages/users.module').then(m => m.UsersDemoModule)
      }, {
         path: 'user-management', loadChildren: () =>
            import('./user-manage/user-manage.module').then(m => m.UserManageModule)
      }, {
         path: 'libraries', loadChildren: () =>
            import('./libraries/libraries.module').then(m => m.LibrariesModule)
      },
      {
         path: 'favorites', loadChildren: () =>
            import('./favorites/favorites.module').then(m => m.FavoritesModule)
      },
      {
         path: 'courses', loadChildren: () =>
            import('./courses/courses.module').then(m => m.CoursesModule)
      }, {
         path: 'video-player', loadChildren: () =>
            import('./video-player/video-player.module').then(m => m.VideoPlayerModule)
      },
      {
         path: 'workbooks', loadChildren: () =>
            import('./workbooks/workbook.module').then(m => m.WorkbookModule)
      },
      {
         path: 'org', loadChildren: () =>
            import('./organizations/organization.module').then(m => m.OrganizationModule)
      },
      {
         path: 'perm', loadChildren: () =>
            import('./permissions/permission.module').then(m => m.PermModule)
      }],
   },
   {
      path: '**',
      redirectTo: 'session'
   }
];

@NgModule({
   imports: [RouterModule.forRoot(AppRoutes)],
   exports: [RouterModule],
   providers: []
})
export class RoutingModule { }

