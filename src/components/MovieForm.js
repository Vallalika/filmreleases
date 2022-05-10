import React, {useState} from "react"

const MovieForm = ({addFilm}) => {

    const [name, setFilmName] = useState('');
    const [url, setFilmUrl] = useState('');

    const handleFilmName = (event) => {
        setFilmName(event.target.value)
    }

    const handleFilmUrl = (event) => {
        setFilmUrl(event.target.value)
    }

    const onSubmitHandle = (event) => {
        event.preventDefault()
        const nameToSubmit = name.trim()
        const urlToSubmit = url.trim()

        if (!nameToSubmit || !urlToSubmit) {
            return
        }

        const newFilm = { name: nameToSubmit, url: urlToSubmit }
        // create a new film and push it to the film list
        addFilm(newFilm)

        setFilmName("");
        setFilmUrl("");

    }

    return (
        <form onSubmit={onSubmitHandle}>
            
            <input 
                type="text"
                placeholder="Add movie title"
                value={name}
                onChange={handleFilmName}
            />

            <input 
                type="text"
                placeholder="Add url"
                value={url}
                onChange = {handleFilmUrl}
            />

            <input 
                type="submit"
                value="Post"
            />

        </form>
    )
}

export default MovieForm