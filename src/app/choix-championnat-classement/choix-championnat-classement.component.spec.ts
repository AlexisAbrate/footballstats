import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixChampionnatClassementComponent } from './choix-championnat-classement.component';

describe('ChoixChampionnatClassementComponent', () => {
  let component: ChoixChampionnatClassementComponent;
  let fixture: ComponentFixture<ChoixChampionnatClassementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoixChampionnatClassementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixChampionnatClassementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
