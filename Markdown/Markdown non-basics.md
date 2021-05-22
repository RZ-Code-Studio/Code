# Markdown

Before you read this article if you hadn't read my basics tutorial plaese read it [here.](file:///C:/Users/Rick/Documents/Markdown%20files/Markdown%20basics.md)

## Markdown intermediate tutorial

### Basics Review

In the last tutorial you had these table right?

Code | Output
---- | ------
`**Hi!**` | **Hi!**
`*Hi*` | *Hi!*
`Hi!` | Hi!
`~~HTML~~` | ~~HTML~~
`[Google](https://www.google.com)` | [Google](https://www.google.com)
`[Google](https://www.google.com "Google's Homepage")` | [Google](https://www.google.com "Google's Homepage")
`![Cat](https://www.kasandbox.org/programming-images/animals/cat.png)` | ![Cat](https://www.kasandbox.org/programming-images/animals/cat.png)
`![Cat](https://www.kasandbox.org/programming-images/animals/cat.png "Cat")` | ![Cat](https://www.kasandbox.org/programming-images/animals/cat.png "Cat")

Command | Alias
------- | -----
`**Hi!**` | `__Hi!__`
`*Hi*` | `_Hi!_`
`* One` | `- One`
`- One` | `+ One`

These are all of the simple commands.

### ID's

In **markdown** it seems like ID's aren't allowed right?

Well in **Markdown Viewer** makes the ID for each heading the text it contains.

In other **markdown** processors they allow you to make custome ID's

In HTML that would be

```html
    <h1 id="Markdown!">Markdown!</h1>
```

In **Markdown Viewer** it would be

```markdown
    # Markdown!
```

In some other **markdown** processors you need to do this

```markdown
    # Markdown! {#Markdown!}
```

### Internal Links

If you want a table of Contents then you should use an Internal Link

If that was in HTML it would be like

```html
    <h1 id="markdown"><del>HTML</del> Markdown!</h1>
    <a href="#markdown">Thing<a>
```

In **Markdown Viewer** it would be

```markdown
    # Markdown!
    [Thing](#Markdown!)
```

In other **markdown** processors you need to do this

```markdown
    # Markdown! {#Markdown!}
    [Thing](#Markdown!)
```

### Other ways to make tables

Tables.

In **markdown** it can be tricky because there is lots of ways to make tables.

Say if you want a more organized way of making a table.

You would need to do this

```markdown
    | 0 | 1 |
    | - | - |
    | 0 | 0 |
    | 0 | 1 |
    | 1 | 0 |
    | 1 | 1 |
```

### Inline Code Blocks

You might had noticed someting like this already `#`'s

That is a **inline code block**.

It always stays inline but the thing inside does not interfere and is displayed differently.

You do it with two of these ` (tildes or backticks).

Inside those two you can write any code and will not interfere.

If you want to to display tildes in there you could do two tildes and in there write the code with the tildes then code the outer one with two tildes

## Non-inline code blocks

You have seen thing like

```html
    <h1>Hi!</h1>
```

Already right?

That is a **Non-inline code block** it will not be displayed on the same line.

You just start it with three tildes and press enter then do for spaces or a tab then after that write you code then close it with three tildes

But that one lacks highlighting to highlight a non-inline code block for a language before you press enter write the language it will be highlighted with.

### Review

Code | Output
---- | ------
`**Hi!**` | **Hi!**
`*Hi*` | *Hi!*
`Hi!` | Hi!
`~~HTML~~` | ~~HTML~~
`[Google](https://www.google.com)` | [Google](https://www.google.com)
`[Google](https://www.google.com "Google's Homepage")` | [Google](https://www.google.com "Google's Homepage")
`![Cat](https://www.kasandbox.org/programming-images/animals/cat.png)` | ![Cat](https://www.kasandbox.org/programming-images/animals/cat.png)
`![Cat](https://www.kasandbox.org/programming-images/animals/cat.png "Cat")` | ![Cat](https://www.kasandbox.org/programming-images/animals/cat.png "Cat")
`[Page Top](#Markdown)` | [Page Top](#Markdown)


Command | Alias
------- | -----
`**Hi!**` | `__Hi!__`
`*Hi*` | `_Hi!_`
`* One` | `- One`
`- One` | `+ One`
`[Page Top](#Markdown)` | `[Page Top](file:///C:/Users/Rick/Documents/Markdown%20files/Markdown%20non-basics#Markdown)`