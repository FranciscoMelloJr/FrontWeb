import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosCadastroComponent } from './estados-cadastro.component';

describe('EstadosCadastroComponent', () => {
  let component: EstadosCadastroComponent;
  let fixture: ComponentFixture<EstadosCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadosCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
