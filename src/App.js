import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


// import {HashRouter as Router, Switch, Route} from "react-router-dom";

//import Nav from './Pages/Nav'
// import {getData} from './GetData';


function App() {
    const [games, setGame] = React.useState()
    const [error, setError] = React.useState()
 
  
  React.useEffect(()=>{

    // getData()
    fetchGame()
    .then(data => setGame(data))
         .catch(error => {
           setError(error)
         })

  },[])

  async function fetchGame () {

    const response = await fetch(
        `https://www.scorebat.com/video-api/v1/`
        )
     if (!response.ok) throw new Error(response.statusText)
     return response.json()
   }
   
   if (!games) return null
   if (error) return <div>{error.message}</div>

   console.log(games);

  
    const data = games.map(game=>(
      <div key = {game.title}>
  
      <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
      <div className="card">

          <h4 align="center" className="card-header">{game.title}</h4>
                    <div className="row no-gutters">
                      <div className="card-img-top" >
                        <img src={game.thumbnail} className="img-thumbnail" alt="logo" ></img>
                      </div>

                      <div className="col-md-6">
                        <div className="card-body">
                          <h5 className="card-text">{game.competition.name}</h5>
                          <h5 className="card-text"> Hora del Partido: <time dateTime={game.date}>{game.date} </time></h5>
                          <script></script>
                          <a href={game.url}>Miralo aqui </a>
                        </div>
                        
                      </div>

                      <div className="col-md-4">
                        <h2 align="center">Estadisticas</h2>
                      <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6">
                            <a href={game.side1.url}>{game.side1.name}</a>
                            </div>
                            <div className="col-lg-6">
                            <a href={game.side2.url}>{game.side2.name}</a>
                            </div>
                        </div>
                      </div>
                      </div>
          </div>
        </div>
        </div>

      </div>
      </div>
    ))

  return (
    <div>
        <h1><center>Partidos de hoy</center> </h1>
 
  {data}

            </div>
  );
}


export default App
