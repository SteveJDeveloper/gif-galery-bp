import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifGaleryComponent } from './gif-galery.component';

describe('GifGaleryComponent', () => {
  let component: GifGaleryComponent;
  let fixture: ComponentFixture<GifGaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifGaleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
