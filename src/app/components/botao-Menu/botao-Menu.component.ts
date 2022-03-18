import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botao-Menu',
  templateUrl: './botao-Menu.component.html',
  styleUrls: ['./botao-Menu.component.scss']
})
export class BotaoMenuComponent implements OnInit {

  @Input()
  descricao = '';

  @Input()
  selecionado = false;

  @Output()
  click = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.click.emit();
  }

}
