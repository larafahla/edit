# 7. Draw with a component

Generate this HTML using at least one component:

```html
<ul class="items">
    <li>First item</li>
    <li>Second item</li>
</ul>
```
# 8. Component with props

Generate this HTML using at least one component and props, with these items:

```js
const items = {
    '2': {
        class: 'number_two',
        number: 2
    },
    'number_three': {
        class: 'number_three',
        number: 3
    },
    '4': {
        class: 'number_four',
        number: 4
    },
    'number_one': {
        class: 'number_one',
        number: 1
    }
}
```

```html
<div>
    <ul>
        <li class="number_three">3
            <ul>
                <li class="number_three">3</li>
                <li class="number_four">4</li>
            </ul>
        </li>
        <li class="number_four">4
            <ul>
                <li class="number_three">3</li>
                <li class="number_four">4</li>
            </ul>
        </li>
    </ul>
</div>
```
# 9. Component with button click

Generate this HTML using at least one component and change the order of the li with button click:

```html
<ul>
    <li class = 'to_remove'>1</li>
    <li>2</li>
    <button>Click me</button>
</ul>
```