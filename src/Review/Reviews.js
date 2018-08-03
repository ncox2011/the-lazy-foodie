import React from 'react'
import {Card, Content} from 'bloomer'
import '../index.css'
import 'bulma/css/bulma.css';
import {Link} from 'react-router-dom'



export default props => {
    let Review = {}
    
    return (
        <Card>
                <Content>
                    {props.favoriteReview}
                </Content>
            </Card>
    )
}