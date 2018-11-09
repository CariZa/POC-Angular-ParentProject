import Header from './header.component';

describe('header', () => {
    let component: Header;
    beforeEach(() => {
        component = new Header();
    });

    it('should instatiate Header', () => {
        expect(component).toBeDefined();
    });

});