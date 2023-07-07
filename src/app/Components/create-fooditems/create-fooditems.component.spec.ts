import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFooditemsComponent } from './create-fooditems.component';

describe('CreateFooditemsComponent', () => {
  let component: CreateFooditemsComponent;
  let fixture: ComponentFixture<CreateFooditemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFooditemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFooditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
