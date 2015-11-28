/**
 * Created by hrios on 27/11/15.
 */

var TodoItem = Backbone.Model.extend({
    validate: function (attrs) {
        if (!attrs.description) {
            return 'Description is required';
        }
    }
});
