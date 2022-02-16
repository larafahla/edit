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