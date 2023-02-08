import React, { useEffect, useState } from 'react'
import DerivativeHoldings from './DerivativeHoldings'
import DerivativeTransactions from './DerivativeTransactions'
import './styles.css'


interface DerivativeTableProps {
    filing?:any
}

export default function DerivativeTable(props: DerivativeTableProps) {

    const [derivativeTableData, setDerivativeTableData] = useState<any>()


    useEffect(() => {
        setDerivativeTableData(props.filing?.derivativeTable)
    }, [props.filing])


    return (
        <div>
            <div className='deriv-transactions-wrapper'>
                <DerivativeTransactions derivativeTransactions={derivativeTableData?.derivativeTransactions}/>
            </div>
            <div className='divider'/>
            <div className='deriv-holdings-wrapper'>
                
                <DerivativeHoldings derivativeHoldings={derivativeTableData?.derivativeHoldings}/>
            </div>
        </div>
    )
}



