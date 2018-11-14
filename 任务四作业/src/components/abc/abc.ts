import { Component } from '@angular/core';

/**
 * Generated class for the AbcComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'abc',
  templateUrl: 'abc.html'
})
export class AbcComponent {

  text: string;

  constructor() {
    console.log('Hello AbcComponent Component');
    this.text = 'this is abc component';
  }

}
