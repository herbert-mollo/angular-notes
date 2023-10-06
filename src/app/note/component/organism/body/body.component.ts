import { Component, Input } from '@angular/core';
import { Note } from 'src/app/shared/models/note';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  @Input() note: Note = new Note();
  @Input() editFn: Function = () => {};

  editTitle = (title: string) =>{
    console.log({title});
    this.note.title = title;
    this.editFn(this.note);
  }

  editContent = (content: string) => {
    this.note.content = content;
    this.editFn(this.note);
  }
}
