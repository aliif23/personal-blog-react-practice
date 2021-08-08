import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [pending,setPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() =>{
        const abortcon = new AbortController();

        setTimeout(() =>{
            fetch(url,{signal :abortcon.signal})
             // npx json-server --watch data/db.json --port 3003
            .then(res => {
                if(!res.ok){
                    throw Error('Could not Fetch Data')
                }
                return res.json()
            })
            .then (data =>{
                setData(data);
                setPending(false);
            })
            .catch(err =>{
                if(err.name ==='AbortError'){
                    console.log('Fetch Aborted')
                }
                else{
                    setError(err.message);
                    setPending(false);
                }
            })
        },2000)

        return () => abortcon.abort()
        
    },[url]);
    
    return{data,pending,error}
    
}
 
export default useFetch;