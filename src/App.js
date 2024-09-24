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
        this.headerHeight = 60
        this.footerHeight = 70
        this.bodyMargin = 20
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
    getBodyElement = (tab, className='') => {
        let element = undefined
        const width = this.state.width
        const height = this.state.height - this.headerHeight - this.footerHeight - this.bodyMargin
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
    getAnimationName = (horizontal = false) => {
        let animationName = ''
        if(horizontal) {

        } else {
            const diff = this.state.currentTab - this.state.prevTab
            if(diff > 0) {
                animationName = 'leftToRight'
            } else {
                animationName = 'rightToLeft'
            }
        }
        return animationName
    }

    render() {
        if(this.state.tabAnimation) {
            const animationName = this.getAnimationName()
            const prevTab = this.getBodyElement(this.state.prevTab)
            const nextTab = this.getBodyElement(this.state.currentTab, animationName)
            return (
                <div className="App" style={{
                    height: this.state.height,
                    width: this.state.width}}>
                    <MainAppHeader/>
                    {prevTab}
                    {nextTab}
                    <Footer tab={this.state.currentTab} changeMethod={this.changeTabWindow}/>
                </div>
            )
        } else {
            const body = this.getBodyElement(this.state.currentTab)
            return (
                <div className="App" style={{
                    height: this.state.height,
                    width: this.state.width}}>
                    <MainAppHeader/>
                    {body}
                    <Footer tab={this.state.currentTab} changeMethod={this.changeTabWindow} />
                </div>
            )
        }
    }
}

export default App;
