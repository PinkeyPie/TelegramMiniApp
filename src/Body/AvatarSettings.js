import './AvatarSettings.css'
import {Component} from "react";
import {Card, CardHeader} from "@mui/material";

class AvatarSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0
        }
    }
    render() {
        const width = this.props.width
        const height = this.props.height
        return (
            <div className={'avatarSettings ' + this.props.className}
                 style={{height: height, width: width}}
                 onAnimationEnd={this.props.onAnimationEnd}
            >
                <Card sx={{
                    width: width - 20,
                    height: height,
                    margin: '10px',
                    borderRadius: "5px"}}>
                    <CardHeader title="Сведения о персонаже" sx={{
                        padding: 0,
                        paddingLeft: 1,
                        textAlign: "left"
                    }}/>
                </Card>
            </div>
        )
    }
}

export default AvatarSettings;