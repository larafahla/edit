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