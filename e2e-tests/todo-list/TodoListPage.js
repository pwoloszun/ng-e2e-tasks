function TodoListPage(browser, element) {
  this._browser = browser;
  this._el = element;
  this._header = this._el(by.css('.todos-header'));
  this._titleInput = this._el(by.model('title'));
  this._createButton = this._el(by.buttonText('Create'));
  this._todoItems = this._el.all(by.repeater('todo in todoList.todos'));
}

TodoListPage.prototype.openPage = function() {
  this._browser.get('index.html#/todo-list');
};

TodoListPage.prototype.getHeaderText = function() {
  return this._header.getText();
};

TodoListPage.prototype.clickCreateButton = function() {
  this._createButton.click();
};

TodoListPage.prototype.getTitleInput = function(text) {
  return this._titleInput;
};

TodoListPage.prototype.setTitle = function(text) {
  this._titleInput.clear().sendKeys(text);
};

TodoListPage.prototype.getTodosCount = function() {
  return this._todoItems.count();
};

TodoListPage.prototype.getTodosTitles = function() {
  return this._todoItems.map(function(el) {
    return el.getText();
  });
};

module.exports = TodoListPage;
