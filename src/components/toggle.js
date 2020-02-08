import React, { Component } from 'react'

export default class Toggle extends Component {
    //!! lift state and handle up
    // state = {
    //     flag: true
    // }
    // handleClick = () => this.setState({ flag: !this.state.flag })

    render() {
        const txt1 = this.props.text1;
        const txt2 = this.props.text2;
        const classChange = this.props.flag ? [["toggleBtn on",txt1], ["toggleBtn off",""]] : [["toggleBtn off",""], ["toggleBtn on",txt2]];

        return (
            <React.Fragment>
            <div className="buttonText">{this.props.title}</div>
            <div className="toggleBox" onClick={()=>this.props.onClick(this.props.flagReturn,this.props.flag)}>
                
                <div className={classChange[0][0]}>{classChange[0][1]}</div>
                <div className={classChange[1][0]}>{classChange[1][1]}</div>
            </div >
            </React.Fragment>
        )
    }

}