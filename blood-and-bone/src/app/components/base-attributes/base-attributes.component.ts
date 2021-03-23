import { Component, Input, OnInit } from '@angular/core';
import { BaseAttribute, BaseAttributeType } from 'src/app/model/base-attribute.model';
import { Skill, SkillType } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/services/skill.service';

@Component({
    selector: 'app-base-attributes',
    templateUrl: './base-attributes.component.html',
    styleUrls: ['./base-attributes.component.scss']
})
export class BaseAttributesComponent implements OnInit {
    @Input() baseAttributes!: BaseAttribute[];

    constructor() { }

    ngOnInit(): void {
    }
}
