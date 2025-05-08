//Aşağıdaki kodu props destructuring kullanarak yeniden yaz.

const UserCard = (props) => {
    const {name, age} = props;
return (<div>
           <h2>{name}</h2>
           <p>{age} yaşında</p>
        </div>);
};

export default UserCard;