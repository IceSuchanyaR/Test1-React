import React, { Component } from 'react';


class CarList extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        };
    }

    componentDidMount() {

        fetch('https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes')
            .then(results => {
                return results.json();
            }).then(data => {
                let carList = data.results.map((item) => {
                    return (
                        <div key={item.results}>
                        </div>

                    )
                })
                this.setState({ data: carList });
                console.log("state", this.state.data);
            })
    }


    render() {
        return (
            <div className="container2">
                <div className="container1">
                    {this.state.data}
                </div>
            </div>
        )
    }
}