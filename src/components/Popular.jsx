import React, { Component } from 'react'
import Card from './Card';

export default class Popular extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [],
        }
    }

    componentDidMount = () => {
        fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8c2c5c205a0ac5bb229fe92084e87cf4')
            .then(res => res.json())
            .then(result =>
                this.setState({ movies: result.results })
            )
    }
    render() {
        return (
            <div>
                <h1>
                    here is Pupolair
                </h1>
                <div className="d-flex flex-wrap justify-content-around">
                    {this.state.movies.map((movie, index) => (
                        <Card handleClick={() => { }} key={index} movie={movie} />
                    ))}
                </div>


            </div>
        )
    }
}
