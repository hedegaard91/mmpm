import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./modules/material/material.module";
import { HttpClientModule } from "@angular/common/http";
import { ExternalSourceRegistrationDialogComponent } from "./components/external-source-registration-dialog/external-source-registration-dialog.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MonacoEditorModule } from "ngx-monaco-editor";
import { MagicMirrorConfigEditorComponent } from "./components/magic-mirror-config-editor/magic-mirror-config-editor.component";
import { LiveTerminalFeedDialogComponent } from "src/app/components/live-terminal-feed-dialog/live-terminal-feed-dialog.component";
import { RestApiService } from "src/app/services/rest-api.service";
import { DataStoreService } from "src/app/services/data-store.service";
import { SafePipe } from "./pipes/safe.pipe";
import { TableUpdateNotifierService } from "src/app/services/table-update-notifier.service";
import { MagicMirrorControlCenterComponent } from "./components/magic-mirror-control-center/magic-mirror-control-center.component";
import { ConfirmationDialogComponent } from "./components/confirmation-dialog/confirmation-dialog.component";
import { TerminalStyledPopUpWindowComponent } from "./components/terminal-styled-pop-up-window/terminal-styled-pop-up-window.component";
import { PackageDetailsModalComponent } from "./components/package-details-modal/package-details-modal.component";
import { ActiveProcessCountService } from "src/app/services/active-process-count.service";
import { CustomSnackbarComponent } from "./components/custom-snackbar/custom-snackbar.component";
import { MMPMMarketplaceComponent } from "./components/mmpm-marketplace/mmpm-marketplace.component";
import { MMPMLocalPackagesComponent } from "./components/mmpm-local-packages/mmpm-local-packages.component";
import { MMPMExternalSourcesComponent } from "./components/mmpm-external-sources/mmpm-external-sources.component";
import { MMPMUtility } from "src/app/utils/mmpm-utility";
import { ActiveProcessCountTickerComponent } from "./components/active-process-count-ticker/active-process-count-ticker.component";
import { ActiveProcessesModalComponent } from "./components/active-processes-modal/active-processes-modal.component";
import { MMPMTableContainerComponent } from "./components/mmpm-table-container/mmpm-table-container.component";
import { InstallationConflictResolutionDialogComponent } from "./components/installation-conflict-resolution-dialog/installation-conflict-resolution-dialog.component";

export function initializeMagicMirrorPacakageData(dataStore: DataStoreService) {
  return () => dataStore.loadData();
}

@NgModule({
  declarations: [
    AppComponent,
    ExternalSourceRegistrationDialogComponent,
    MagicMirrorConfigEditorComponent,
    LiveTerminalFeedDialogComponent,
    SafePipe,
    MagicMirrorControlCenterComponent,
    ConfirmationDialogComponent,
    TerminalStyledPopUpWindowComponent,
    PackageDetailsModalComponent,
    CustomSnackbarComponent,
    MMPMMarketplaceComponent,
    MMPMLocalPackagesComponent,
    MMPMExternalSourcesComponent,
    ActiveProcessCountTickerComponent,
    ActiveProcessesModalComponent,
    MMPMTableContainerComponent,
    InstallationConflictResolutionDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MonacoEditorModule.forRoot({
      //baseUrl: "./static/assets",
      baseUrl: "../assets", // NOTE: DEV ONLY
      defaultOptions: {
        language: "javascript",
        scrollBeyondLastLine: false,
        minimap: {
          enabled: false
        },
        scrollbar: {
          useShadows: true,
          verticalHasArrows: false,
          horizontalHasArrows: false,
          vertical: "visible",
          verticalScrollbarSize: 12,
          horizontalScrollbarSize: 12,
          arrowSize: 30
        },
        automaticLayout: true
      }
    })
  ],
  providers: [
    RestApiService,
    TableUpdateNotifierService,
    ActiveProcessCountService,
    MMPMUtility,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeMagicMirrorPacakageData,
      deps: [DataStoreService],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
