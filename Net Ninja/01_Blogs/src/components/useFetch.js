  // This is the custom / crystal hook for fetching the data

import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [isPending, setPending] = useState(true)
  const [err, setErr] = useState()


  useEffect(() => {
    // const abortCont = new AbortController();

    let fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw ('Cannot fetch  data from the server')
        }
        const data = await res.json();
        setData(data);
        // console.log(data)
        setPending(false)
        setErr(null)
      } catch (err) {
        console.log(err, data);
        setErr(err)
        setPending(true)
      }
    }
    setTimeout(() => {
      fetchData();
      setPending(false)
    }, 500);
    // return () => abortCont.abort(); Pending in Net Ninja @Video 24 
  }, [url])
  return { data, isPending, err , setData, setPending, setErr }
}

export default useFetch