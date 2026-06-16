import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      "/pxweb/PXWeb/api/v1/en/Statistik/TUTRSJ/SJ/Konjunkturstatistik%20f%C3%B6r%20sj%C3%B6farten/SJ102.px",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: [
            {
              code: "år",
              selection: {
                filter: "item",
                values: [
                  "0",
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                  "11",
                  "12",
                  "13",
                  "14",
                ],
              },
            },
            {
              code: "månad",
              selection: {
                filter: "item",
                values: [
                  "0",
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                  "11",
                ],
              },
            },
          ],
          response: {
            format: "JSON",
          },
        }),
      },
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP Fehler: ${res.status}`);
        }

        return res.json();
      })
      .then((json) => {
        const years = [
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
          "2024",
          "2025",
        ];

        const months = [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
        ];

        const chartData = json.data.map((item) => {
          const year = years[Number(item.key[0])];
          const month = months[Number(item.key[1])];

          return {
            date: `${year}-${month}`,
            value: Number(item.values[0]),
          };
        });

        setData(chartData);
      })
      .catch((error) => {
        console.error("BDI Fetch Fehler:", error);
        setError("Daten konnten nicht geladen werden.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Hero data={data} loading={loading} error={error} />}
        />

        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
      <Background />
    </>
  );
}

export default App;
