# Roadmap

- [ ] Create a class type for acceptable values. For example, we want to set that we don't set a property to a value that is not in the list of acceptable values
- [ ] Rename the `variable` property to `name` or something to indicate that that will be the name of the node or relationship and not variable that will be passed to the query

```
// TODO: should we add classes for objects and then use them when we instantiate the class for better type checking?
//  Or, should we be able do it but not force it? and by default like Zod?
//  Basically, should we go into the full ORM arena? Handling database connections, transactions, etc?
//  Or should we just provide a simple query builder that can be used to build queries and then execute them?
// TODO: create an error library that we can use to throw errors with custom codes and messages that are Google friendly
// TODO: no duplicated Node names, or return statements and stuff like that
// TODO: match should accept an array
// TODO: you should not be able to reuse a variable name in the same query or before WITH check docs
// TODO: can we maybe add a `public readonly attributes?: Attributes;` in the Element class? so that each element can have its own attributes?
//  this way maybe we don't have to override the constructor in each class as we do now solely for the attributes maybe this way
//  we can also enforce the `factory` method in the Element class. Also for classes that have more than one attribute we can use
//  wrap them in an object and then use the `Exact` type to enforce the attributes - another win with the Exact 😱
// TODO: make all elements, in a way, self contained, so they can be used by consumers if they want to use individual parts without the query builder
//  one step is to detect if the prior element is defined and if not remove any trailing spaces or dashes that will affect the output (see `Return`)
// TODO: add input validation for the attributes, e.g. `labels` should be an array of strings, `properties` should be an object with string keys and string values, etc
```
