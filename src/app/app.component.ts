import {Component} from '@angular/core';
import {Model} from './repository.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class ProductComponent {
  model: Model = new Model();
}
