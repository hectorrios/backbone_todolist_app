/**
 * Created by hrios on 28/11/15.
 */

var TodoItemsView = Backbone.View.extend({

    tagName: 'ul',

    id: 'todoItems',

    initialize: function(options) {
        if (!(options && options.model)) {
            throw new Error('model is not specified');
        }
    },

    render: function () {

        this.model.each(function (todoItem) {
            var view = new TodoItemView({ model: todoItem});
            this.$el.append(view.render().$el);
        }, this);

        return this;
    }
});
