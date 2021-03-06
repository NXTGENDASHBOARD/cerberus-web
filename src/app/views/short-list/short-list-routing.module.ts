import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecentApplicationsListComponent } from './components';
import { ShortListComponent } from './short-list.component';
import { ShortlistResolver } from './shortlist.resolver';

const routes: Routes = [
  {
    path: '',
    component: ShortListComponent,
    children: [
      {
        path: '',
        component: RecentApplicationsListComponent,
        resolve: {
          shortlists: ShortlistResolver
        }
      },
    ],
  },
];

export const declarations = [
  ShortListComponent,
  RecentApplicationsListComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShortListRoutingModule {}
