import axios from "axios";
import {useEffect, useState} from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080");
    setData(response.data.blogPost);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
      <div className={"min-h-screen w-full bg-gray-950 flex items-center justify-center flex-col gap-10"}>

        <h1 className="text-5xl font-bold text-gray-100">
          Backend com Express e <span className={"text-green-400"}> Node</span>
        </h1>

        <ul className={"rounded-2xl shadow-lg p-5 bg-white space-y-3"}>
          {data.map((post, index) => (
              <li key={index} className={"bg-sky-100 p-4 rounded-2xl transition-transform transform hover:scale-105"}>
                <p className={"text-xl font-semibold text-gray-800"}>
                  {post.title}
                </p>
                <p className={"text-sm text-gray-600"}>
                  {post.content}
                </p>
              </li>
          ))}
        </ul>

      </div>
  );
}

export default App;
