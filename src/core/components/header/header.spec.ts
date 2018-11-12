import { HeaderComponent } from './header.component';

describe('header', () => {
    let component: HeaderComponent;
    beforeEach(() => {
        component = new HeaderComponent();
    });

    it('should instatiate Header', () => {
        expect(component).toBeDefined();
    });

});