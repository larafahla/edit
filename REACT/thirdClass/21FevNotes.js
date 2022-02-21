// classes em JS

class Person {
    constructor(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.fullName = firstName + lastName;
    }

    getAge() {
        return this.age;
    }

    getFullName() {
        return this.FullName;
    }
}

const myPerson = new Person('jose', 'silva', 25, 'male');

myPerson.getAge();

class Female extends Person {

    constructor(firstName, lastName, age) {
        super(firstName, lastName, age, 'female')
    }
}

const myFemale = new Female('joana', 'maria', 23)

myFemale.getAge();

// REACT components

const elem = <Welcome name='cenas' />


// ex 1 __________________________________ REACT components

class Welcome extends React.Component {
    render() {
      return <ul> <li>First Item</li> <li>Second Item</li> </ul>;
    }
  }

<ul class="items">
    <li>First item</li>
    <li>Second item</li>
</ul>