import {RegularList} from '../components/RegularList'

function App() {
	const people = [{
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games'],
  }, {
    name: 'Brenda Smith',
    age: 33,
    hairColor: 'black',
    hobbies: ['golf', 'mathematics'],
  }, {
    name: 'Jane Garcia',
    age: 27,
    hairColor: 'blonde',
    hobbies: ['biology', 'medicine', 'gymnastics'],
  }];

  const SmallPersonListItem = ({ person }) => {
    const { name, age } = person;

    return (
      <p>Name: {name}, Age: {age} years</p>
    );
  }

  return (
    <>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
    </>
	);
}

export default App;