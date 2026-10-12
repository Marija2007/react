import React from "react";
import { Movie } from "./components/Movie";

export default function App() {
  const filmovi = [
    {
      name: "The Shawshank Redemption",
      date: "1994",
      genre: "Drama",
      plot: "Банкар осуден за убиство што не го направил, го поминува животот во затвор и наоѓа надеж преку пријателство.",
      imdblink: "https://www.imdb.com/title/tt0111161/",
      imgurl: "shawshank.jpg",
    },
    {
      name: "The Godfather",
      date: "1972",
      genre: "Crime, Drama",
      plot: "Стариот мафијашки бос ја предава власта на својот син, кој неволно влегува во семејниот криминален бизнис.",
      imdblink: "https://www.imdb.com/title/tt0068646/",
      imgurl: "godfather.webp",
    },
    {
      name: "The Dark Knight",
      date: "2008",
      genre: "Action, Crime",
      plot: "Бетмен се соочува со Џокер, криминалец кој го тера Готам во хаос.",
      imdblink: "https://www.imdb.com/title/tt0468569/",
      imgurl: "darkknight.webp",
    },
    {
      name: "Pulp Fiction",
      date: "1994",
      genre: "Crime, Drama",
      plot: "Неколку испреплетени приказни за криминалци, боксер и жена на мафијаш во Лос Анџелес.",
      imdblink: "https://www.imdb.com/title/tt0110912/",
      imgurl: "pulpfiction.jpg",
    },
    {
      name: "Inception",
      date: "2010",
      genre: "Sci-Fi, Action",
      plot: "Крадец што краде тајни преку соништата добива задача да всади идеја во нечија свест.",
      imdblink: "https://www.imdb.com/title/tt1375666/",
      imgurl: "inception.webp",
    },
  ];

  return (
    <div id="app">
      <h1>филмови</h1>
      <Movie filmovi={filmovi} />
    </div>
  );
}
