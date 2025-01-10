---
title: 'Understanding Generics in Go'
date: '2025-01-10'
excerpt: 'Generics in Go (introduced in version 1.18) allow us to write more reusable and type-safe code by abstracting over types.'
image: 'https://raw.githubusercontent.com/farrelnajib/new-portfolio/refs/heads/main/public/asset/images/go-banner.jpg'
---

Generics in Go (introduced in version 1.18) allow us to write more reusable and type-safe code by abstracting over types. In this blog, we'll explore how to use generics in Go with practical examples.

## Why Generics?
Before generics, Go developers often used `interface{}` to write functions or data structures that could handle multiple types. However, this came with type-safety issues and runtime overhead.

Generics solve this by allowing type parameters, which make it possible to write code that works for any type while still maintaining type safety.

## Syntax Overview

The basic syntax for generics involves defining a type parameter in square brackets `[]`. I will show you an example of function that I use a lot.

```go
func ToPointer[T any](value T) *T {
    return &value
}
```

- `T` is a type parameter.
- `any` is a constraint, meaning "any type", equivalent to `interface{}`.


## A Practical Example: Generic Functions

Let's start with a simple example of a function to find the maximum value in a slice.

```go
package main

import "fmt"

// Max returns the maximum value in a slice.
func Max[T int | float64](slice []T) T {
    max := slice[0]
    for _, v := range slice {
        if v > max {
            max = v
        }
    }
    return max
}

func main() {
    nums := []int{1, 2, 3, 4, 5}
    fmt.Println("Max (int):", Max(nums))

    floats := []float64{1.1, 2.2, 3.3}
    fmt.Println("Max (float):", Max(floats))
}

```

In this example:
- `T` can be either `int` or `float64` because of the constraint `T int | float64`.
- The `Max` function works for both integers and floating-point numbers.


## Using Generics with Structs
Generics can also be used with structs. Here's how to create a generic stack:

```go
package main

import "fmt"

// Stack is a generic stack implementation.
type Stack[T any] struct {
    items []T
}

func (s *Stack[T]) Push(item T) {
    s.items = append(s.items, item)
}

func (s *Stack[T]) Pop() T {
    if len(s.items) == 0 {
        panic("stack is empty")
    }
    item := s.items[len(s.items)-1]
    s.items = s.items[:len(s.items)-1]
    return item
}

func main() {
    intStack := Stack[int]{}
    intStack.Push(10)
    intStack.Push(20)
    fmt.Println("Popped from intStack:", intStack.Pop())

    stringStack := Stack[string]{}
    stringStack.Push("hello")
    stringStack.Push("world")
    fmt.Println("Popped from stringStack:", stringStack.Pop())
}
```

Here:
- The `Stack` struct is generic, allowing it to store any type.
- The `Push` and `Pop` methods operate on the type `T`.


## Constraints in Generics
Constraints allow you to specify the requirements a type must satisfy. For example, you can require a type to implement an interface:

```go
type Adder interface {
    Add() int
}

func Sum[T Adder](a, b T) int {
    return a.Add() + b.Add()
}
```

Go also provides several built-in constraints, such as `comparable` (for types that support `==` and `!=)` and `any`.


## When to Use Generics

Generics are powerful, but they should be used judiciously. Use them when:
- You need reusable algorithms or data structures.
- You want to enforce type safety without sacrificing flexibility.
Avoid overusing generics for simple cases where type-specific code is more readable.


## Final Thoughts
Generics in Go open up a world of possibilities for writing flexible and type-safe code. While it may take some time to get used to the syntax and concepts, the benefits are worth the effort.