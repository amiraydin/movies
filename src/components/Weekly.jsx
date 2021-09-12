import React, { Component } from 'react'
import Card from './Card';
import moment from 'moment';

export default class Weekly extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [],
        }
    }

    // componentDidMount = () => {
    //     moment()
    //     fetch(`
    //     http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=8c2c5c205a0ac5bb229fe92084e87cf4
    //     `)
    //         .then(res => res.json())
    //         .then(result =>
    //             this.setState({ movies: result.results })
    //         )
    // }
    render() {
        // console.log(moment);
        return (
            <div>
                <h1>
                    here is Weekly
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
