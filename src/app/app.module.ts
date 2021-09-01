import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhoenixUIModule } from 'phoenix-ui-components';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LHCbExperimentComponent } from './lhcb-experiment/lhcb-experiment.component';
import { HomeComponent } from './home/home.component';
import { GltfExporterComponent } from './gltf-exporter/gltf-exporter.component';

let routes: Routes;

if (environment?.singleEvent) {
  routes = [{ path: '', component: LHCbExperimentComponent }];
} else {
  routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'lhcb', component: LHCbExperimentComponent },
    { path: 'gltf-exporter', component: GltfExporterComponent }
  ];
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LHCbExperimentComponent,
    GltfExporterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      useHash: environment?.singleEvent ? false : true,
    }),
    BrowserAnimationsModule,
    PhoenixUIModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}