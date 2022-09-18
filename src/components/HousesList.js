import React from 'react'
import {House} from './House';
import { housesApi } from '../rest/HousesApi2';
import { NewHouse } from "./NewHouse";

export class HousesList extends React.Component {
 state = {
   houses: []
 };

 componentDidMount () {
    this.fetchHouses();
 };

//  GET method to make data request
 fetchHouses = async () => {
    const houses = await housesApi.get();
    this.setState ({houses});
 };

 //  PUT method to update data and state
 updateHouse = async (updatedHouse) => {
    await housesApi.put(updatedHouse);
    this.fetchHouses();
 };

 render() {
   return (
       //className to do CSS styling
       <div className="houselistmain">

           <div className="newhousearea">
               <NewHouse />
           </div>
       
           <div className="house-list">
               <h2> List of Homes in the Neighborhood</h2>
               {this.state.houses.map((house) => (
                   <House
                       house = {house}
                       key={house._id}
                       updateHouse={this.updateHouse}
                       />
               ))}
           </div>
       </div>
   )
}
}

