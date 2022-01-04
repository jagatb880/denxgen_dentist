import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FranchiseInquiryPage } from './franchise-inquiry.page';

describe('FranchiseInquiryPage', () => {
  let component: FranchiseInquiryPage;
  let fixture: ComponentFixture<FranchiseInquiryPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchiseInquiryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FranchiseInquiryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
