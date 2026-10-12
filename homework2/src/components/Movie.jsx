import React from 'react';

export const Movie = ({filmovi}) => {
    console.log(filmovi)
    return (
        <div id='movie'>
          <table border={1}>
            <thead>
                <tr>
                    <th>Slika</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Genre</th>
                    <th>Plot</th>
                    <th>IMDb</th>
                </tr>
            </thead>
            <tbody>
                {filmovi.map((film,i)=>{
                    return(
                        <tr key={i}>
                            <td><img src={film.imgurl} alt={film.name} width={100} /></td>
                            <td>{film.name}</td>
                            <td>{film.date}</td>
                            <td>{film.genre}</td>
                            <td>{film.plot}</td>
                            <td><a href={film.imdblink} target='_blank' rel='noreferrer'>Link</a></td>
                        </tr>
                    )
                })}
            </tbody>
          </table>
        </div>
    )
}