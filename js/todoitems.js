/**
 * Created by hrios on 27/11/15.
 */

var TodoItems = Backbone.Collection.extend({
    model: TodoItem,

    url: 'http://jsonplaceholder.typicode.com/todos'
});