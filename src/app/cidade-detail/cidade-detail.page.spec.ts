import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CidadeDetailPage } from './cidade-detail.page';

describe('CidadeDetailPage', () => {
  let component: CidadeDetailPage;
  let fixture: ComponentFixture<CidadeDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
