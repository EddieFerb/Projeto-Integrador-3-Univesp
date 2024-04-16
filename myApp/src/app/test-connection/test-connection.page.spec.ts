import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestConnectionPage } from './test-connection.page';

describe('TestConnectionPage', () => {
  let component: TestConnectionPage;
  let fixture: ComponentFixture<TestConnectionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestConnectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
