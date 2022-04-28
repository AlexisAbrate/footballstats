import { TestBed } from '@angular/core/testing';

import { ChoixChampionnatService } from './choix-championnat.service';

describe('ChoixChampionnatService', () => {
  let service: ChoixChampionnatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChoixChampionnatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
