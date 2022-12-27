import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GifService } from 'src/app/services/gifs/gif.service';
import { IGif } from 'src/app/utils/interfaces/gif.interface';

@Component({
  selector: 'app-gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.scss']
})
export class GifCardComponent implements OnInit {

  @Input() gif?: IGif;

  @Output() deleteEvent = new EventEmitter<boolean>();

  constructor(
    private gifService: GifService
  ) { }

  ngOnInit(): void {
  }

  deleteGif() {
    this.gifService.deleteGif(this.gif!).subscribe(response => {
      if(response.hasOwnProperty('code_error')){
        this.deleteEvent.emit(false);
      }
      if(response.hasOwnProperty('id')){
        this.deleteEvent.emit(true);
      }
    });
  }

}
