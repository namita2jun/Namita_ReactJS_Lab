import axios from 'axios'
import { IDataList } from '../model/IDataList'

const getDataFromServer =() => {
   return axios.get("http://localhost:3001/items")
   .then( response => response.data)
}

const pushDataToServer =( newPurchase )=>{
     axios.post('http://localhost:3001/items', newPurchase,
     {
        headers:{
            "Content-Type":'application/json'
        }
     }
    )
    .then( response => response.data)
    
    }; 

    

export {
    getDataFromServer,
    pushDataToServer
    
}