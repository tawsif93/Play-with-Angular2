import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ComplexformComponent} from './complexform.component';

describe('ComplexformComponent', () => {
	let component: ComplexformComponent;
	let fixture: ComponentFixture<ComplexformComponent>;
	
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ComplexformComponent]
		})
			.compileComponents();
	}));
	
	beforeEach(() => {
		fixture = TestBed.createComponent(ComplexformComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
