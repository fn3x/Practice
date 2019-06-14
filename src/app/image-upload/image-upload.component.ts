import {Component, Input, OnInit} from '@angular/core';
import {ImageService} from '../Image.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  loaded = false;
  @Input() selectedFile: ImageSnippet;
  type = '';
  private regex1: RegExp;
  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    const img = new Image();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      img.src = this.selectedFile.src;
    });
    reader.readAsDataURL(file);

    img.addEventListener('load', (event: any) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = img.width / 6;
      canvas.height = img.height / 6;
      context.drawImage(img,
        0,
        0,
        img.width,
        img.height,
        0,
        0,
        canvas.width,
        canvas.height
      );
      this.selectedFile.src = canvas.toDataURL('img/jpeg');
      this.loaded = true;
      this.regex1 = new RegExp('\[^.\\\\\\/:*?"<>|\\r\\n]+$');
      this.type = this.selectedFile.file.name.match(this.regex1)[0];
      console.log(this.type);
    });
  }
  onUpload() {
    try {
      this.imageService.uploadImage(this.selectedFile.file, this.type).subscribe(
        (res) => {

        },
        (err) => {

        });
    } catch (e) {
      console.log('Не выбран файл!');
    }

  }
}
