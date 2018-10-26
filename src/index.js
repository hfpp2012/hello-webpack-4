import '@babel/polyfill'
Object.assign({})

Array.from([1,2,3])

new Promise(resolve => console.log('promise'))

function* geneFn() {
  yield 1
}

let g = geneFn()
g.next()

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}

getPosts().then(posts => console.log(posts))
