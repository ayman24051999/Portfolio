import React, { useState } from 'react'
import ExpenceForm from './expenceForm';
import RetrieveItmesAndDeleteItems from './retrieveItmesandDeleteItems';


function Items() {
        const [items, setItems] = useState([]);

        const addItems = (description, amount, date) => {
            setItems([...items, { description, amount, date }]); // Store both description and amount
        };

        const deleteItems = (index) => {
            setItems(items.filter((_, i) => i !== index)); // Filter out the item at the given index
        };

  return (
      <div>
          <>
              <div className='flex items-center justify-center h-screen'>
                  <ExpenceForm addItems={addItems} />
              </div>
              <div>
                  <RetrieveItmesAndDeleteItems
                      items={items}
                      deleteItems={deleteItems}
                  />
              </div>
          </>
      </div>
  );
}

export default Items;
