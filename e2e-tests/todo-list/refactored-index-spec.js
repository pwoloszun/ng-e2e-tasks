'use strict';

var TodoListPage = require('./TodoListPage.js');

describe('todo-list', function() {

  describe('index', function() {
    var todoPage;

    beforeEach(function() {
      todoPage = new TodoListPage(browser, element);
      todoPage.openPage();
    });

    describe("view render", function() {
      it('should render TODOs list title', function() {
        expect(todoPage.getHeaderText()).toMatch(/TODOs List/);
      });

      it('should render new TODO title input', function() {
        expect(todoPage.getTitleInput()).toBeDefined();
      });

      xit('should render "Create" button', function() {
        //TODO
      });

      xit("should render title for each Todo", function() {
        //TODO
      });
    });

    describe('user creates new todo', function() {
      var originalTodosCount, title;

      beforeEach(function() {
        todoPage.getTodosCount().then(function(count) {
          originalTodosCount = count;
        });
        title = 'Buy milk';
        todoPage.setTitle(title);
        todoPage.clickCreateButton();
      });

      it("should display new TODO at the end of Todos list", function() {
        todoPage.getTodosCount().then(function(count) {
          expect(count).toEqual(originalTodosCount + 1);
        });
      });
    });
  });
});
