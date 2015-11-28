/**
 * Created by hrios on 28/11/15.
 */

var TodoItemsView = Backbone.View.extend({

    tagName: 'ul',

    id: 'todoItems',

    events: {
        'click #add': 'onClickAdd',
        'keypress #newTodoItem': 'onKeyPress'
    },

    initialize: function(options) {
        if (!(options && options.model)) {
            throw new Error('model is not specified');
        }

        this.model.on('add', this.onAddTodoItem, this);
    },

    render: function () {

        this.$el.append('<input type="text" id="newTodoItem" autofocus >' );

        this.$el.append('<button id="add">Add</button>');

        this.model.each(function (todoItem) {
            var view = new TodoItemView({ model: todoItem});
            this.$el.append(view.render().$el);
        }, this);

        return this;
    },

    onClickAdd: function () {
        var $textBox = this.$('#newTodoItem');
        var newDescription = $textBox.val();
        if (newDescription && newDescription.length > 2) {
            var todoItem = new TodoItem({description: newDescription});
            this.model.add(todoItem);
            $textBox.val("");
        }
    },

    onAddTodoItem: function (newTodoItem) {
        var view = new TodoItemView({model: newTodoItem});

        this.$el.append(view.render().$el);
    },

    onKeyPress: function (e) {
        if (e.keyCode === 13) {
            this.onClickAdd();
        }
    }
});
