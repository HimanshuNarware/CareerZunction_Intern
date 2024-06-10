import React ,{useState,useEffect} from 'react';
import pre from '../image/pre.json'
import Lottie from 'lottie-react';
import App from '../App';
import './Preloader.css'
function Preloader() {
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        setLoading(true);
        setTimeout(() =>{
            setLoading(false)
        },1700)
    },[])
return (
    
     
            loading ?
            <div className='pre transition duration-150 ease-in'>
                <Lottie className="preloader" animationData={pre}/>
            </div>
            
             :
            //Rest Code
                <App/>
          
               

  );
}
export default Preloader;