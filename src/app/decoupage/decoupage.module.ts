import { NgModule } from "@angular/core";
import { DecoupageComponent } from "./component/decoupage.component";
import { TableModule } from 'primeng/table';
import { DecoupageService } from "./services/decoupage.service";

@NgModule({
    declarations: [DecoupageComponent],
    providers: [DecoupageService],
    imports: [TableModule],
    bootstrap: [DecoupageComponent],
    exports: [DecoupageComponent]
})
export class DecoupageModule {

}