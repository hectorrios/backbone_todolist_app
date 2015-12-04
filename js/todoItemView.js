/**
 * Created by hrios on 28/11/15.
 */

var TodoItemView = Backbone.View.extend({

    tagName: 'li',

    events: {
        'click [type="checkbox"]': 'itemChecked',
        'click #delete': 'onClickDelete'

    },

    initialize: function (options) {
        if (!(options && options.model)) {
            throw new Error("model is not specified");
        }

        this.model.on('change', this.render, this);
    },

    render: function () {

        this.$el.attr('id', this.model.get('id'));
        this.$el.toggleClass("completed", this.model.get('completed'));

        var source = $('#todoItemTemplate').html();
        var template = Handlebars.compile(source);
        var html = template(this.model.toJSON());
        this.$el.html(html);
        return this;
    },

    itemChecked: function () {
        this.model.toggle();
    },

    onClickDelete: function () {
        this.model.destroy();
    }
});
