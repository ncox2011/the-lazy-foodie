import React from 'react'
import {Card, Button, Content} from 'bloomer'
import '../index.css'
import 'bulma/css/bulma.css';
import {Link} from 'react-router-dom'



export default props => {
    let Review = {}
    
    return (
        <Card className="review" isDisplay="block">
                <p className="reviewPara">
                    {props.favoriteReview}
                </p>
                <br>
                </br>
                <Button isColor="light">
                Add/Update Review
                </Button>
                            
            </Card>
    )
}