/**
 * Created by hrios on 28/11/15.
 */

var TodoItemsView = Backbone.View.extend({

    id: 'todoItemsContainer',

    events: {
        'keypress #newTodoItem': 'onKeyPress'
    },

    initialize: function(options) {
        if (!(options && options.model)) {
            throw new Error('model is not specified');
        }

        this.model.on('add', this.onAddTodoItem, this);
        this.model.on('remove', this.onRemoveTodoItem, this);
    },

    render: function () {

        var source = $('#todoItemsTemplate').html();
        var template = Handlebars.compile(source);
        var html = template();
        this.$el.html(html);

        //this.model.each(function (todoItem) {
        //    var view = new TodoItemView({ model: todoItem});
        //    this.$el.append(view.render().$el);
        //}, this);

        return this;
    },

    onClickAdd: function () {
        var $textBox = this.$('#newTodoItem');
        var newDescription = $textBox.val();
        if (newDescription && newDescription.length > 2) {
            var todoItem = new TodoItem({title: newDescription});
            this.model.create(todoItem);
            $textBox.val("");
        }
    },

    onAddTodoItem: function (newTodoItem) {
        var view = new TodoItemView({model: newTodoItem});
        this.$('#todoItems').append(view.render().$el);
    },

    onKeyPress: function (e) {
        if (e.keyCode === 13) {
            this.onClickAdd();
        }
    },

    onRemoveTodoItem: function (model) {
        this.$('li#' + model.get('id')).remove();
    }
});
