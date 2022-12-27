import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { GifService } from 'src/app/services/gifs/gif.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/services/validators/validator.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  reactiveForm: FormGroup = undefined!;

  @Output() addEvent = new EventEmitter<boolean>();

  constructor(
    private gifService: GifService,
    private formBuilder: FormBuilder,
    private validator: ValidatorService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.reactiveForm = this.formBuilder.group({
      id: [0],
      url: ['', [Validators.required, Validators.minLength(10), this.validator.fromTenor, this.validator.extensionGif]],
      author_id: [2005]
    })
  }

  saveGif(){
    if(this.reactiveForm.valid){
      this.gifService.newGif(this.reactiveForm.value).subscribe(response => {
        if(response.hasOwnProperty('code_error')){
          this.addEvent.emit(false);
        }
        if(response.hasOwnProperty('id')){
          this.addEvent.emit(true);
          this.reactiveForm.reset({
            url: ''
          })
        }
      })
    }else{
      alert("Verificar que la url del Gif sea valida. Debe venir de la pagina web de Tenor Gifs y tener extension .gif");
    }
  }

  get urlValid(){
    return this.reactiveForm.get('url')?.invalid && this.reactiveForm.get('url')?.touched;
  }
}
