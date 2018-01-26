import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MembersListComponent } from './members-list/members-list.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { AdminComponent } from './admin/admin.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { AddMemberComponent } from './add-member/add-member.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MembersListComponent,
    MemberDetailComponent,
    AdminComponent,
    EditMemberComponent,
    AddMemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
