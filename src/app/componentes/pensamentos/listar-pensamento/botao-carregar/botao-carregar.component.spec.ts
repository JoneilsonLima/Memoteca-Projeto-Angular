import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCarregarComponent } from './botao-carregar.component';

describe('BotaoCarregarComponent', () => {
  let component: BotaoCarregarComponent;
  let fixture: ComponentFixture<BotaoCarregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoCarregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoCarregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
