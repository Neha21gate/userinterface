import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Icons extends Component {
    render() {
        return (
            < div width="200px" height="200px" backgroundColor="#c4a754">
                <p><text style={{ color: "red", backgroundColor: "lightblue" }} >Icons</text></p><br />
            <table>

                    <td ><tr><img src={"https://cdn.dribbble.com/users/2199928/screenshots/11532918/shot-cropped-1590177932366.png?compress=1&resize=400x300"} width="300" height="300"/>
                        <p>Neha Choudhary</p>
                        <p>Web Developer</p></tr>
                    </td>

                    <td ><tr><img src={"https://s3.envato.com/files/229844315/AVATAR%20PEOPLE/NO%20BACKGROUND/PNG/PEOPLE%20ICON-07.png"} width="300" height="300" />
                        <p>Ankur Shokeen</p>
                        <p>Retail Manager</p></tr>
                    </td>
                    <td ><tr><img src={"https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Programmer-512.png"} width="300" height="300" />
                        <p>Vivek Bakshi</p>
                        <p>Retail Manager</p></tr>
                    </td>
                    <td ><tr><img src={"https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png"} width="300" height="300" />
                        <p>Sagar Dhuri</p>
                        <p>Web Developer</p></tr>
                    </td>
                   


                </table>
                <button>Subscribe</button>
            </div >
            )
    }
}
export default Icons;