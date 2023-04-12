import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-carregar',
  templateUrl: './botao-carregar.component.html',
  styleUrls: ['./botao-carregar.component.css']
})
export class BotaoCarregarComponent implements OnInit {

  @Input() haMaisPensamentos: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
