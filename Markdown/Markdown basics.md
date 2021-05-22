# Markdown

## What is markdown?

**Markdown** almost is a simpler way to write HTML

Like HTML **markdown** is used to display data

## Why markdown?

Markdown is much more simpler then HTML and much easier to remember.

## How do you run a markdown file?

If you want to run a markdown file in your browser you would need a extension called **Markdown Viewer** , you also need to change the settings to allow it to view your offline files.

Each time you save your **markdown** don't froget to refresh the browser window.

In Visual Studio you have a **markdown** button to run it.

In Visual Studio Code you have a button to run a preview one that updates in realtime.

## Markdown basics

Now you had heard what is **markdown** let's get learning

### Text formatting

Lots of websites contains text like *this* or **this** or ~~this~~

So in HTML that would be

```html
   <strong>Hi!</strong>
   <em>Hi!</em>
   <del>Hi!</del>
```

But in **markdown** it would be

```markdown
    **Hi!**
    *Hi!*
    ~~this~~
```

### Paragraphs

In HTML it to make some paragraph text we ues the p tag like

```html
    <p>Hi!</p>
```

But in **markdown** it would be

```markdown
    Hi!
```

### Headings

Usually you would use the h1 tag in HTML as the top level heading like

```html
    <h1>Markdown</h1>
```

Well in **markdown** it would be

```markdown
    # Markdown
```
If you want a the second level heading then you would use th h2 tag like

```html
    <h2>Info</h2>
```

In **markdown** it would be

```markdown
    ## Info
```

In HTML you just increase the number behind the h to get lower level headings.

In **markdown** just increase the number of `#`'s

### Tables

To create a table in HTML you would create a table with a table tag like

```html
    <table>
        <thead>
            <tr>
                <th>0</th>
                <th>1</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>0, 0</td>
                <td>0, 1</td>
            </tr>
            <tr>
                <td>1, 0</td>
                <td>1, 1</td>
            </tr>
        </tbody>
    </table>
```

While in **markdown** you would do

```markdown
    10 | 20
    -- | --
    10 | 10
    20 | 20
    20 | 10
    10 | 20
```

And looks like

10 | 20
-- | --
10 | 10
20 | 20
20 | 10
10 | 20

### Un-ordered Lists

In HTML you would make an unordered list like

```html
    <ul>
        <li>Item One</li>
        <li>Item Two</li>
    </ul>
```

In **markdown** you would do

```markdown
    * Item One
    * Item Two
```

### Ordered Lists

In HTML to create a ordered list you would do

```html
    <ul>
        <li>Item One</li>
        <li>Item Two</li>
    </ul>
```

In **markdown** you would do

```markdown
    1. Item One
    1. Item Two
```

In **markdown** you would need to add a number then a dot to create a ordered list (It doesn't matter if the number is the same, as long as it starts with a number)

### Nested Lists

In HTML you nest lists somewhat like

```html
    <ul>
        <li>Item One</li>
        <ul>
            <li>Item Two</li>
        </ul>
    </ul>
```

If that was translated to **markdown** it would be

```markdown
    * Item One
        * Item Two
```

Let's review every thing up to this point with a table without the lists, headings, tables

Code | Output
---- | ------
`**Markdown**` | **Markdown**
`*Markdown*` | *Markdown*
`Markdown` | Markdown
`~~HTML~~` | ~~HTML~~

And a alias table

Command | Alias
------- | -----
`**Markdown**` | `__Markdown__`
`*Markdown*` | `_Markdown_`
`* One` | `- One`
`- One` | `+ One`

### Inline Links Without Titles

In HTML you would do this

```html
    <a href="https://www.google.com">Google</a>
```

In **markdown** that would be

```markdown
    [Google](https://www.google.com)
```

### Inline Links With titles

In HTML that would be

```html
    <a href="https://www.google.com" title="Google's Homepage">Google</a>
```

While in **markdown** that will be

```markdown
    [Google](https://www.google.com "Google's Homepage")
```

### Refrence Links

In HTML that would be

```html
    <a href="https://www.google.com">Google</a>
```

If that got translated to markdown it would be

```markdown
    [Google][link address]

    [link address]: https://google.com
```

### Inline Images without alt text appear when you hover over it

In HTML it would be

```html
    <img src="https://www.kasandbox.org/programming-images/animals/cat.png" alt="Cat">
```

If that was in markdown it would be

```markdown
    ![Cat](https://www.kasandbox.org/programming-images/animals/cat.png)
```

### Inline Images with alt text appear when you hover over it

In HTML it would be

```html
    <img src="https://www.kasandbox.org/programming-images/animals/cat.png" alt="Cat" title="Cat">
```

In markdown it would be

```markdown
    ![Cat](https://www.kasandbox.org/programming-images/animals/cat.png "Cat")
```

### Refrence Images

In html it is 

```html
    <img src="https://www.kasandbox.org/programming-images/animals/cat.png">
```

In **markdown**

```markdown
    ![Cat][Cat]
    [Cat]: https://www.kasandbox.org/programming-images/animals/cat.png
```

And a review table

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

And of course an alias table

Command | Alias
------- | -----
`**Hi!**` | `__Hi!__`
`*Hi*` | `_Hi!_`
`* One` | `- One`
`- One` | `+ One`
