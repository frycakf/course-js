// Static methods examples
Array.from(document.querySelectorAll('h1'));
Number.parseFloat('12');

// = it's attached to the constructor, not the prototypes

// How to declare
class PersonCl {

  static hey() {
    console.log('Hey there 🖐');
  }
}

PersonCl.hey();