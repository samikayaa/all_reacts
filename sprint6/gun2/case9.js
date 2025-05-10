//İç içe(nested) kullanılmış componentler var. 
//userList array'ini List component'ine prop olarak göndermek için gerekli düzeltmeleri yap. 
//Prop destructuring ile prop'lardan al ve kullan.

/*

App.js

import Container from "./Container.js";

export default function App() {
  const userList = ["Emre", "Hamdi", "Gizem"];
  return <Container />
}

Container.js

import List from "./List.js";
export default function Container() {
  return (<div className="container"><List />
  </div>)
}

List.js

import ListItem from './ListItem.js';

export default function List() {
  return (
    <ul>
      {["EmreTemp", "HamdiTemp", "GizemTemp"].map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
}

ListItem.js

export default function ListItem(props) {
  const {item} = props;
  return <li>{item}</li>;
}

*/



//App.js

import Container from "./Container.js";

export default function App() {
  const userList = ["Emre", "Hamdi", "Gizem"];
  return <Container userList={userList}/>
}

//Container.js

import List from "./List.js";
export default function Container({userList}) {
  return (<div className="container"><List userList={userList}/>
  </div>)
}

//List.js

import ListItem from './ListItem.js';

export default function List(props) {
    const userList = props;
  return (
    <ul>
      {["EmreTemp", "HamdiTemp", "GizemTemp"].map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
}

//ListItem.js

export default function ListItem(props) {
  const {item} = props;
  return <li>{item}</li>;
}
