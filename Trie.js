//input: string
//o: class with two methods
//c: no contraints
//e: no edge cases

// create a class, a node. each node is going to take an individual char. Node will have a value property and a children preperty
// this class will have two methods: set(word) - add a string to the trie if its not already there/ no return value
                                    //contains(word) - will check to see if the passed in string is already in the tree/ returns a bool

class Trie = (value) => {

  constructor() => {
    const value = null;
    const children = [];

  }


  set(word) {

    const lastIndex = word.length - 1;


    const innerFunction = (index) =>{

      if (word[index] = lastIndex) {
        return;
      }

      if (char = this.value) {
        innerFunction(word[index + 1])
      } else {
        new Trie(word[index])
          Trie.set(word[index])
      }
    }
    innerFunction(0)
  }

  contains(word) {
    const lastIndex = word.length - 1;

    innerFunction = (index) => {

      if (word[index] = lastIndex) {
        return true;
      } else {
        contains(word[index + 1])
      }
    }


    innerFunction(0)
  }
}


//set up initial values
//set up children array

//set func
  // will take in the string
    //iteration (recursion)
    //it will check the value of each node and compare it to the current char that its at
      //if that char matches the current value you move on to the next child node, and call the function recursively on it to check that nodes value
      //if the current char does not match, its going to create node with that current value of the string
        //then call function recursively on that node


//contains
  //will take the imput string
    //iterate over the input string
      //check the topmost node value and compare it to the current char
        //if the value = to the current char, you iterate with the function over that nodes children
          //if you get to end, return true
        //if value does not = current index of string
          // return false





