import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule],
    exports: [HomeComponent],
    bootstrap: [HomeComponent],
})
export class HomeComponentModule {}