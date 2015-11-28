/**
 * Created by hrios on 28/11/15.
 */

var TodoItemView = Backbone.View.extend({

    tagName: 'li',

    initialize: function (options) {
        if (!(options && options.model)) {
            throw new Error("model is not specified");
        }
    },

    render: function () {
        this.$el.html(this.model.get('description'));
        return this;
    }
});
