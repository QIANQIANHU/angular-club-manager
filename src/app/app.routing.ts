import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MembersListComponent } from './members-list/members-list.component';


const appRoutes: Routes = [
  {
  path: '',
  component: AboutComponent
  },
  {
  path: 'admin',
  component: AdminComponent
  },
  {
  path: 'about',
  component: AboutComponent
  },
  {
  path: 'list',
  component: MembersListComponent
  },
  {
  path: 'admin',
  component: AdminComponent
  },
  {
  path: 'members/:id',
  component: MemberDetailComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
