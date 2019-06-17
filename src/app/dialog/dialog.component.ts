import { Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<DialogComponent>) {
    this.captures = [];
  }
  @Input() selectedFile: any;
  @ViewChild('video', {static: false})
  public video: ElementRef;

  @ViewChild('canvas', {static: false})
  public canvas: ElementRef;

  public captures: Array<any>;
  ngOnInit() {
  }
  // tslint:disable-next-line:use-lifecycle-interface
  public ngAfterViewInit() {
    // tslint:disable-next-line:prefer-const
    // let video = document.getElementById('video');
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.video.nativeElement.srcObject = stream;
        this.video.nativeElement.play();
      });
    }
  }

  public capture() {
    this.canvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement, 0, 0, 640, 480);
    this.captures.push(this.canvas.nativeElement.toDataURL('image/png'));
  }
  public onSelect(imageCaptured: any) {
    this.selectedFile = imageCaptured;
    console.log(this.selectedFile);
  }

  close() {
    this.dialogRef.close();
  }
}
