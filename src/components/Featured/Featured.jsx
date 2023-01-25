import React,{useState,useEffect} from 'react';
import './Featured.css';
import axios from 'axios';
import Bitcards from '../Bitcards/Bitcards';

const Featured = () => {
    const [data,setData] = useState(null);

    const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=6&page=1&sparkline=false';

    useEffect(()=>{
        axios.get(URL).then((response) => {
            setData(response.data)
        }).catch((err)=> {
            console.log(err);
        })
    },[]);

    if(!data) return null;
    
  return (
    <div className='featured' id='featured'>
        <div className="container">
            <div className="left">
                <h2>Explore top Crypto's like Bitcoin, Ethereum, Dogecoin</h2>
                <p>See all the availabe Cryptocurrencies</p>
                <button className='btn'>See more Coins</button>
            </div>
            <div className="right">
                {data.map((bitcoin) => 
                    (<Bitcards key={bitcoin.id} 
                        name={bitcoin.name}
                        image={bitcoin.image}
                        current_price={bitcoin.current_price}
                        price_change_percentage_24h={bitcoin.price_change_percentage_24h}
                    />)
                )}
            </div> 
        </div>
    </div>
  )
}

export default Featured