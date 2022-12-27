import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorValidate } from 'src/app/utils/interfaces/error.interface';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  fromTenor(control: FormControl): ErrorValidate | null{
    if(!control.value.includes('media.tenor.com')){
      return { noFromTenor: true };
    }
    return null;
  }

  extensionGif(control: FormControl): ErrorValidate | null{
    if(!control.value.includes('.gif')){
      return { noGifExtension: true };
    }
    return null;
  }
}


