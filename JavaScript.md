# JavaScript

## Declaring Variables

```JavaScript
    var y = "Java";
    const x = "Script";
    let z = "Notes";
```

## Arrays

### Declaring arrays

```JavaScript
    var arr_1 = ["Johns",1];
```

Arrays has push and pop function as well
For in the above example

```JavaScript
arr_1.push("Smith");
```

This will add "Smith" to the end of the array

```JavaScript
var Last_element = arr_1.pop();
```

This will remove the last element in the array
Pop function returns the removed element to the last_element variable

```JavaScript
var First_element = arr_1.shift();
```

This will remove the first element of the array arr_1 and returns it to the First_element variable

```JavaScript
arr_1.unshift("happy");
```

.unshift function adds the variable given as the parameter to the starting of the array as another element.

## Functions in JavaScript

example of a normal funciton

```JavaScript
function console_debug(){
    console.log("Inside the console_debug");
}
function console_debug_parameterised(a,b){
    console.log(a-b);
}
```

## JS Objects

var obj = {
"name :
}

## Miscellenious

- console.log("Hello_world") -> is used to debug on runtime as it sends this message to the browser

- ```JavaScript
  var output = "";
  output +="hello";
  var a=15;
  output +=a;
  //This prints hello15
  ```

- Scope of variables , return keywords etc i.e the basics of oops apply here.
