import { Component } from '@angular/core';
import * as moment from 'moment'
import 'moment/locale/es'
import { AppRoutingModule} from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'visordecargos';
}
