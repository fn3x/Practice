import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCheckboxModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogComponent} from './dialog/dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormComponent } from './form/form.component';
import { WebcameraComponent } from './webcam/webcamera.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ImageService} from './Image.service';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    FormComponent,
    WebcameraComponent,
    ImageUploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
