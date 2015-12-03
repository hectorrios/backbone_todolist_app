/**
 * Created by hrios on 27/11/15.
 */

var TodoItem = Backbone.Model.extend({

    urlRoot: 'http://jsonplaceholder.typicode.com/todos',

    defaults: {
        completed: false
    },

    validate: function (attrs) {
        if (!attrs.title) {
            return 'Title is required';
        }
    },

    toggle: function () {
        this.set('completed', !this.get('completed'));
        this.save();
    }
});
