import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MattswhackkywonderlandComponent } from './mattswhackkywonderland.component';

describe('MattswhackkywonderlandComponent', () => {
  let component: MattswhackkywonderlandComponent;
  let fixture: ComponentFixture<MattswhackkywonderlandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MattswhackkywonderlandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MattswhackkywonderlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
