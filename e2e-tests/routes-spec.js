'use strict';

describe('routes', function() {
  describe('default route', function() {
    beforeEach(function() {
      browser.get('index.html');
    });

    it('should automatically redirect to /dashboard', function() {
      expect(browser.getLocationAbsUrl()).toMatch('/dashboard');
    });
  });

  describe('dashboard view', function() {
    beforeEach(function() {
      browser.get('index.html#/dashboard');
    });

    it('should render dashboard when user navigates to /dashboard', function() {
      expect(browser.getLocationAbsUrl()).toMatch('/dashboard');
    });
  });

  describe('dashboard view', function() {
    beforeEach(function() {
      browser.get('index.html#/todo-list');
    });

    it('should render todo-list when user navigates to /todo-list', function() {
      expect(browser.getLocationAbsUrl()).toMatch('/todo-list');
    });
  });
});
