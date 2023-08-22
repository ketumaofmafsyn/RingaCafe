import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgxUiLoaderConfig, NgxUiLoaderModule, PB_DIRECTION, SPINNER } from 'ngx-ui-loader';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { MaterialModule } from './shared/material-module';
import { SharedModule } from './shared/shared.module';
import { SignupComponent } from './signup/signup.component';
import { SnackbarService } from 'path/to/snackbar.service';




const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  text:"Please Wait....",
  textColor:"#FFFFFF",
  textPosition:"center-center",
  pbColor:"green",
  bgsColor:"reen",
  fgsColor:"green",
  fgsType: SPINNER.threeStrings,
  fgsSize:100,
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness:5

};


@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    BestSellerComponent,
    FullComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    SignupComponent
   ],
  imports: [
    BrowserModule,
    MaterialModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    SharedModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  providers: [SnackbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
