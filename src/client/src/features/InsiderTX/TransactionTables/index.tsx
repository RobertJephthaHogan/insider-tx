import DerivativeTable from '../DerivativeTable'
import NonDerivativeTable from '../NonDerivativeTable'
import './styles.css'


interface TransactionTablesProps {
    filing?: any
}

export default function TransactionTables(props : TransactionTablesProps) {

    return (
        <div className='tx-tables'>
            <div className='w-100'>
                <div className='m-1 ml-0 w-100'>
                    Non-Derivative Table:
                </div>
                <div className='non-derivative-table'>
                    <NonDerivativeTable filing={props.filing}/>
                </div>
            </div>    
            
            <div className='w-100'>
                <div className='m-1 ml-0 w-100'>
                    Derivative Table:
                </div>
                <div className='derivative-table'>
                    <DerivativeTable filing={props.filing}/>
                </div>
            </div> 
        </div>
    )
}