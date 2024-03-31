import { useEffect, useState } from "react";
import './App.css'
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from './DummyData/data.js'

function App() {
  const [sidebar, setsidebar] = useState(false)
  const [newsData, setnewsData] = useState(data)
  const [newstype, setnewstype] = useState("")
  const [newsdetails, setnewsdetails] = useState("")

  const loadNewsData = async () => {
    let API_KEY = "9b91159d54c9432da70f054ed183bd4e"
    try {
      await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            console.log(error);
          }
        })
        .then((data) => {
          setnewsData(data);
        }).catch(error => console.log(error));
    }
    catch (error) { console.log(error) }
  }
  console.log(newsData)

  useEffect(() => {
    // loadNewsData()
  }, [])
  

  return (
    <>
      <Navbar />
      <div className={`flex flex-row justify-between transition-all duration-1000 ease-in-out ${sidebar ? "ml-0 md:ml-[30vw]" : "md:ml-0 ml-0"}`}>
        <SideBar sidebar={sidebar} setsidebar={setsidebar} setnewstype={setnewstype} />
        <section className="flex flex-col justify-center items-center p-1">
                <div className="flex flex-row flex-wrap justify-center items-center">
                    {newsData && newsData.articles.map((item, index) => {
                        return <Card key={index} data={item} />
                    })}
                </div>
                <div className="flex justify-center py-10">
                    <button className="p-3 text-white px-6 bg-blue-500 rounded-lg btn">
                        See More
                    </button>
                </div>
            </section>
        </div>

    </>
  )
}

export default App
