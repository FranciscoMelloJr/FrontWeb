import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosPesquisaComponent } from './estados-pesquisa.component';

describe('EstadosPesquisaComponent', () => {
  let component: EstadosPesquisaComponent;
  let fixture: ComponentFixture<EstadosPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadosPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
