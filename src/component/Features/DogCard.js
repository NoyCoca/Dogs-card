function DogCard(props) {
    const {name, breed, age} = props;
    return (<div style= {{border: age > 4 ? "solid 2px green" : "solid 2px yellow"  }}> 
        <h1> Dog name: {name} </h1>
        <h2> Breed: {breed} </h2>
        <h2> Age: {age} </h2>

    </div>)
}

export default DogCard;