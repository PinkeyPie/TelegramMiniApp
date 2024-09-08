import './MainBody.css'
import {Component} from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Divider,
    List,
    ListItemButton, ListItemText, Tab, Tabs,
    Typography
} from "@mui/material";
import bedpart from "./bedrpar.jpg";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0
        }
    }
    changeTabSelection = (event) => {
        this.setState({
            currentTab: parseInt(event.target.dataset.value)
        })
    }
    render() {
        const height = this.props.height
        const width = this.props.width
        return (
            <div className={'Main ' + this.props.className}
                 style={{height: height, width: width}}
                 onAnimationEnd={this.props.onAnimationEnd}
            >
                <Card sx={{ width: this.props.width - 20,
                    minimalWidth: this.props.width - 20,
                    margin: '10px',
                    height: this.props.height,
                    borderRadius: "5px",
                }} className="imageCard">
                    <CardHeader title="Ваша комната" subheader="31 августа, 7:24" sx={{
                        padding: 0,
                        paddingLeft: 1,
                        textAlign: "left"}} />
                    <CardMedia
                        sx={{height: this.props.height - 320}}
                        image={bedpart}
                        title="Ваша комната"
                    />
                    <CardContent sx={{
                        padding: 1,
                        paddingBottom: 0
                    }}>
                        <Tabs value={this.state.currentTab}
                              onChange={this.changeTabSelection}
                              aria-label="Choose state">
                            <Tab label="Выбор действия" value={0} data-value={0} />
                            <Tab label="Элементы окружения" value={1} data-value={1} />
                        </Tabs>
                    </CardContent>
                    <Divider component="div" sx={{borderColor: "black"}} />
                    <CardActions sx={{
                        display: this.state.currentTab === 0 ? "block" : "none",
                    }}>
                        <List sx={{width: '100%', height: 180, overflow: 'auto'}} component="nav">
                            <ListItemButton>
                                <ListItemText primary="Лечь спать"/>
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemText primary="Раздеться"/>
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemText primary="Переодеться"/>
                            </ListItemButton>
                        </List>
                    </CardActions>
                    <CardActions sx={{
                        display: this.state.currentTab === 1 ? "block" : "none",
                    }}>
                        <List sx={{width: '100%', height: 100, overflow: 'auto'}}>
                            <ListItemButton>
                                <ListItemText primary="Подойти к шкафу"></ListItemText>
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemText primary="Подтревожить Аньку"></ListItemText>
                            </ListItemButton>
                        </List>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default Main;