# React components

- Components allow us to reuse the same DOM structure for different recipes or different sets of data.
- Opportunity to break down your elements into reusable pieces
- The simplest way to define a component is to write a JavaScript function

```js
function Welcome(props) {
  React.createElement('h1', null, `Hello, ${props.h1Text}`);
}
```

```js
function Welcome(props) {
  return <h1>Hello {props.h1Text}</h1>
}
```

- This function is a valid React component because it accepts a single props object argument with data and returns a React element. We call such components `function components` because they are JavaScript functions.
- We can also use an ES6 class to define a component

```js
class Welcome extends React.Component 
  render() {
    return React.createElement('h1', null, `Hello, ${this.props.name}`);
  }
}
```

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello {this.props.h1Text}</h1>
  }
}
```

- Rendering a Component:

```js
const elem = <Welcome name='Fellows'/>
```

`Create components extending React Components`:

```js
  const items2 = ["Food 1", "Food 2"];

  class ItemsList extends React.Component {

    constructor(props) {
      super();

      this.state = {
        name: props.name,
        list: props.list
      }
    }

    onClickCenas() {
      this.setState({name: 'new_cenas'})
    }

    renderListItem(foo, index) {
      return <li key={index}>{foo}</li>
    }

    render() {
        const li = this.props.list.map((str, i ) => {
          return this.renderListItem(str, i);
        });

        const ul = <ul className="ingredients">{li}</ul>

        const div = <div>{ul}</div>

        return div;
    }
  }


  const list = <ItemsList list={items2}/>

ReactDOM.render(list, document.getElementById('container'));
```

<div>
  <ul class="ingredients">
    <li>Food 1</li>
    <li>Food 2</li>
  </ul>
</div>

- If the props will not change we should use the property directly in the view
- If the props will change we should assign to the state of the component
- To manipulate state we should use `this.setState({});``

```js
this.state = {
  name: props.name
}

this.setState({name: 'new_name'});
```

- The props should be assigned on the constructor of the class

```js
class List extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }
  }

  render() {
    return <h1>{this.props.name}</h1>
  }
}
```

# Component lifecycles

- `componentDidMount()` method runs after the component output has been rendered to the DOM
- `componentWillUnmount()` is invoked immediately before a component is unmounted and destroyed
- `shouldComponentUpdate(nextProps, nextState)` to let React know if a component’s output is not affected by the current change in state or props
- `componentDidUpdate(prevProps, prevState, snapshot)` componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
- `getDerivedStateFromProps(props, state)` getDerivedStateFromProps is invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.

```js
componentDidUpdate(prevProps, nextProps) {

  if (this.state.userID !== prevProps.userID) {
    const promise = this.fetchData(this.props.userID);
  }
}
```

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

```js

class ItemsList extends React.Component {
stuff() {
  return <h2>Hello again</h2>;
}
asdfa() {

}

foo() {

}

render() {
  return (
    <div>
      <h1>Hello {this.props.name}</h1>
      {this.stuff()}
      {this.foo()}
    </div>
  );
  }
}
```

- Rendering lists

```js
function ItemList(props) {
  const listItems = props.list.map((item) =>
    <li>{item}</li>
  );
  return (
    <button onClick={props.click}>Carrega se tens coragem</button>
    <ul>{listItems}</ul>
  );
}

function logXPTO(coisa) {
  console.log(coisa);
}

const listParaCorrer = [1, 2, 3, 4, 5];
const listParaCorrer2 = ['hello', 'world'];
ReactDOM.render(
  <ItemList list={listParaCorrer} click={logXPTO}></ItemList>,
  document.getElementById('root')
);

ReactDOM.render(
  <ItemList list={listParaCorrer2}></ItemList>,
  document.getElementById('root2')
);
```

<h1 class="blue">Hello</h1>
<ItemList list=[1,2,3]></ItemList>

# React Hooks

- Use state and other React features without writing a class
- Since React v16.8
- Hooks are functions that let you 'hook into' React state and lifecycle features from functional components
- useState is a Hook used to add some local state to it and preserve this state between renders

```js
function WithMultipleStateVariables() {
  const [counter, setCounter] = useState(0);
  const [str, setStr] = useState('a string');
  const [obj, setObj] = useState([{ workshop: 'React Foundations' }]);
  // ...
}
```

- useEffect adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount

```js
useEffect(() => {
  //do some stuff
});
```

- Only use hooks from React function components
- Only use hooks at the top level. Don’t call hooks inside loops, conditions, or nested functions

```js
export default function App() {
  const [name, setName] = useState("Name test");

  useEffect(() => {
    console.log("name " + name);
  });

  return (
    <div>
      <p>The name is: {name}</p>
      <button onClick={() => setName("New Name")}>Click me</button>
    </div>
  );
}
```