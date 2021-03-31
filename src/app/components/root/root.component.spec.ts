import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RootComponent } from './root.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AuthGuard } from '../../services/authguard.service';
import { HttpClientModule } from '@angular/common/http';

describe('Root component testing', () => {

    let component: RootComponent;
    let dom: any;
    let fixture: ComponentFixture<RootComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientModule],
            declarations: [RootComponent, HeaderComponent, FooterComponent],
            providers: [AuthGuard]
        });
        fixture = TestBed.createComponent(RootComponent);
        component = fixture.componentInstance;

        dom = fixture.nativeElement;
    }));

    test('should exist', () => {
        expect(component).toBeDefined();
    });

});