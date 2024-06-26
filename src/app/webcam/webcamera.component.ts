import {Component, OnInit, ViewChild, ElementRef, Output, Input} from '@angular/core';

@Component({
  selector: 'app-webcamera',
  templateUrl: './webcamera.component.html',
  styleUrls: ['./webcamera.component.css']
})
export class WebcameraComponent implements OnInit {
  @Input() selectedFile: any;
  @ViewChild('video', {static: false})
  public video: ElementRef;

  @ViewChild('canvas', {static: false})
  public canvas: ElementRef;

  public captures: Array<any>;

  constructor() {
    this.captures = [];
  }
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
}
