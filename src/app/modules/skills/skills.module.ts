import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsComponent } from './components/skills/skills.component';
import { SkillsService } from './sevices/skills.service';


@NgModule({
  declarations: [SkillsComponent],
  exports: [SkillsComponent],
   imports: [
    CommonModule
  ], 
  providers: [SkillsService] 
})
export class SkillsModule { }
