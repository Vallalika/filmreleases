import React from "react"
import Film from "./Film"

const FilmList = ({filmList}) => {

    const filmArray = filmList.map(film => {
        return (
            <li> <Film id={film.id} name={film.name} url={film.url}> {film.name} </Film> </li>
        )
    })

    return (
        <>
            <ul> {filmArray} </ul>
        </>
    )

}

export default FilmList