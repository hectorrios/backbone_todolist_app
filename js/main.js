
$(document).ready(function () {
    var todoItems = new TodoItems([
        new TodoItem({description: 'TodoItem 1'}),
        new TodoItem({description: 'TodoItem 2'}),
        new TodoItem({description: 'TodoItem 3'}),
        new TodoItem({description: 'TodoItem 4'})
    ]);

    var todoItemsView = new TodoItemsView({model: todoItems});

    $('body').append(todoItemsView.render().$el);
})
