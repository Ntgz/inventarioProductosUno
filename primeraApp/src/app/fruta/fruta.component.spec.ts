import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutaComponent } from './fruta.component';

describe('FrutaComponent', () => {
  let component: FrutaComponent;
  let fixture: ComponentFixture<FrutaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrutaComponent]
    });
    fixture = TestBed.createComponent(FrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
