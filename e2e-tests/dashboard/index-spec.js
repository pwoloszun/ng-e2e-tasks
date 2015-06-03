'use strict';

xdescribe('dashboard', function() {

  describe('index', function() {
    beforeEach(function() {
      browser.get('index.html#/dashboard');
    });

    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ui-view] p')).first().getText()).
      toMatch(/partial for view 1/);
    });
  });
});
