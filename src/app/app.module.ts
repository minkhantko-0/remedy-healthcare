import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

//routing
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

//services
import { TokenInterceptorService } from './token-interceptor.service';

//libraries
import {
    popperVariation,
    TippyModule,
    tooltipVariation,
} from '@ngneat/helipopper';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from './shared/shared.module';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
    declarations: [AppComponent, HeaderComponent, LoginComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgxChartsModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        ClipboardModule,
        TippyModule.forRoot({
            defaultVariation: 'tooltip',
            variations: {
                tooltip: tooltipVariation,
                popper: popperVariation,
            },
        }),
        SharedModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
    exports: [],
})
export class AppModule {}
