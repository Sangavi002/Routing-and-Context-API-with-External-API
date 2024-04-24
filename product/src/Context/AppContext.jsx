import { createContext, useEffect, useState } from "react"

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [products,setProducts] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
            setLoading(false);
          } catch (error) {
            setError(error.message);
            setLoading(false);
          }
        };
        fetchData();      
      }, []);
    
      return (
        <AppContext.Provider value={{ products, loading, error }}>
          {children}
        </AppContext.Provider>
      );
}

export { AppContext, AppProvider };