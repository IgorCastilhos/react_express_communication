import express from "express";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: ["http://localhost:5174"]
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json({
    blogPost: [
      {
        title: "A volta do Neymar ao Santos e como isso influência o Grêmio",
        content:
            "Agora ficou mais difícil para o Grêmio, pois o Santos está mais forte com a volta do Neymar."
      },
      {
        title: "A importância do marketing digital para o seu negócio",
        content:
            "O marketing digital é uma ferramenta poderosa para alavancar o seu negócio."
      },
      {
        title: "O que é Frontend e Backend?",
        content:
            "Frontend é a parte visual de um site, já o Backend é a parte que fica por trás do site."
      }
    ]
  });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});