import {useEffect, useState} from 'react'

function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = useState(initialValue)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    
    useEffect(() =>{
        setTimeout(()=>{
            try{
                const localStorageItem = localStorage.getItem(itemName);
            
                let parsedItem;
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }
                setLoading(false);
            } catch(error){
                setLoading(false);
                setError(true);
            }
        },2000);

    });


    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem)
    }

    return {
        item, 
        saveItem, 
        loading, 
        error
    };
}

export default useLocalStorage;

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Barrer', completed: false },
//   { text: 'Lavar', completed: false },
//   { text: 'Cocinar', completed: false },
//   { text: 'Planchar', completed: true },

// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_v1');