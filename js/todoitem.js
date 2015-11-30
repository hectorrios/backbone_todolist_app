/**
 * Created by hrios on 27/11/15.
 */

var TodoItem = Backbone.Model.extend({

    defaults: {
        isChecked: false
    },

    validate: function (attrs) {
        if (!attrs.description) {
            return 'Description is required';
        }
    },

    toggle: function () {
        this.set('isChecked', !this.get('isChecked'));
    }
});
