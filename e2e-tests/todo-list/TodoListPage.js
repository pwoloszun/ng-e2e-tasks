function TodoListPage() {
  this._header = element(by.css('.todos-header'));
  this._titleInput = element(by.model('title'));
  this._createButton = element(by.buttonText('Create'));
  this._todoItems = element.all(by.repeater('todo in todoList.todos'));
}

TodoListPage.prototype.getHeader = function() {
  return this._header;
};

TodoListPage.prototype.clickCreate = function() {
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
