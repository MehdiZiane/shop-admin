import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuantityPicker } from './quantity-picker';

describe('QuantityPicker', () => {
  let component: QuantityPicker;
  let fixture: ComponentFixture<QuantityPicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuantityPicker],
    }).compileComponents();

    fixture = TestBed.createComponent(QuantityPicker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
