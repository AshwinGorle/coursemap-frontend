import React, { useEffect } from 'react'
const Footer = () => {
    async function fetchApi(){
        try{
            const praytn = await fetch("/api/api-code/",{
                headers:{
                    "authorization" : "Bearer 62a37a37-12c7-4c17-ace7-5b833243c88f",
                    "Content-Type" : "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:5173"
                },
                method : "POST",
                mode: "cors",
                body: JSON.stringify({})
            })
            const data = await praytn.json();
            console.log(data);
        }
        catch(error){
            console.log("error in calling api")
        }
    }

// useEffect(()=>{
//     fetchApi()
// },[]);

  return (
    <div className=' text-white bg-pink-600 '>
        <marquee>"api_code": "PRAYATNA_dd31bcbefa8548688038597bd343ff48"</marquee>
        
    </div>
  )
}

export default Footer
