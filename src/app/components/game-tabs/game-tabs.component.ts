import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../models';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrl: './game-tabs.component.scss'
})
export class GameTabsComponent implements OnInit{

  @Input() game!: Game

  constructor() {
    
  }

  ngOnInit(): void {

  }

}
