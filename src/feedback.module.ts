import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { IonicModule } from "ionic-angular";

import { FeedbackViewerModalComponent } from "./feedback-viewer-modal.component";
import { FeedbackViewerModalManager } from "./feedback-viewer-modal.manager";
import { FeedbackService } from "./feedback.service";

@NgModule({
	declarations: [
		FeedbackViewerModalComponent,
	],
	entryComponents: [
		FeedbackViewerModalComponent,
	],
	imports: [
		HttpClientModule,
		IonicModule,
	],
	providers: [
		FeedbackViewerModalManager,
		FeedbackService,
	],
})
export class FeedbackModule { }
