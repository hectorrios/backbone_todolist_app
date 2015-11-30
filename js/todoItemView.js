/**
 * Created by hrios on 28/11/15.
 */

var TodoItemView = Backbone.View.extend({

    tagName: 'li',

    events: {
        'click [type="checkbox"]': 'itemChecked'
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
        this.$el.toggleClass("completed", this.model.get('isChecked'));
        var checkBoxes = undefined;
        if (this.model.get('isChecked')) {
            checkBoxes = '<input type="checkbox" checked>';
            this.$el.html(checkBoxes + this.model.escape('description'));
        } else {
            checkBoxes = '<input type="checkbox">';
            this.$el.html(checkBoxes + this.model.escape('description'));
        }

        return this;
    },

    itemChecked: function () {
        this.model.toggle();
    }
});
