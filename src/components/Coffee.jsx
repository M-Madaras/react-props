import  {useState} from 'react';
// .then .catch 2x .then
export default function Coffee() {
    const [coffeeList, setCoffeeList] = useState();
    

    // Async Await 2x await
    const getCoffeeSync = async (temperature) => {
    try {
        const results = await fetch (`https://api.sampleapis.com/coffee/${temperature}`);
        const data = await results.json();
        setCoffeeList(data);
    }
    catch(err){
        alert(err);
    }
   }  
    return (
        <>
        <button onClick={() => getCoffeeSync('hot')}>HOT</button>
        <button onClick={() => getCoffeeSync('iced')}>ICED</button>
        <section>
            <h2>Coffee List</h2>
            {!coffeeList 
            ?<p>Loading...</p>
            : coffeeList.map(coffee => (
                <ui>
                <ui key={coffee.id}>{coffee.title}</ui>
                <li key={coffee.id}>{coffee.description}</li>
                </ui>
            ))
        }
        </section>
        </>
    )
}

