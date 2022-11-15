import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PathEnum} from './shared/enums/path.enum';
import {StartComponent} from './modules/components/start/start.component';

const routes: Routes = [
  {path: '', redirectTo: PathEnum.Start, pathMatch: 'full'},
  {path: PathEnum.Start, component: StartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
