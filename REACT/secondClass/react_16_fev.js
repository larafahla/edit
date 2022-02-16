const items = [
    'abc',
    'abcc',
    'abcc'
]

const elementToDraw = React.createElement(
    'ul',
    null,
    items.map(item =>
        React.createElement("li", null, item))
)


// outro exemplo - (a usar no html, no exemplo "skeleton.html")


    // <script>

const h1Element = React.createElement('h1', null, 'Hello World')

ReactDOM.render(h1Element, document.getElementById('container'))

    // </scrip>