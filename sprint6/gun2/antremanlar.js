
//hello world 07/05/2025

const MyComponent = (props) => {
    const {name, age} = props;
    return (<p>{name} is {age} years old.</>)
}



// caseX
// kimden import kimden export ediyorum?

//utils.js 'im var
export default function getUser() {
    return {name: "Sami", age: 30};
}


// index.js 'im var
import getUser from '/utils.js'

console.log(getUser());



  