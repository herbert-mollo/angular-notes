import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './component/organism/body/body.component';
import { NoteReadingComponent } from './component/page/note-reading/note-reading.component';

const routes: Routes = [
  {
    path: '',
    component: NoteReadingComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class NoteRoutingModule { }
