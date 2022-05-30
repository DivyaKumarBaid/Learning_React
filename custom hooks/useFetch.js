//this is for get method only

import React from 'react'
export default function useFetch(url) {

    const [data, setData] = React.useState(null)
    const [isPending, setPending] = React.useState(true)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {

        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res === 200 || !res === 201) {
                    throw Error('Could not fetch the data form the servre');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name !== 'AbortError') {
                    setPending(false);
                    setError(err.message);
                }
            })

        return () => abortCont.abort()
    }, [url])

    return { data, isPending, error }
}


// using it in function
// const {data,isPending,Error} = useFetch(url)



// for post method
// fetch(url, msg_body)
// .then(res => {
//     if (res.status === 201) {
//         setS({
//             marginTop: "60px",
//             backgroundColor: "#43ff64d9"
//         })
//         setError("Account Created");
//     }
//     else if (res.status === 409) {
//         throw Error('Already Exists');
//     }
//     else {
//         throw Error('Could not fetch the data form the server');
//     }
//     return res.json();
// })
// .catch(err => {
//     const p = err.message
//     setS({
//         marginTop: "60px",
//         backgroundColor: "rgb(241, 9, 117)"
//     })
//     setError(p)
// })
