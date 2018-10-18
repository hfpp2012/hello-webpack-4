const greet = () => {
  console.log('rails365');
}

greet();

class Test {
  constructor(name) {
    this.name = name;
  }

  logger () {
    console.log("Hello", this.name);
  }
}

@annotation
class MyClass { }

function annotation(target) {
   target.annotated = true;
}
