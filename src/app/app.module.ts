import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MembersComponent } from './members/members.component';
import { AddEditFormComponent } from './members/add-edit-form/add-edit-form.component';
import { AddMemberComponent } from './members/add-member/add-member.component';
import { EditMemberComponent } from './members/edit-member/edit-member.component';
import { MessagesComponent } from './services/messages-service/messages.component';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ErrorMatcherService} from './services/form-validation/form-validators.service';
import {ShowOnDirtyErrorStateMatcher} from '@angular/material';
import {UniqueNameService} from './services/unique-name.service';
import {UpdateDatatableService} from './services/update-datatable.service';
import {FormErrorsService} from './services/form-validation/form-errors.service';
import {MessagesService} from './services/messages-service/messages.service';
import {HttpService} from './http.service';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from '../server/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MessagesComponent,
    EditMemberComponent,
    AddMemberComponent,
    AddEditFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService
    ),
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    MembersComponent,
    HttpClientModule,
    HttpService,
    MessagesService,
    FormErrorsService,
    UpdateDatatableService,
    UniqueNameService,
    {provide: ErrorMatcherService, useClass:     ShowOnDirtyErrorStateMatcher},
    {provide: MAT_DIALOG_DATA, useValue: {}},
    {provide: MatDialogRef, useValue: {}},
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    MessagesComponent,
    EditMemberComponent,
    AddMemberComponent,
  ],
})
export class AppModule { }
