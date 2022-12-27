import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IGif } from 'src/app/utils/interfaces/gif.interface';
@Injectable({
  providedIn: 'root'
})
export class GifService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getGifs() {
    return this.httpClient.get('https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/?author_id=2005')
      .pipe(
        map((response:any) => {
          return response.map((gif:IGif) => {
            return {
              id: gif.id,
              url: gif.url,
              author_id: gif.author_id
            }
          })
        })
    );
  }

  newGif(gif: IGif) {
    return this.httpClient.post('https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/', gif);
  }

  deleteGif(gif: IGif) {
    return this.httpClient.delete('https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/', {body: gif});
  }
}
