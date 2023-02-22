import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [PokeHeaderComponent, PokeSearchComponent, PokeListComponent],
  exports: [PokeHeaderComponent, PokeSearchComponent, PokeListComponent],
  imports: [CommonModule, InputTextModule, RouterModule, ProgressSpinnerModule],
})
export class SharedModule {}
