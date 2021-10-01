import React,{Component} from "react";
import './NavBar.css'
import {MenuItems} from "./MenuItems.js"
import  {Button} from "./Button.js"
class Navbar extends Component {

   state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

        render(){
            return(
                <nav className="navBarItems">
                    <h1 className="navBar-logo"><i class="fas fa-pen-fancy"></i> Emilie Pons</h1>
                    <div className="menu-icon" onClick={this.handleClick}><i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i> </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item,index) => {
                            return (
                            <li key={index} className="container">
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                            )
                        })}
                        
                    </ul>
                    <Button>Sign Up</Button>
                </nav>
        )
    }

}

export default Navbar

// function LandingPage() {
// return (<div>
//             
//             <div>
//                 Slides
//             </div>
//             <div>
//                 Side Menu
//             </div>
//             <div>
//                 NewsLetter Signup
//             </div><div>
//                 Social Media
//             </div><div>
//                 Footer
//             </div>

//         </div>);
// }

//