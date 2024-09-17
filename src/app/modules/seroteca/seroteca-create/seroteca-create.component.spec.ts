import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerotecaCreateComponent } from './seroteca-create.component';

describe('SerotecaCreateComponent', () => {
  let component: SerotecaCreateComponent;
  let fixture: ComponentFixture<SerotecaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerotecaCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerotecaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
