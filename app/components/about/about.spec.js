describe('About Component', () => {
    beforeEach(() => {
        angular.mock.module('App');
    })
    it('Should have a title property equal to About Page', angular.mock.inject(($componentController) => {
        const component = $componentController('aboutComponent');
        expect(component.title).toEqual('About Page');
    }));
})
