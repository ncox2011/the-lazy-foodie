import React from 'react'
import {Card, Button, Content} from 'bloomer'
import '../index.css'
import 'bulma/css/bulma.css';
import {Link} from 'react-router-dom'



export default props => {
    let Review = {}
    
    return (
        <div className="reviewDiv">
        <Card className="review" isDisplay="block">
                <p>
                    {props.favoriteReview}
                </p>
                <br>
                </br>
                    <Button isColor="light" onClick={() => {props.toggleReview()}}>
                Add/Update Review
                </Button>    
            </Card>
        </div>
    )
}