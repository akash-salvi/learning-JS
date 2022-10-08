class Foo extends Function {
    constructor(val) {
      super();
      this.prototype.val = val;
    }
  }
  
  new new Foo(":D")().val; // -> ':D'

  /**
   * Constructors in JavaScript are just functions with some special treatment. 
   * By extending Function using the class syntax you create a class that, when instantiated, is now a function, 
   * which you can then additionally instantiate.
   */