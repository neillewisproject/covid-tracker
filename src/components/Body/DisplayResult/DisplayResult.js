import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import classes from './DisplayResult.module.css';

const DisplayResult = (country, httpRequestMode) => {

    const loading = useSelector(state => state.covidData.loading)
    const confirmed = useSelector(state => state.covidData.confirmed)
    const recovered = useSelector(state => state.covidData.recovered)
    const critical = useSelector(state => state.covidData.critical)
    const deaths = useSelector(state => state.covidData.deaths)
    const httpRequestStatus = useSelector(state => state.covidData.httpRequestStatus)
    
    useEffect(() => {

    }, [loading, httpRequestStatus])

    let result = ''

    if (loading) {
        result = <><p>loading</p></>
    }
    

    if(httpRequestStatus) {
        result = (
            <>
                <div className={classes.rowData}>
                    <div>
                        <p>Confirmed</p>
                        <p>{confirmed}</p>
                    </div>
                    <div>
                        <p>Recovered</p>
                        <p>{recovered}</p>
                    </div>
                </div>
                <div className={classes.rowData}>
                    <div>
                        <p>Critical</p>
                        <p>{critical}</p>
                    </div>
                    <div>
                        <p>Deaths</p>
                        <p>{deaths}</p>
                    </div>
                </div>
            </>
        )
    }

    return(
        <div className={classes.result}>
            {result}
        </div>  
    )
}

export default DisplayResult;