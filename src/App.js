import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import MainAppHeader from "./Header/MainAppHeader";
import Main from "./Body/MainBody";
import Footer from "./Footer/Footer";
import AvatarSettings from "./Body/AvatarSettings";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            currentTab: 0,
            prevTab: -1,
            tabAnimation: false
        }
    }
    updateWindowDimensions = (event) => {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateWindowDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }
    changeTabWindow = (value) => {
        const prevTab = this.state.currentTab
        this.setState({
            ...this.state,
            tabAnimation: true,
            currentTab: value,
            prevTab: prevTab
        })
    }
    animationEnd = () => {
        this.setState({
            tabAnimation: false,
            prevTab: -1,
        })
    }
    getBodyElement = (width, height, tab, className='') => {
        let element = undefined
        switch (tab) {
            case 0:
                element = <Main width={width}
                                height={height}
                                className={className}
                                onAnimationEnd={this.animationEnd}
                />
                break
            case 1:
                element = <AvatarSettings width={width}
                                          height={height}
                                          className={className}
                                          onAnimationEnd={this.animationEnd}
                />
                break
            default:
                element = <Main width={width}
                                height={height}
                                className={className}
                                onAnimationEnd={this.animationEnd}
                />
                break
        }
        return element
    }
    render() {
        const headerHeight = 60;
        const footerHeight = 70;
        const bodyHeight = this.state.height - headerHeight - footerHeight - 20;
        const width = this.state.width;
        if(this.state.tabAnimation) {
            const prevTab = this.getBodyElement(width, bodyHeight, this.state.prevTab)
            const nextTab = this.getBodyElement(width, bodyHeight, this.state.currentTab, 'leftToRight')
            return (
                <div className="App" style={{height: this.state.height,
                    width: width}}>
                    <MainAppHeader/>
                    {prevTab}
                    {nextTab}
                    <Footer changeMethod={this.changeTabWindow}/>
                </div>
            )
        } else {
            const body = this.getBodyElement(width, bodyHeight, this.state.currentTab)
            const otherBody = this.getBodyElement(width, bodyHeight, this.state.currentTab + 1,
                'bottomToTop')
            return (
                <div className="App" style={{height: this.state.height, width: width}}>
                    <MainAppHeader/>
                    {body}
                    <Footer changeMethod={this.changeTabWindow} />
                </div>
            )
        }
    }
}

export default App;
