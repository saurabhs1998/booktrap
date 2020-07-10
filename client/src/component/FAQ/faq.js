import React,{useState}from 'react'
import { Alert, Collapse } from 'reactstrap';
const iconStyle={
    fontSize:"1.2em",
    cursor:"pointer"
};
export default function Faq(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Alert color={props.color}>{props.question}{isOpen?<p style={{float:"right",display:"inline"}}><span><i class="fas fa-angle-up" style={iconStyle} onClick={toggle}></i></span></p>:<p style={{float:"right",display:"inline"}}><span><i class="fas fa-angle-down" style={iconStyle} onClick={toggle}></i></span></p>}
              
                <Collapse isOpen={isOpen}>
                <hr></hr>
                  {props.answer}
                </Collapse>
                </Alert>
        </div>
    )
}
