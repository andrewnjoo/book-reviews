Review: Think Python 2e by Allen Downey 📔

Date: 2002

Length: 296

Rating: 5/5

This a review of Think Python 2e by Allen Downey.

This book is divided into 21 chapters and is about 257 pages long

---

1 - Way of the program 🥋

- most important skill for computer scientist is problem solving
- a program is a sequence of instructions that specifies how to perform a computation
- formal languages are designed by people for specific applications
- evidence that shows people respond to computers as if they are people (the media equation, Reeves & Nass 1996)

2 - variables, expressions and statements ⚽

- a variable is a name that refers to a value
- an assignment creates new variables and gives them values e.g. `x = 2`
- an expression is a combination of values, variables and operators e.g. `x + y`
- a statement is a unit of code that the python interpreter can execute e.g. `print('hello world')`

3 - functions ➡️

- the expression in parentheses is called the argument of the function
- a module is a file that contains a collection of related functions
- a function definition specifies the name of a new function and the sequence of statements that execute when the function is called
- to ensure that a function is defined before its first use, you have to know the order statements run in which is called the flow of execution
- a parameter is what is defined in the function, and the argument is what is passed into the function.
- to keep track of which variables can be used, we can draw stack diagrams
  - each function is represented by a frame
  - if an error occurs, a list of functions is printed which is called a traceback
- fruitful 🍇 functions return something; void 🌌 functions don’t

4 - interface design

- turtle 🐢 module
- wrapping a piece of code in a function is called encapsulation 💊
- a docstring 📄 is a string at the beginning of a function that explains the interface like:
  ```python
  def x:
  	"""this function does something"""
  ```

5 - conditionals and recursion 🔁

- floor division operator `//` divides two numbers and rounds down to an integer; an alternative is the modulus operator `%` which divides two numbers and returns the remainder
- 3 logical operators: `and`, `or`, and `not`
- the bottom of a recursive function stack is called the base case as there are no more frames to call

6 - fruitful functions 🍓

- code that’s never reached is called dead code 😵
- to deal with increasingly complex programs, you can try incremental development. This is when you add and test a small amount of code each time.
- Scaffolding 🚧 is when you have code that is helpful for building the program, but not part of the final product
- Following the flow of execution is one way to read a program; the other way is to do the ‘leap of faith’, which is when you assume the function works correctly.

7 - iteration 🔂

- reassignment is when you make an existing variable refer to a new value; equality is a symmetric relationship, and assignment is not

```python
>>> x = 5
>>> x
5
>>> x = 7
>>> x
7
```

- algorithm is a mechanical process for solving a category of problems
- exercise 7.3 - ramanujan’s infinite series

```python
import math

def estimate_pi():
    sum = 0
    epsilon = math.pow(10, -15)
    k = 0
    i = 1  # initialize i, the value doesn't matter
    while i > epsilon:
        i = math.factorial(4 * k) * (1103 + 26390 * k) \
            / (math.pow(math.factorial(k), 4) * math.pow(396, 4 * k))
        sum += i
        k += 1
    inverse = 2 * math.sqrt(2) * sum / 9801
    return 1 / inverse


print (estimate_pi())
print (math.pi)
print (estimate_pi() - math.pi)
```

8 - strings 🧵

- a string is a sequence of characters
- traversal is when you visit and perform computation on each character
- segment of a string is called a slice
- Python 🐍 strings are immutable
- a method call is called an invocation

9 - word play

- if you see that `uses_all` was an instance of a previously solved problem, you are practicing a program development plan called reduction to a previously solved problem.

10 - lists

- list is a sequence of values; you can have nested lists
- lists are mutable
- you can traverse a list with a `for` loop

```python
def add_all(t):
    total = 0
    for x in t:
        total += x
    return total
```

- ^ as the loop runs, `total` accumulates the sum of elements. a variable used like this is sometimes called an accumulator

```python
>>> t = [1, 2, 3]
>>> sum(t)
6
```

- ^ an operation like above combines a sequence of elements into a single value and is sometimes called `reduce`
- an operation like `capitalize_all` is sometimes called a map as it ‘maps’ a function onto each element in a list
- you can use `pop`, `del`, or `remove` to delete elements from a list
- the association of a variable within an object is called a **reference**
- an object with >1 reference has more than one name, and we can say that the object is **aliased**

11 - dictionaries 📚

- a dictionary is like a list but more general. A dictionary represents a mapping from keys to values.
- hashtable explanation on page 251
- given a dictionary d and a key k, we can find a corresponding value v = d[k]; this operation is called a **lookup**
- `raise` statement causes an exception
- singleton is a list that contains a single element
- dictionary is implemented using a hashtable which means keys must be hashable (e.g. lists cannot be keys); keys must be immutable to maintain idempotent lookups
- recursive fibonacci algorithm has a **call graph** that shows repeated computed values
- a previously computed value that’s stored for later use is called a memo

```python
# memoized version of fibonacci

known = {0:0, 1:1}

def fibonacci(n):
    if n in known:
        return known[n]

    res = fibonacci(n-1) + fibonacci(n-2)
    known[n] = res
    return res
```

- variables in `__main__` are sometimes called global as they can be accessed from any function
- It’s common to use global variables as **flags**

12 - tuples 👨‍👨‍👧‍👧

- a tuple is a sequence of values; tuples are immutable

```python
>>> t = 'a', 'b', 'c'
>>> t
('a', 'b', 'c')

```

- to create a tuple with a single element, you have to include a final comma

```python
>>> u = 'a',
>>> u
('a',)
```

- tuple assignment - no need for third variable when swapping the values of two variables

```python
>>> a, b = b, a
```

- `divmod` takes two arguments and returns a tuple of two values: the quotient and remainder

```jsx
>>> t = divmod(7, 3)
>>> t
(2, 1)
```

- a parameter name that begins with `*` gathers arguments into a tuple

```jsx
def printall(*args):
	print(args)
```

- the complement of gather is **scatter** (use `*` operator)

```python
>>> t = (7,3)
>>> divmod(*t) # scatter the tuple
```

- `zip` function takes two or more sequences and returns a list of tuples where each tuple contains 1 element from each sequence
- dictionaries 📚 have a method called `items` that returns a sequence of tuples, where each tuple is a k:v pair
- compound **data structures** are useful but prone to **‘shape errors’**

13 - DS selection

- prefixes - strings, list of strings, tuple of strings
- suffixes - list / histogram (dictionary)
- mapping from prefix to suffix - dictionary

14 - files 📂

- persistence is when some data is kept in permanent storage
- `os` module has functions for working with files and directories e.g. `os.cwd` gets the name of the current directory
- sometimes errors happens when reading/writing files; handling an exception with a `try` statement is called **\*\***\*\*\*\***\*\***catching**\*\***\*\*\*\***\*\*** an exception
- a database is a file that’s organized for storing data; python has a module called **dbm**
- `pickle` module can translate any type of object into a string suitable for storage in a database

15 - classes and objects

- OOP uses programmer-defined types to organize both code and data
- a programmer-defined type is also called a **class**
- a state diagram that shows an object and its attributes is called an **object diagram**
- an object that’s an attribute of another object is **embedded**
- **shallow copy** copies the object and any references it contains, but not embedded objects

16 - classes and functions

- **prototype and patch** is a type of development plan that deals with complex problems by starting with a simple prototype and increasingly deals with complications
- pure functions don’t have side effects
- functions that modifies objects it gets as parameters can be called modifiers
- the author recommends you resort to writing pure functions whenever possible, and use modifiers only if there’s a compelling advantage. this approach is called the **functional programming style**
- an alternative style to prototype and patch is **designed development**, where high-level insight into the problem can make programming easier
- invariants are conditions that should always be true

17 - classes and methods

- a **method** is a function that’s associated with a particular class.
  - there are 2 syntactic differences: 1) they’re defined inside a class definition in order to make the r/s b/w the class and method explicit
  - the syntax for invoking a method is different
- **positional argument** is an argument that doesn’t have a default value

```python
sketch(parrot, cage, dead=True)
```

- ^ `parrot` and `cage` are positional, `dead` is a keyword argument
- `__init__` is a special method that’s invoked when an object is instantiated
- `__str__` is a special method that’s supposed to return a string representation of an object
- 17.7 Changing the behavior of an operator so that it works with programmer-defined types is called **operator overloading**
- 17.8 A **type-based dispatch** dispatches a computation to different methods based on the type of arguments
- 17.9 Functions that work with several types are called **polymorphic**. Polymorphism 🐑 can facilitate code reuse.
- 17.11 a design principle that helps make software more maintainable is to keep the interface separate from implementation

18 - inheritance

- **inheritance** is the ability to define a new class that’s a modified version of an existing class
- a veneer is a thin method that uses another method without doing much work
- when a new class inherits from an existing one, the existing one is called the **parent** and the new class is called the **child**
- pros of inheritance include code reuse; cons of inheritance are that it sometimes makes programs difficult to read
- when objects in one class contain references to objects in another class; this relationship is called **HAS-A**
- when one class might inherit from another; this relationship is called **IS-A**
- these relationships can be shown in a \***\*\*\*\*\*\*\***\*\*\***\*\*\*\*\*\*\***class diagram\***\*\*\*\*\*\*\***\*\*\***\*\*\*\*\*\*\***
- **data encapsulation** (aka data hiding) is the mechanism where implementation details of a class are hidden from a user

19 - the goodies

- conditional expressions

```python
y = math.log(x) if x > 0 else float('nan')
```

- list comprehensions

```python
# without LC
def capitalize_all(t):
	res = []
	for s in t:
		res.append(s.capitalize())
	return res

# with LC
def capitalize_all(t):
	return [s.capitalize() for s in t]
```

- generator expressions are similar to LCs but with parentheses instead of []

```python
>>> g = (x**2 for x in range(5))
```

- knows how to iterate through a sequence of values but waits to be asked to do so
- `any` - takes a sequence of Booleans and returns True if any value is True

```python
>>> any([False, False, True])
True
```

- `all` - returns True if every element of a sequence is True
- a set behaves like a collection of dictionary keys with no values

```python
def has_duplicates(t):
	return len(set(t)) < len(t)
```

- a `Counter` is a natural way to represent a **multiset** (mathematical idea)

```python
from collections import Counter

def is_anagram(w1, w2):
	return Counter(w1) == Counter(w2)
```

- `defaultdict` is like a dictionary but if you’re trying to access a key that doesn’t exist, it will create one on the fly
- a function used to create objects is sometimes called a **factory**

20 - debugging

- infinite recursion can cause a ‘Maximum recursion depth exceeded’ error
- if you’re stuck on a bug, maybe go for a walk

21 - algorithm analysis

- analysis of algorithms is a branch of CS that studies the performance of algorithms, especially their runtime and space requirements
- relative performance might depend on details of the dataset; one way to avoid this is to analyze the worst-case scenario.
- the \***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***leading term\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\*** is the term with the highest exponent
- in general we expect an algorithm with a smaller leading term to be a better algorithm for large problems, but for small problems, there may be a **crossover point**
- an **order of growth** is a set of functions whose growth behavior is considered equivalent.
  - Some examples include O(1) constant, O(log n) (logarithmic for any base), O(n) linear, O(n log n) linearithmic, O(n^2) quadratic, O(n^3) cubic, O(c^n) exponential (for any c)
- in python 🐍 , most arithmetic operations are constant time. Indexing operations are also constant time.
- a for loop that traverses a sequence/dictionary is usually linear
- Python dictionaries are implemented using **hashtables**

---

Conclusion

Overall I liked this book and recommend it to anyone who is interested in the Python programming language. It is written in an easy to read style, and the examples are quite manageable.
