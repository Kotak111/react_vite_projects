function FunConcept(){
    //callback hell   ->> one function have a multiple call back
    function add(a){
        return function(b){
            return function(c)
            {
                    return a+b+c
            }
        }
    }

    //how to calling callback hello

        // const sum1=add(5)
        // const sum2=sum1(6)
        // const finalResult = sum2(7)
        // console.log(finalResult);

        //curring function
        const finalResult = add(5)(6)(7)
        console.log(finalResult);

    return(
        <>
        </>
    )
}

export default FunConcept;