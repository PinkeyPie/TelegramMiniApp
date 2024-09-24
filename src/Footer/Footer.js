import './Footer.css'
import {Component} from "react";
import {Restore, Favorite, Archive, Comment} from "@mui/icons-material";
import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: props.tab ? props.tab : 0,
        }
        this.changeMethod = props.changeMethod
    }
    changeTabDecorator = (value) => {
        this.setState({
            ...this.state,
            currentTab: value
        })
        this.changeMethod(value)
    }
    render() {
        return (
            <div className="footer">
                <Paper sx={{height: '70px'}} elevation={3}>
                    <BottomNavigation
                        showLabels
                        value={this.state.currentTab}
                        onChange={(event, newValue) => {
                            this.changeTabDecorator(newValue)
                        }}>
                        <BottomNavigationAction label="Главное окно" icon={<Restore/>} value={0}/>
                        <BottomNavigationAction label="Персонаж" icon={<Favorite/>} value={1}/>
                        <BottomNavigationAction label="Телефон" icon={<Comment/>} value={2}/>
                        <BottomNavigationAction label="Реклама" icon={<Archive/>} value={3}/>
                    </BottomNavigation>
                </Paper>
            </div>
        )
    }
}

export default Footer;