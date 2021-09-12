import React, { Component } from 'react'
import Card from './Card'

export default class Favorites extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [],
            favIDs: this.getStorage(),
        }
    }

    getStorage = () => (
        JSON.parse(localStorage.getItem("favorites"))
    )

    getMovie = (id) => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8c2c5c205a0ac5bb229fe92084e87cf4`)
            .then(res => res.json())
            .then(results => this.setState({
                movies: [...this.state.movies, results]
            }));

    }
    componentDidMount = () => {
        this.state.favIDs.forEach(elm => (
            this.getMovie(elm)
        ))
    }

    render() {
        const { movies } = this.state;
        // console.log(this.state.movies);
        return (
            <div>
                <h1>
                    here is Favorit
                </h1>
                {movies && movies.map((elm, index) => (
                    <Card handleClick={() => { }} key={index} movie={elm} />
                ))}
            </div>
        )
    }
}
