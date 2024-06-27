import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstadoDetailPage } from './estado-detail.page';

describe('EstadoDetailPage', () => {
  let component: EstadoDetailPage;
  let fixture: ComponentFixture<EstadoDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
