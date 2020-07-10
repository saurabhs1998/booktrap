import React, { Component } from 'react'
import Auth from '../Authentication/authentication';
import { Container,Row,Col } from 'reactstrap';
import UserCollectionComponent from './userCollectionOutline/userCollectionOutline';
import RecentUserCollection from '../BookDetail/Recentusercollection/recentUserCollection'
import './userCollection.css';
export class userCollection extends Component {
    render() {
        return (
            <div>
               <Auth></Auth>
               <Container>
                   <Row>
                   <Col md="8">
                        <UserCollectionComponent userName="Dilip Kumar" firstName="Dilip" aboutUser="
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum at tortor vel tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque a mattis justo, a malesuada ex. Nam pellentesque blandit augue, convallis ornare turpis euismod eu.
                        " count="5" generLiked="Business"
                        ></UserCollectionComponent>
                        <UserCollectionComponent  userName="Mayank Soni"  firstName="Soni" aboutUser="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum at tortor vel tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque a mattis justo, a malesuada ex. Nam pellentesque blandit augue, convallis ornare turpis euismod eu."
                        firstName="Mayank" generLiked="Fiction" count="10"></UserCollectionComponent>
                         <UserCollectionComponent  userName="Saurabh Singh"  firstName="Saurabh" aboutUser="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum at tortor vel tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque a mattis justo, a malesuada ex. Nam pellentesque blandit augue, convallis ornare turpis euismod eu."
                        firstName="Saurabh" generLiked="Crime" count="3"></UserCollectionComponent>
                        
                        
                   </Col>
                   <Col md="4">
                       <RecentUserCollection/>
                   </Col>
                   </Row>
               </Container> 
            </div>
        )
    }
}

export default userCollection
