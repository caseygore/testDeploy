import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerReport } from './banner-report';

describe('BannerReport', () => {
  let component: BannerReport;
  let fixture: ComponentFixture<BannerReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
