import { Component, OnInit } from '@angular/core';
import { GifService } from 'src/app/services/gifs/gif.service';
import { IGif } from 'src/app/utils/interfaces/gif.interface';
@Component({
  selector: 'app-gif-galery',
  templateUrl: './gif-galery.component.html',
  styleUrls: ['./gif-galery.component.scss']
})
export class GifGaleryComponent implements OnInit {

  gifs: IGif[] = [];

  constructor(
    private gifService: GifService
  ) { }

  ngOnInit(): void {
    this.getGifs();
  }

  getGifs(){
    this.gifService.getGifs().subscribe(response => {
      this.gifs = response;
    });
  }

  eventListener(flag: boolean, msg: string){
    if(flag){
      this.getGifs();
    }else{
      alert("No se pudo"+msg+"el GIF");
    }
  }
}
