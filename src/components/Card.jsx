import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        const { movie, handleClick } = this.props;
        // console.log(this.props);
        return (
            <button onClick={() => handleClick(movie.id)}>
                <div className="card my-3 rounded" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="default" />
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">{movie.overview}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{movie.release_date}</li>
                    </ul>
                </div>
            </button>
        )
    }
}
