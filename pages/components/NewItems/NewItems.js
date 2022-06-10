import {HomeNewItemsContainer,ItemBox,ItemsContainer}from './NewItems.style'
import NewItem from './NewItem';
import {cars} from '../../data'
const NewItems = () => {
  return (
      <>
       <HomeNewItemsContainer>
           <h2>
               new cars
           </h2>
           <ItemsContainer>
                {
                    cars.map(car=>(
                        <NewItem key={car.id} data={car} />
                    ))
                }
           </ItemsContainer>
           
        </HomeNewItemsContainer>
      </>
   
  )
}

export default NewItems