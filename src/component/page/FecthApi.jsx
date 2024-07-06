const FetchApi = () =>{


    const showApi = async() =>{
        //    await fetch("https://jsonplaceholder.typicode.com/posts").then(async(res)=>{
        //         var result= await   res.json();
        //         console.log(result);
        //     })
            

            // second way
            const res = await fetch("https://jsonplaceholder.typicode.com/posts").then( async(res)=>{
            const result= await res.json();
            console.log(result);

            })
    }
    showApi()
    console.log("hello");
        return(
            <>
            </>
        )
}
export default FetchApi;