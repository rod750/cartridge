import React from 'react';
import { Icon } from 'bloomer';

export class RatingComponent extends React.Component {
    constructor(props) {
        if(props.rating > 5 || props.rating < 0) {
            throw new Error("Rating prop value can't be more than 5 or less than 0");
        }
        super(props);
    }


    render() {
        return (
            <span>
                {this.renderStars()}
            </span>
        );
    }

    renderStars() {
        var stars = [];
        var count = 0;
        for(var i = 0; i < this.props.rating; i++) {
            stars.push(<Icon className="mdi mdi-star" key={count++} />);
        }
        for(var j = 0; j < 5-this.props.rating; j++) {
            stars.push(<Icon className="mdi mdi-star-outline" key={count++} />);
        }

        return stars;
    }
}
