import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-webcamera',
  templateUrl: './webcamera.component.html',
  styleUrls: ['./webcamera.component.css']
})
export class WebcameraComponent implements OnInit {
  @ViewChild('video', {static: false})
  public video: ElementRef;

  @ViewChild('canvas', {static: false})
  public canvas: ElementRef;

  public captures: Array<any>;

  public constructor() {
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
    const context = this.canvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement, 0, 0, 640, 480);
    this.captures.push(this.canvas.nativeElement.toDataURL('image/png'));
  }


}
