import React, { useEffect, useState } from 'react'
import { Context } from '../MyContext';
import data from '../DummyData/data.js'
const UserContextProvider = ({ children }) => {
    const [signIn, setsignIn] = useState(false);
    const [name, setName] = useState("");
    const [pwd, setPwd] = useState("");
    const [sidebar, setsidebar] = useState(false);
    const [newsData, setnewsData] = useState(data);
    const [query, setQuery] = useState('top-headlines?country=in')

    const loadNewsData = async () => {
        let API_KEY = "9b91159d54c9432da70f054ed183bd4e"
        try {
          await fetch(`https://newsapi.org/v2/${query}&apiKey=${API_KEY}`)
            .then(response => {
              if (response.ok) {
                return response.json();
              } else {
                console.log(error);
              }
            })
            .then((data) => {
              setnewsData(data.articles);
            }).catch(error => console.log(error));
        }
        catch (error) { console.log(error) }
      }
      // console.log(newsData)
    
      useEffect(() => {
        // loadNewsData()
      }, [query])

      useEffect(() => {
        localStorage.setItem('Data', JSON.stringify(newsData));
      }, [setnewsData]);

    useEffect(() => {
        const Data = localStorage.getItem('Data');
        const item1 = localStorage.getItem('Name');
        const item2 = localStorage.getItem('Password');
        const item3 = localStorage.getItem('login');
    
        if (item1) {
          setName(JSON.parse(item1));
        }
        if (item2) {
          setPwd(JSON.parse(item2));
        }
        if (item3) {
          setsignIn(JSON.parse(item3));
        }
      }, []);
    return (

        <Context.Provider value={{
            name, setName, pwd,
            setPwd, signIn, setsignIn,
            query, setQuery,
            newsData, setnewsData,
            sidebar, setsidebar
        }}>
            {
                children
            }
        </Context.Provider>
    )
}

export default UserContextProvider