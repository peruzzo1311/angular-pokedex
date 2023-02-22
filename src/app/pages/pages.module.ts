import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [HomeComponent, DetailsComponent],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    ButtonModule,
    ProgressSpinnerModule,
  ],
})
export class PagesModule {}
