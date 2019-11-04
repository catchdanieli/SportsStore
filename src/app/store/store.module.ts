import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { StoreComponent } from './store.component';
import { ModelModule } from '../model/model.module';
import { CartSummaryComponent } from './cartsummary/cartSummary.component';
import { CartDetailComponent } from './cartdetail/cartDetail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StoreComponent, CartSummaryComponent, CartDetailComponent,
  CheckoutComponent],
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
})
export class StoreModule {}

