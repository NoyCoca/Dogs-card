import DogCard from '../Features/DogCard';

function Home() {
    const dogsArray = [
        <DogCard name= "Rio" breed = "Belgian shepherd" age = {2}/>,
        <DogCard name= "Joy" breed = "Pitbull" age = {1}/>,
        <DogCard name= "Boba" breed = "Melanoa" age = {3}/>,
        <DogCard name= "Lucky" breed = "German shepherd" age = {6}/>,
    ]
    return (
        <div className = "allcards">{dogsArray} </div>
    );
    
}

export default Home; 