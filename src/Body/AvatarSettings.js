import './AvatarSettings.css'
import {Component} from "react";
import {
    Card,
    CardContent,
    CardHeader,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Typography
} from "@mui/material";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import WifiIcon from '@mui/icons-material/Wifi';


class AvatarSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0,
            expanded: 0
        }
    }
    handleAvatarStateChange = (panel) => (event, newExpanded) => {
        this.setState({
            ...this.state,
            expanded: newExpanded ? panel : false
        })
    }
    render() {
        const width = this.props.width
        const height = this.props.height
        const Accordion = styled((props) => (
            <MuiAccordion disableGutters elevation={0} square {...props} />
        ))(({ theme }) => ({
            border: `1px solid ${theme.palette.divider}`,
            '&:not(:last-child)': {
                borderBottom: 0,
            },
            '&::before': {
                display: 'none',
            },
        }))
        const AccordionSummary = styled((props) => (
            <MuiAccordionSummary
                expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
                {...props}
            />
        ))(({ theme }) => ({
            backgroundColor: 'rgba(0, 0, 0, .03)',
            flexDirection: 'row-reverse',
            '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                transform: 'rotate(90deg)',
            },
            '& .MuiAccordionSummary-content': {
                marginLeft: theme.spacing(1),
            },
            ...theme.applyStyles('dark', {
                backgroundColor: 'rgba(255, 255, 255, .05)',
            }),
        }))
        const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
            padding: theme.spacing(2),
            borderTop: '1px solid rgba(0, 0, 0, .125)',
            paddingTop: 0,
            paddingBottom: 0,
        }))

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
                    <CardContent sx={{padding: 1, paddingBottom: 0}}>
                        <Accordion expanded={this.state.expanded === 1}
                                   onChange={this.handleAvatarStateChange(1)}>

                        </Accordion>
                        <Accordion expanded={this.state.expanded === 2}
                                   onChange={this.handleAvatarStateChange(2)}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography>Потребности персонажа</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List
                                    sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                                >
                                    <ListItem>
                                        <ListItemIcon><WifiIcon/></ListItemIcon>
                                        <ListItemText id="heat-label" primary="Жажда"/>
                                        <Typography edge="end">100%</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><WifiIcon/></ListItemIcon>
                                        <ListItemText id="starve-label" primary="Голод"/>
                                        <Typography edge="end">80%</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><WifiIcon/></ListItemIcon>
                                        <ListItemText id="lust-label" primary="Похоть"/>
                                        <Typography edge="end">100%</Typography>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={this.state.expanded === 3}
                                   onChange={this.handleAvatarStateChange(3)}>
                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                <Typography>Состояние персонажа</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    <ListItem>
                                        <ListItemIcon><WifiIcon/></ListItemIcon>
                                        <ListItemText id="tired-label" primary="Усталость"/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><WifiIcon/></ListItemIcon>
                                        <ListItemText id="starvation-label" primary="Голод"/>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={this.state.expanded === 4}
                                   onChange={this.handleAvatarStateChange(4)}>
                            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                <Typography>Навыки</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    <ListItem>
                                        <ListItemIcon><WifiIcon/></ListItemIcon>
                                        <ListItemText primary="Шитьё"/>
                                        <Typography edge="end">100%</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon><WifiIcon/></ListItemIcon>
                                        <ListItemText primary="Хакерство"/>
                                        <Typography edge="end">100%</Typography>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default AvatarSettings;