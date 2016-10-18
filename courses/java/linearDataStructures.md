## Learning objectives
* Define the linear data structure
* Learn the characteristics of the linear data structures
* Learn when to use them, according to your needs


## Linear data structures
* Data structure whose element(objects) are ordered in a way so that:
 * there is only one *first element* and has only one *next element*,
 * there is only one *last element* and has only one *previous element*, while
 * all other elements have a *next* and a *previous* element


## Linear data structures (examples)
* Arrays
* Strings 
* Stack
* Queue
* Lists


## Arrays
* A group of similar objects
* Predefined (static) size
* Can access/modify any element of the array 
* Array examples: <br>
```java
	double[] array = new double[10];
	char[] word = {'h', 'e', 'l', 'l', 'o'};
	int[][] 2darray = new int[3][3];
```


## Introduction to *Strings*
* A group of alphanumeric characters in a common entity called *String*
* All *Strings* in java are created by the *String* class
* You can concatenate *Strings* by using the **+** operator
* *String* objects are **immutable** -- they cannot change their state after construction


## Concatenating *Strings*
```java
String word = "Hello bootcamp!";
word = word + " Winter is coming...";
System.out.println(word);
```
Results to:
```java
Hello bootcamp! Winter is coming...
```


## Bypassing immutability
* Use the *StringBuffer* or *StringBuilder* following *Java* classes for creating, building and concatenating strings
<br><br>
* *StringBuffer*
 * Mutable and synchronized 
 * Multiple threads can access it and modify it without any *side effects* 
 * Slow process. Many *locking* and *unlocking* actions will take place at the cpu
 * Stored in the *heap*


## Bypassing immutability (continued)
* *StringBuilder*
 * Mutable but not synchronized
 * Accessing it and modifying it by more than one threads can have unexpected results! 
 * Much faster than the *StringBuffer* class
 * Stored in the *heap*


## Immutable vs mutable operations - example
```java
/* Simple String example */
String s = "";
int N = 100000;
for(int i=0; i<N; i++) {
    s += String.valueOf(i);
}

/** StringBuilder example */
StringBuilder builder = new StringBuilder();
for(int i=0; i<N; i++) {
    builder.append(i);
}
builder.toString();

/** StringBuffer example */
StringBuffer buff = new StringBuffer();
for(int i=0; i<N; i++) {
    buff.append(i);
}
buff.toString();
```


## Immutable vs mutable operations - comparison
Measuring the separate execution of each solution above resulted to:
 	* 78.5 millisecond using the += operand
 	*  3.7 millisecond using StringBuffer
 	*  1.4 millisecond using StringBuilder


## Creating *Strings*
* Java offers, among others, the following *constructors*
 * *String()*
 * *String(char[] value)*
 * *String(char[] value, int offset, int count)*
 * *String(String original)*
 * *String(StringBuilder builder)*


## *Strings* as arrays
* Class *String* offers, among others, the following methods for acquiring information from a *String* object from its *index*<br>
 * *String substring(int beginIndex)*
 * *String substring(int beginIndex, int endIndex)*
 * *char charAt(int index)*
 * *String concat(String string2)*


## *Strings* as arrays - index 
```java
//our test String phrase
String starks_quote = "Winter is coming...";

//transforming a String to array of chars and printing it
char[] char_array_from_string = starks_quote.toCharArray();
System.out.println(Arrays.toString(char_array_from_string));
//getting the first word of the phrase
String first_word = starks_quote.substring(0, starks_quote.indexOf(' '));
System.out.println(first_word);
//checking if our phrase contains the String "sun"
boolean match = starks_quote.contains("sun");
System.out.println(match);
//getting the last word of the phrase
String last_word = starks_quote.substring(starks_quote.lastIndexOf(' ') + 1, starks_quote.length());
System.out.println(last_word);
```
```java
[W, i, n, t, e, r,  , i, s,  , c, o, m, i, n, g, ., ., .]
Winter
false
coming...
```


## The *Stack* data structure
* *Push-down stack*, in one of the most important *abstract data types* that 
* Offers two functionalities: 
 * add (*push*) and
 * remove(*pop*)  
* Represents a last-in-first-out (lifo) model
* Newer additions have priority in being served!


## *Stack* (continued)
<img src=media/Stack.svg width=800 height=500 /></br>


## The *Queue* data structure
* The *Queue* interface defines a linear collection that supports element insertion and removal at both ends 
* Represents a first-in-first-out (fifo) model
* Older additions will be served first 


## The *Queue* data structure
<img src=media/Queue.svg width=800 height=500 /></br>


## The *List* data structure
* Is an ordered collection (sequence) of objects
* User have complete control of the insertion and removal of an element in the list
* The most common implementation of the List model are the *Linked-list* the and *ArrayList*


## The *Linked-list* data structure
<img src=media/Lists.svg width=800 height=500 /></br>


## The *Linked-list* data structure
<img src=media/Lists2.svg width=800 height=500 /></br>


## The *Linked-list* data structure
<img src=media/Lists3.svg width=800 height=500 /></br>


## CircleList, a linked-list example
```java
class Circle {
	/* Linked-list nodes should have a field of their own
	type showing the next element in the list */
	private Circle next;

	Circle(){ this.next = null; }
	public void setNext (Circle c) { this.next = c; }
	public Circle getNext () { return this.next; }
}

public class CircleList {
	private Circle first_element;
	
	CircleList() { this.first_element = null; }
	
	public void addElement(Circle c) {
		if(this.first_element == null) {
			this.first_element = c; 
		} else {
			Circle current_circle = this.first_element;
			while (current_circle.getNext() != null) {
				current_circle = current_circle.getNext();
			}
			current_circle.setNext(c);
		}
	}

}
```


## *Java Collections Framework*
* A collection framework supports the consistent and coherent representation and handling of *Collections* regardless of their implementation
* It's a set of *interfaces* that depicts the basic functionalities that any *Collection* should offer


## *Java Collections Framework*
* Reduces the development time and cost
* Switch between implementations
* Easier to use (common for all implementations)
* Easier to develop libraries
* Promotes code *re-usability*


## *Java Collections Framework*
<img src=media/javaCollectionFramework.svg width=800 height=500 /></br>


## *Vector* vs other *List* implementations
* Almost equivalent data structures
 * *Vector* is synchronized when
 * *List* is not synchronized
* If run out of space:
 * *Vector* doubles its size, when
 * *List* increases its size by 50%


## The *Stack* java class
* *Stack* implements the *Collection* interface and thus, defines the following methods:
* *boolean Empty()* - returns true if stack is empty
* *E push(E item)* - adds a new object of type *E* at the top of the stack
* *E pop()* - removes and returns the top object from the stack
* *E peek()* - returns the top object from the stack  
* Java implements Stack
```java
public class Stack<E> { ... }
```
* *E* can be replaced by the type of your preferred object 


## The *Queue* java interface
* The *Queue* interface defines a linear collection that supports element insertion and removal at both ends 
* Represents a first-in-first-out (fifo) model
```java
public interface Queue<E> extends Collection<E> { ... }
```
* It extends the *Collection* interface
* *Queues* provide additional insertion, extraction, and inspection operations


## The *Queue* interface (continued)
* It uses two methods for each one of the three aforementioned operations 
 * (insertion) add(e) or offer(e)
 * (extraction) remove() or poll()
 * (inspection) element() or peek()
* The first method of each operation throws an exception upon failure and the second returns a special value


## *Queue* interface "extensions"
* *Dequeue* stands short for the *double ended queue*
 * Allows access to both ends of the queue
* *BlockingQueue* operations that wait for the queue to become non-empty when retrieving an element, and
 * wait for space to become available in the queue when storing an element if there is none


## The *Linked-list* Java class
```java
public class LinkedList<E>
extends AbstractSequentialList<E>
implements List<E>, Deque<E>, Cloneable, Serializable { ... }
```
* Java implements the link-list as a *double-linked*
* Each node hold a reference to its previous and next node
* It can be traversed from both sides
* It's not synchronised! In order to be synchronized it should be wrapped in a synchronised object or by applying the following:
```java
List list = Collections.synchronizedList(new LinkedList(...));
```


## *ArrayList*, a list variation
* The most commonly used implementation of the *List* interface
* Using an Array at the background
* Inherits all characteristics that *Lists* have
* Not synchronised! The same principle as in linked-list should be applied
* Use *ensureCapacity(int minCapacity)* in case of initially adding many elements and you want to avoid the incremental size increase
```java
public class ArrayList<E>
extends AbstractList<E>
implements List<E>, RandomAccess, Cloneable, Serializable { ... }
```


## References
* Algorithms in Java, Part 1-4 (3rd Edition), R. Sedgewick, Princeton University
* Thinking in Java (4th Edition) - Bruce Eckel
* Oracle Certified Professional Java SE 8 Programmer Exam 1Z0-809, A Comprehensive OCPJP 8 Certification Guide - S. G. Ganesh, Hari Kiran, Tushar Sharma
* Programming II, Notes and Exercises, D. Spinellis, Athens University of Economics and Business, course website ([link](http://www.dmst.aueb.gr/dds/isdi/ds/index.htm)) 
* Java Programming - wikibooks ([link](https://en.wikibooks.org/wiki/Java_Programming))
* Java™ Platform, Standard Edition 8 API Specification ([link](https://docs.oracle.com/javase/8/docs/api/))


## Exercise 1 (Arrays)
* Given an array of type int as the following: 
```java
int[] array = {1, 3, 1, 2, 5, 6, 6, 8, 9, 12, 1, 13, 3, 1};
```
* Can you create a for loop that finds the min value and also prints its positions?
* The results should be similar to the following:
```java
Min is 1 in positions: 0, 2, 10, 13
```
* Can you use **only one** *for* loop for solving the exercise?


## Exercise 2 (Strings and Arrays)
Create a class *CaesarsCipher* with two methods:
* *String cipher(String message)* - shifts all characters of a string by a predefined number
* *String decipher(String cipher_text)* - shifts all characters of the String created by the *cipher* method by the predefined number (to the opposite direction of *cipher*)
* The number of shifts should be an attribute of class *CaesarsCipher* with the necessary *set* method
* Create a *TestCaesar* class and test the functionality of your *CaesarsCipher* class


## Exercise 3 (Collections)
* The goal of this Exercise is to modify the code of our *Library* project, so that more Authors and Books can be added dynamically during runtime! 
* Also, to provide additional functionality to the already existing functionalities of the *Library* project, by using dynamically allocated data structures
* Use the following code(next slide) to build the skeleton for Exercise 3 of the **Creating classes** bootcamp session. You can work on your own code if you prefer! Each class should be moved in each own *.java* file


## Exercise 3 (Collections)
You can find the code base in the following ([link](https://drive.google.com/open?id=0B9pJuOee0VNcSFl2OV9oN004RTA))


## Exercise 3
* **AuthorList**
* On your Library project add a class *AuthorList* that represents a *List* data structure that stores *Author* objects. 
* A field of *AuthorList* type should be included in your *Library* class also. Library is now responsible for accessing and modifying the author list. 
* The *List* can be implemented internally by using the *ArrayList* data structure that is provided by the Java Collections Framework and using it like the following: 
```java
ArrayList<Author> authors;
```


## Exercise 3 (continued)
* **AuthorList** should implement methods that provide at least the following functionality: 
 * getter and setters,
 * a Constructor that can fill the List with an Array of Authors,
 * add an author,
 * remove an author,
 * find an author,
 * print the number of authors,
 * search if author exists,
 * any other method of your preference!


## Exercise 3 (continued)
* **BookList** 
* Create a class *BookList* that represents a *List* data structure that stores *Book* objects
* BookList should be implemented as a **custom** *Linked-list* type of *List*. Do not use the *linked-list* class that java offers.
* All functionalities related to books that were performed by the *Library* should now delegated to the *BookList*. Modify the code of your *Library* accordingly 


## Exercise 3 (continued)
* **BookList** should have only one field. An object of type Book that represents the first element of the linked-list.
* Along with the requirements regarding the *BookList* class that were mentioned in the previous slide, also provide your class with the following functionalities:
 * A Constructor that can fill the list from an Array of Book objects, just like in *AuthorList* 


## Exercise 3 (continued)
* On Exercise 3 (from the Creating Classes session) modify all necessary methods that are searching for *Authors* or *Books* so that they can find matches even if the given search_words are in lowercase format.
* Make use of the *to Lowercase()* method of the *String* class


## Exercise 3 (continued)
* Create a class named *Transaction* that stores information related to the renting and returning a book operations.
* Your class should have keep the following information
 * The book for which the transaction is being performed 
 * The date of requesting the current transaction
 * The date of serving of the current transaction
 * The user_id of the library member requesting or return the book
 * A global counter that keeps the counter
 * A unique identifier that takes the current count value 


## Exercise 3 (continued)
* **Transaction**
* It should provide an overloaded Constructor and a setServedDate() method that updates the relevant field


## Exercise 3 (continued)
* Create two more classes that extend the above class with names *BookRental* and *BookReturn*
 * *BookRental* should print (overwrite the toString() method) the Transactions' starting with "Book rental"
 * *BookReturn* should print (overwrite the toString() method)the Transactions' starting with "Book return"


## Exercise 3 (continued)
* Create a *TransactionQueue* class that serves as a data structure for storing *Transactions* that have been validated but not yet executed. The *TransactionQueue* should be implemented by a data-structure of your preference (array, ArrayList, Linked-list) but should provide only the methods of a Queue.   
* A *TransactionQueue* field should be introduced in your *Library* class 
 * When a returnBook() or rentBook() operation is successful in your system you should create a *Transaction* (*BookRental* or *BookReturn* according to the current operation) and add it to the Queue


## Exercise 3 (continued)
* Create a *TransactionHistory* class that represents a list data structure. This list should store all executed *Transactions* in your system
* A field of type *TransactionHistory* should be introduced in your *Library* class
* Create a method *executePendingTransactions()* in your *Library* class. When this method is called by the *Librarian* it should virtually (no actual effect) execute each one of the stored pending transactions in the *TransactionQueue* of the Library.
* Every executed *Transaction* should be moved in the *TransactionHistory* list of the *Library* class. 


## Exercise 3 (continued)
* Create a *TestLibrary* class and a main method in the class. In the main method execute the following code:
```java
	/** Create Random authors */
	Author ruth = new Author("Ruth");
	Author diane = new Author("Diane");
	Author jacqueline = new Author("Jacqueline");
	Author rachel = new Author("Rachel");
	Author joan = new Author("Joan");
	Author theresa = new Author("Theresa");
	Author angela = new Author("Angela");
	Author helen = new Author("Helen");
	Author lisa = new Author("Lisa");
	Author[] authorsarray = {ruth, diane, jacqueline, rachel, joan, theresa, 
			angela, helen, lisa};
	AuthorList authors = new AuthorList(authorsarray);
	/** Create Random books from the above authors */
	Book book1 = new Book("Book1",ruth,"368777540-2",10,2,20);
	Book book2 = new Book("Book2",diane,"963099898-2",10,1,22);
	Book book3 = new Book("Book3",jacqueline,"005382097-2",10,0,23);
	Book book4 = new Book("Book4",rachel,"538310208-2",10,3,24);
	Book book5 = new Book("Book5",joan,"562448132-2",10,4,26);
	Book book6 = new Book("Book6",theresa,"670364563-2",10,2,21);
	Book book7 = new Book("Book7",angela,"466916869-2",10,5,17);
	Book book8 = new Book("Book8",helen,"764674973-2",10,0,15);
	Book book9 = new Book("Book9",lisa,"052469721-2",10,6,17);
	Book book10 = new Book("Book10",ruth,"609291817-2",10,3,13);
	Book book11 = new Book("Book11",diane,"451378028-2",10,8,12);
	Book book12 = new Book("Book12",jacqueline,"142352773-2",10,6,20);
	Book book13 = new Book("Book13",rachel,"115135166-2",10,0,20);
	Book book14 = new Book("Book14",joan,"631942468-2",10,3,20);
	Book book15 = new Book("Book15",theresa,"323662444-2",10,0,23);
	Book book16 = new Book("Book16",angela,"121360492-2",10,0,12);
	Book book17 = new Book("Book17",helen,"391199302-2",10,0,20);
	Book book18 = new Book("Book18",ruth,"549307784-2",10,1,20);
	Book book19 = new Book("Book19",ruth,"368777230-2",10,23,20);
	Book book20 = new Book("Book20",ruth,"793027213-2",10,0,20);
	/** Add the books to a Book array*/
	Book[] books = {book1,book2,book3,book4,book5,book6,book7,
			book8,book9,book10,book11,book12,book13,book14,book15,
			book16,book17,book18,book19,book20};
	BookList booklist = new BookList(books);
	/** Assign the book collection to the library */
	Library library = new Library(booklist, authors);
	/** Librarian the_guy_who _knows_a_lot undertakes the operation of the library */
	Librarian the_guy = new Librarian(library);

	/* Testing if the initialization of Library works correctly! */
	the_guy.findMeAvailableBooks();
	the_guy.findMeBook("Book3");
	the_guy.findMeBooksFromAuthor("Ruth");

	/* Search an author and return his instance if exists */
	String author_name_to_find = "Ruth";
	Author author = the_guy.getAuthor("Ruth");
	if(author != null) System.out.println("I found author " + author.getName());
	else System.out.println("Author " + author_name_to_find + " not found in the list.");
	/* Add a new book to the library's booklist */
	the_guy.addNewBookToLibrary("New Book!", author, "11111111-66", 5,5,0);
	/* Test if the new book is available */
	the_guy.findMeBooksFromAuthor("Ruth");
	/* Testing renting, returning and transaction printing */
	the_guy.findMeBook("New Book!");
	the_guy.rentBook("New Book!", "antonis");
	the_guy.findMeBook("New Book!");
	the_guy.findMeBook("Book3");
	the_guy.returnBook("Book3", "alice");
	the_guy.printPendingTransactions();
```


## Exercise 3 (finale!) 
* Further extend the functionality of your system by adding the *User* and the *UserList* entities. 
* A *User* is a person registered to the *Library*
* The *UserList* is a list that holds all registered *Users*
* Introduce all necessary fields and methods in class
* The type of the data structure that should be used for the *UserList* is a linked-list


## Exercise 3 (grand-finale!)
* Create a User-Interface (or extend your old one) to include all newly added functionalities! 


## Exercise 4 
* Create a Java program that checks if a given word is a *palindrome*. Palindrome words are the words that can be read backwards. (example: madam) 