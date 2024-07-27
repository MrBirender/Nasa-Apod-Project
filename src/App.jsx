import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const handleToggleModel = () => {
    setShowModel(!showModel);
  };

  useEffect(() => {
    async function fetchApiData() {
      const api_key = import.meta.env.VITE_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod` + `?api_key=${api_key}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`error: ${response.status}`);
        }
        const apiData = await response.json();
        setData(apiData);
        console.log("myData", apiData); // i have used a + instead of comma caused an error:
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchApiData();
  }, []);

  return (
    <>
      {data ? <Main data={data} /> :
       <div className="loading">
        <p>Loading....</p>
        <i class="fa-solid fa-gear"></i>
       </div>
       }
      {showModel && <Sidebar data={data} handleToggleModel={handleToggleModel} />}
      {data && (<Footer  data={data} handleToggleModel={handleToggleModel} />)}
    </>
  );
}
