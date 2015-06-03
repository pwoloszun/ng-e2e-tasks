'use strict';

describe('todo-list', function() {

  xdescribe('index', function() {
    beforeEach(function() {
      browser.get('index.html#/todo-list');
    });

    describe("view render", function() {
      it('should render TODOs list title', function() {
        var header = element(by.css('.todos-header'));
        expect(header.getText()).toMatch(/TODOs List/);
      });

      it('should render new TODO title input', function() {
        var input = element(by.model('title'));
        expect(input).toBeDefined();
      });

      xit('should render "Create" button', function() {
        //TODO
      });

      xit("should render title for each Todo");
    });

    describe('user creates new todo', function() {
      var originalTodosCount;

      beforeEach(function() {
        var titleInput = element(by.model('title'))
        var createButton = element(by.buttonText('Create'));
        var todoItems = element.all(by.css('.todos li'));
        todoItems.then(function() {
          originalTodosCount = todoItems.count();
        });

        titleInput.clear().sendKeys('Buy milk');
        createButton.click();
      });

      it("should display new TODO at the end of Todos list", function() {
        //browser.wait()
        var todoItems = element.all(by.css('ul li'));
        todoItems.then(function() {
          expect(todoItems.count()).toEqual(originalTodosCount + 1);
        });
      });
    });
  });
});
