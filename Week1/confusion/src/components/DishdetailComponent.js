import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import DISHES from "../shared/dishes"



class DishDetail extends Component {
    constructor(props){
        super(props);
    }

    renderComments() {
        var comments = this.props.dish.comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <li> {comment.comment} </li>
                    <p></p>
            <li> -- {comment.author}, {comment.date.substring(0,10)}</li>
                    <p></p>
                </div>
            );
        }
        )
        return comments
    }

    render() {
        if (this.props.dish != null) {
            return (
                <div className="row">
                    <div className="col-5 m-1 ml-5">
                    <Card>
                        <CardImg src ={this.props.dish.image} alt = {this.props.dish.image}/>
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                    </div>

                    <div className="col-5 ml-5 m-1">
                        <h4>Comments</h4>
                        <ul class="list-unstyled">
                            {this.renderComments()}
                        </ul>
                    </div>
                </div>


            );
         } else {
             return (
                 <div></div>
             );
         }
    }
}



export default DishDetail;