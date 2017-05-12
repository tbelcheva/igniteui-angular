import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonGroupAlignment,
    IgxButtonGroup,
    IgxButtonGroupModule } from "../../../src/buttonGroup/buttonGroup.component";
import { IgxDirectivesModule } from "../../../src/main";
import { ButtonGroupSampleComponent } from "./sample.component";

@NgModule({
    declarations: [ButtonGroupSampleComponent],
    imports: [IgxButtonGroupModule, IgxDirectivesModule]
})
export class ButtonGroupSampleModule {}
