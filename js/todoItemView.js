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
        //var checked = this.model.get('isChecked') ? "checked" : "";
        //var checkBoxes = '<input type="checkbox" ' + checked + ' >';
        this.$el.attr('id', this.model.get('id'));
        this.$el.toggleClass("completed", this.model.get('completed'));
        var checkBoxes = undefined;
        if (this.model.get('completed')) {
            checkBoxes = '<input type="checkbox" checked>';
            this.$el.html(checkBoxes + this.model.escape('title'));
        } else {
            checkBoxes = '<input type="checkbox">';
            this.$el.html(checkBoxes + this.model.escape('title'));
        }

        this.$el.append('<button id="delete">Delete</button>');

        return this;
    },

    itemChecked: function () {
        this.model.toggle();
    },

    onClickDelete: function () {
        this.model.destroy();
    }
});
