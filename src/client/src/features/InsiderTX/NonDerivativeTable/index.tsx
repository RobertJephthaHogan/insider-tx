import { DownSquareOutlined, RightSquareOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import NonDerivativeHoldings from './NonDerivativeHoldings'
import NonDerivativeTransactions from './NonDerivativeTransactions'
import './styles.css'


interface NonDerivativeTableProps {
    filing?:any
}

export default function NonDerivativeTable(props: NonDerivativeTableProps) {

    const [nonDerivativeTableData, setNonDerivativeTableData] = useState<any>({})

    useEffect(() => {
        setNonDerivativeTableData(props.filing?.nonDerivativeTable)
    }, [props.filing])



    return (
        <div>
            <div className='non-deriv-transactions-wrapper'>
                <NonDerivativeTransactions nonDerivativeTransactions={nonDerivativeTableData?.nonDerivativeTransactions}/>
            </div>
            <div className='divider'/>
            <div className='non-deriv-holdings-wrapper'>
                
                <NonDerivativeHoldings nonDerivativeHoldings={nonDerivativeTableData?.nonDerivativeHoldings}/>
            </div>
        </div>
    )
}







