import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import DishDetail from "./DishdetailComponent"


class Menu extends Component {

    constructor(props){
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    componentDidMount() {
        console.log("mounted")
    }

    onDishSelect(dish) {
        this.setState({
            selectedDish: dish,
        })
    }

    renderDish(dish) {
         if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src ={dish.image} alt = {dish.image}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
         } else {
             return (
                 <div></div>
             );
         }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1 ml-5">
                    <Card onClick = {() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src ={dish.image} alt = {dish.image}/>
                        
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>

                    </Card>
                </div>
            )
        });


        return (
            <div className ="Container">
                <div className="row">
                    {menu}
                </div>

                
                <DishDetail dish={this.state.selectedDish} />
                
            </div>
        );
    }
}

export default Menu;