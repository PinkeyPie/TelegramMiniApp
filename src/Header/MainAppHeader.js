import './MainAppHeader.css'
import {Component} from "react"
import cupSvg from './cup.svg'
import plusSvg from './plus.svg'
import diamondSvg from './diamond.svg'
import settingsSvg from './settings.svg'
import {pulse} from 'react-animations'

class MainAppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cupsClicked: false,
            diamondClicked: false
        }
    }
    cupsClick = (event) => {
        this.setState({cupsClicked: true});
        console.log('cupsBtnClick');
    }
    diamondsClick = (event) => {
        this.setState({diamondClicked: true});
        console.log('diamondsClick');
    }
    settingsClick = (event) => {
        console.log('settingsBtnClick');
    }
    render() {
        const cupsClicked = this.state.cupsClicked;
        const diamondClicked = this.state.diamondClicked;
        return (
            <div className="mainAppHeader">
                <button className={cupsClicked ? 'clickAnim ellipseButton cups' : 'ellipseButton cups'}
                        onClick={this.cupsClick}
                        onAnimationEnd={() => {
                            this.setState({cupsClicked: false});
                        }}>
                    <img className="cupIcon" src={cupSvg} alt="cup" />
                    <p>5</p>
                    <img className="plusIcon" src={plusSvg} alt="plus"/>
                </button>
                <button className={diamondClicked ? 'clickAnim ellipseButton diamonds' : 'ellipseButton diamonds'}
                        onClick={this.diamondsClick}
                        onAnimationEnd={() => {
                            this.setState({diamondClicked: false});
                        }}>
                    <img className="cupIcon" src={diamondSvg} alt="cup"/>
                    225
                    <img className="plusIcon" src={plusSvg} alt="plus"/>
                </button>
                <button className="settings" onClick={this.settingsClick}>
                    <img className="settingsIcon" src={settingsSvg} alt="settings"/>
                </button>
            </div>
        )
    }
}

export default MainAppHeader;