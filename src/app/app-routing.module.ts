import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

import { MainComponent }   from './main/main.component';
import { AuthComponent }   from './auth/auth.component';
import { HorizontalLayoutComponent } from './horizontal-layout/horizontal-layout.component';

export const AppRoutes: Routes = [
   {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
   },
   {
      path: 'session',loadChildren: () =>
      import('./session/session.module').then(m =>m.SessionDemoModule)
   },
   {
   path: '',
   component: MainComponent,
   canActivate: [AuthGuard],
   runGuardsAndResolvers: 'always',
   children: [{
      path: 'dashboard', loadChildren: ()=>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule)
   },{
      path: 'dash-widget',loadChildren: ()=>
      import('./dashboard-widgets/dashboard-widgets.module').then(m => m.DashboardWidgetsModule)
   },{
      path: 'chat',loadChildren: ()=>
      import('./chat/chat.module').then (m => m.ChatModule)
   },{
      path: 'user-pages',loadChildren: ()=>
      import('./user-pages/users.module').then (m => m.UsersDemoModule)
   },{
      path: 'user-management',loadChildren: ()=>
      import('./user-manage/user-manage.module').then(m => m.UserManageModule)
   },{
     path: 'libraries',loadChildren: ()=>
       import('./libraries/libraries.module').then(m => m.LibrariesModule)
   },{
      path: 'courses',loadChildren: ()=>
      import('./courses/courses.module').then(m => m.CoursesModule)
   },{
      path: 'video-player',loadChildren: ()=>
      import('./video-player/video-player.module').then(m => m.VideoPlayerModule)
   },],
   },
   {
      path: 'horizontal',
      component: HorizontalLayoutComponent,
      children: [],
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

