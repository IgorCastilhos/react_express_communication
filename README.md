# Connecting a React Frontend with a Node.js Express Backend

In this project, you will learn how to establish communication between a React-based frontend and a Node.js backend using Express.

## Project Setup

First, create a folder named **`simple_project`** in your preferred location and open it in your favorite IDE.

Now, let's create the project structure. It will be simple:

- **`frontend`** folder (React app)
- **`backend`** folder (Node.js API)

### Setting Up the Frontend

Inside the **`frontend`** folder, we will use Vite to create our React application along with Tailwind CSS. Navigate into the folder before running the command:

```bash
npm create vite@latest
Project name: .
Select a framework: React
Select a variant: JavaScript
```

Now, install the dependencies:

```bash
npm install
```

Next, install Tailwind CSS:

```bash
npm install tailwindcss @tailwindcss/vite
```

Your **`frontend`** folder should now have the following structure:

```
node_modules
public
src
  ├── App.jsx
  ├── index.css
  ├── main.jsx
.gitignore
...
```

### Configuring Vite

Modify **`vite.config.js`** to include Tailwind CSS:

```jsx
import { defineConfig } from 'vite';
import tailwindcss from "@tailwindcss/vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), tailwindcss()]
});
```

### Creating the App Component

Edit **`App.jsx`**:

```jsx
function App() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center flex-col gap-10">
      <h1 className="text-5xl font-bold text-gray-800">
        Backend with Express and Node
      </h1>
      <ul className="rounded-2xl shadow-lg bg-white space-y-3"></ul>
    </div>
  );
}

export default App;
```

---

## Setting Up the Backend

To create the backend, navigate to the **`backend`** folder:

```bash
cd backend
```

Initialize a **`package.json`** file:

```bash
npm init -y
```

Modify **`package.json`** to set **`main`** as **`server.js`** and add the following:

```json
"type": "module"
```

Now, install Express and CORS:

```bash
npm install express cors
```

Create a file named **`server.js`** inside the **`backend`** folder and add the following:

```jsx
import express from "express";
import cors from "cors";

const app = express();

const CORS_OPTIONS = {
  origin: ["http://localhost:5173"]
};

app.use(cors(CORS_OPTIONS));

app.get("/", (req, res) => {
  res.json({
    blogPosts: [
      {
        title: "Neymar's Return to Santos and Its Impact on Grêmio",
        content: "Grêmio will face tougher competition now that Neymar is back at Santos."
      },
      {
        title: "The Importance of Digital Marketing for Your Business",
        content: "Digital marketing is a powerful tool to boost your business growth."
      }
    ]
  });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
```

Since the frontend and backend run on different ports (**5173** and **8080**), we use **CORS** to allow communication between them.

---

## Fetching Data from the Frontend

To fetch blog posts from the backend, navigate back to the **`frontend`** folder and install **axios**:

```bash
npm install axios
```

Update **`App.jsx`**:

```jsx
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080");
    setData(response.data.blogPosts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-950 flex items-center justify-center flex-col gap-10">
      <h1 className="text-5xl font-bold text-gray-100">
        Backend with Express and <span className="text-green-400"> Node</span>
      </h1>
      <ul className="rounded-2xl shadow-lg p-5 bg-white space-y-3">
        {data.map((post, index) => (
          <li key={index} className="bg-sky-100 p-4 rounded-2xl hover:scale-105 transition-transform">
            <p className="text-xl font-semibold text-gray-800">{post.title}</p>
            <p className="text-sm text-gray-600">{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

The **`useState`** hook stores the fetched data, and **`useEffect`** ensures the data is retrieved when the component mounts.

---

## Running the Application

Start both the frontend and backend simultaneously. Open two terminal windows and run:

```bash
# In the frontend folder
npm run dev

# In the backend folder
node server.js
```

Now, open **`http://localhost:5173/`** in your browser. You should see the blog posts displayed on the screen.

Congratulations! You have successfully connected a React frontend with a Node.js backend using Express.

