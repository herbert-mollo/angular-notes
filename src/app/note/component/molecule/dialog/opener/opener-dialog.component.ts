import { Component, Input, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Note } from 'src/app/shared/models/note';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-opener-dialog',
  templateUrl: './opener-dialog.component.html',
  // styleUrls: ['./opener-dialog.component.css']
})
export class OpenerDialogComponent implements OnChanges {
  @Input() note: Note;
  // @Input() okFn: (note: Note) => void;
  @Input() okFn: Function;
  @Input() icon: string = 'adjust';

  constructor(public dialog: MatDialog) {
    this.okFn = () => {};
    this.note = new Note();
  }

  ngOnChanges() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        id: this.note.id,
        title: this.note.title,
        content: this.note.content
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.okFn(result);
    });
  }
}
