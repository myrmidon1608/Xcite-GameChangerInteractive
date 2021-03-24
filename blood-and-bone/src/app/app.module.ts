import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './components/character/character.component';
import { BaseAttributesComponent } from './components/base-attributes/base-attributes.component';
import { CombatAttributesComponent } from './components/combat-attributes/combat-attributes.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WeaponsComponent } from './components/weapons/weapons.component';
import { ArmorComponent } from './components/armor/armor.component';
import { FormsModule } from '@angular/forms';
import { CharacterService } from './services/character.service';
import { BaseAttributeService } from './services/base-attribute.service';
import { CombatAttributeService } from './services/combat-attribute.service';
import { SkillService } from './services/skill.service';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    BaseAttributesComponent,
    CombatAttributesComponent,
    SkillsComponent,
    WeaponsComponent,
    ArmorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    CharacterService,
    BaseAttributeService,
    CombatAttributeService,
    SkillService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
