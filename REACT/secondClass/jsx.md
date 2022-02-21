# JSX

- This tag syntax is neither a string nor HTML
- It is a syntax extension to JavaScript
- JSX produces React elements

```js
const element = <h1>Hello, world!</h1>;

const element = React.createElement('h1', null, 'Hello, world!');
```

- Using expressions in JSX

```js
const foo = 'world';
const element = <h1>Hello, {foo}</h1>;

ReactDOM.render(
  element,
  document.getElementById('container')
);
```

- We can use functions inside expressions

```js
function formatText(name) {
  return 'Hello, ' + name;
}

const name = 'React';

const element = (
  <h1>
    Hello, {formatText(name)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('container')
);
```

- Using attributes with JSX

```js

const classXPTO = 'blue';
const element = <h1 class={classXPTO}>Hello</h1>;
```

- JSX may contain multiline:

```js
const element = (
  <div>
    <h1>Hello</h1>
    <h2>Hello again</h2>
  </div>
);
```