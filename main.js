var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    name: {
      first: 'jane',
      last: 'Doe',
      show: true

    },
    fruits: [
      {name:'Apple', amount: 2},
      {name: 'Pear', amount: 10},
      {name: 'Banana', amount: 10}
    ]
  }
})

setTimeout(() => app.fruits.push({name: 'fart fruit', amount: 1}), 1000);
