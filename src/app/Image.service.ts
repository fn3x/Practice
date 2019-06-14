
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ImageService {

  constructor(private http: HttpClient) {}
  public uploadImage(image: File, type: string) {
    const formData = new FormData();

    formData.append('image', image);
    formData.append('type', type);

    return this.http.post('url', formData);
  }
}
