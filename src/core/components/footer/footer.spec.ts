import { FooterComponent } from './footer.component';

describe('footer', () => {

    let component: FooterComponent;

    beforeEach(() => {
        component = new FooterComponent();
    });

   it('should be able to instantiate footer', () => {
    expect(component).toBeDefined();
   });
});