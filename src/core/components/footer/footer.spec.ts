import Footer from './footer.component';

describe('footer', () => {

    let component: Footer;

    beforeEach(() => {
        component = new Footer();
    });

   it('should be able to instantiate footer', () => {
    expect(component).toBeDefined();
   });
});