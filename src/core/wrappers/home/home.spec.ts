import { HomeComponent } from "./home.component";

describe('Home', () => {
    let component: HomeComponent;
    beforeEach(() => {
        component = new HomeComponent();
    });
    it('should instantiate the Home component', () => {
        expect(component).toBeDefined();
    });
});

