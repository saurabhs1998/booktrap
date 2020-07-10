import React, { Component } from 'react'
import Authentication from  '../Authentication/authentication';
import OutLineCollection from './Collection/outLineCollection';
import OutLineProfile from './Profile//outLineProfile';
import {Button} from 'reactstrap';
import DisplayInfo from './DisplayInfo/displayInfo';
import './dashboard.css';

export class personal extends Component {
    state={
        shownavbar:true,
        createNewList:false,
        countIncrease:1,
        profile:false
    }
   
    render() {
        return (
            <div>
              <Authentication></Authentication>
                <div className="dashboardParentWrapper">
                    <Button outline>Profile</Button>
                    <Button outline >Collection</Button><br></br><br></br>
                    <DisplayInfo></DisplayInfo>
                    {this.state.profile?<OutLineProfile></OutLineProfile>:
                    <OutLineCollection></OutLineCollection>
                    }
                </div>
             
            </div>
        )
    }
}

export default personal
