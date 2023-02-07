import React, { useState , useMemo} from 'react';

const Counter = () => {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const handleCountOne = () => {
        console.log("Count One Calling")
        setCountOne(countOne + 1)
    }

    const handleCountTwo = () => {
        setCountTwo(countTwo + 1)
    }

    const isEven =  useMemo(()=> {
        console.log("Is Even Calling")
        let i = 0;
        while(i < 2000000000) i++;
        return countOne % 2 === 0;
    },[countOne])

    console.log("isEven::::::::",isEven)

    return(
        <>  
            <button type='button' onClick={handleCountOne}>
                Count One: {countOne} : {isEven ? "Even" : "Odd" }
            </button>
            <br />
            <button type='button' onClick={handleCountTwo}>
                Count Two: {countTwo}
            </button>
        </>
    )

}

export default Counter