import axios from 'axios';
import localForage from 'localforage';
import {setupCache} from 'axios-cache-adapter';

const cache = setupCache({
    maxAge: 60*60*1000,
    store: localForage,
    exclude:{
        query: false
    }
});

const axiosInstance = axios.create ({
    baseURL : 'https://www.alphavantage.co/query'
});

export const getDailyChartForSymbol=(symbol)=>{
    return axiosInstance.get('', {
        params:{
            function : 'TIME_SERIES_DAILY',
            symbol,
            apikey : 'DTRF1DVJESUY2O3Q'
        }
    })
}