import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initMiniApp, initMainButton, mockTelegramEnv, parseInitData, initUtils} from "@telegram-apps/sdk";

const initializeTelegramSDK = async () => {
    try {
        console.log('initializeTelegramSDK');
        const [miniApp] = initMiniApp()
        await miniApp.ready()
        miniApp.setHeaderColor('#fcb69f')

        const [mainButton] = initMainButton()
        mainButton.setParams({
            backgroundColor: '#aa1388',
            text: 'Share points!',
            isVisible: true,
            isEnabled: true
        })
        mainButton.show()
        const utils = initUtils()
        mainButton.on('click', () => {
            try {
                const score = localStorage.getItem('memory-game-score') || 0
                utils.shareUrl(`Look! I have ${score} scores in game!`)
                console.log('Window selecting chat for sending message')
            } catch (error) {
                console.error(error)
            }
        })
    } catch (error) {
        console.error('Error while initialize Telegram SDK', error)
        const initDataRaw = new URLSearchParams([
            ['user', JSON.stringify({
                id: 99281932,
                first_name: 'Chingis',
                last_name: 'Kuular',
                username: 'BemaDz',
                language_code: 'en',
                is_premium: false,
                allows_write_to_pm: true,
            })],
            ['hash', '89d6079ad6762351f38c6dbbc41bb53048019256a9443988af7a48bcad16ba31'],
            ['auth_date', '1716922846'],
            ['start_param', 'debug'],
            ['chat_type', 'sender'],
            ['chat_instance', '8428209589180549439']
        ]).toString()

        mockTelegramEnv({
            themeParams: {
                accentTextColor: '#6ab2f2',
                bgColor: '#17212b',
                buttonColor: '#5288c1',
                buttonTextColor: '#ffffff',
                destructiveTextColor: '#ec3942',
                headerBgColor: '#fcb69f',
                hintColor: '#708499',
                linkColor: '#6ab3f3',
                secondaryBgColor: '#232e3c',
                sectionBgColor: '#17212b',
                sectionHeaderTextColor: '#6ab3f3',
                subtitleTextColor: '#708499',
                textColor: '#f5f5f5',
            },
            initData: parseInitData(initDataRaw),
            initDataRaw,
            version: '7.2',
            platform: 'tdesktop'
        })
        console.log('Mock Telegram environment initialized')
    }
}

initializeTelegramSDK()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
