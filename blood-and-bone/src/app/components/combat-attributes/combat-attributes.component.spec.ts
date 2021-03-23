import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatAttributesComponent } from './combat-attributes.component';

describe('CombatAttributesComponent', () => {
  let component: CombatAttributesComponent;
  let fixture: ComponentFixture<CombatAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombatAttributesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
