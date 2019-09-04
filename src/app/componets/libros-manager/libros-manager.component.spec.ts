import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosManagerComponent } from './libros-manager.component';

describe('LibrosManagerComponent', () => {
  let component: LibrosManagerComponent;
  let fixture: ComponentFixture<LibrosManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
