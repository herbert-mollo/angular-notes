import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './component/organism/body/body.component';
import { SearchListComponent } from './component/organism/search-list/search-list.component';
import { NoteListComponent } from './component/organism/note-list/note-list.component';
import { NoteRoutingModule } from './note-routing.module';
import { NoteReadingComponent } from './component/page/note-reading/note-reading.component';
import { NoteItemComponent } from './component/atom/note-item/note-item.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './component/molecule/header/header.component';
import { IconComponent } from './component/atom/icon/icon.component';
import { DialogComponent } from './component/molecule/dialog/dialog/dialog.component';
import { OpenerDialogComponent } from './component/molecule/dialog/opener/opener-dialog.component';
import { SidenavComponent } from './component/molecule/sidenav/sidenav.component';
import { SearchInputComponent } from './component/atom/search-input/search-input.component';
import { TextAreaInputComponent } from './component/atom/text-area-input/text-area-input.component';
import { InputComponent } from './component/atom/input/input.component';
import { DivContentEditableComponent } from './component/atom/div-content-editable/div-content-editable.component';

@NgModule({
  declarations: [
    BodyComponent,
    SearchListComponent,
    NoteListComponent,
    NoteReadingComponent,
    NoteItemComponent,
    HeaderComponent,
    IconComponent,
    DialogComponent,
    OpenerDialogComponent,
    SidenavComponent,
    SearchInputComponent,
    TextAreaInputComponent,
    InputComponent,
    DivContentEditableComponent,
  ],
  imports: [
    CommonModule,
    NoteRoutingModule,
    SharedModule,
  ]
})
export class NoteModule { }
