export default {
  name : 'MyButton',
  data: function() {
    return {
      count : 0
    }
  },

  template: '<button v-on:click="count++"> Click me {{count}}</button>'
}