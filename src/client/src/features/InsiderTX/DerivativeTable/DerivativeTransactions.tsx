import { DownSquareOutlined, RightSquareOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react"
import { generateId } from "../../../helpers"






interface DerivativeTransactionsProps {
    derivativeTransactions?: any
}


export default function DerivativeTransactions(props: DerivativeTransactionsProps) {

    const [rows, setRows] = useState<any>([])


    useEffect(() => {
        if (props.derivativeTransactions) {
            const transactionRows = Object.entries(props.derivativeTransactions)?.map((tx: any) => {
                return (
                    <DTxRowRender transaction={tx} key={`${generateId()}-DTxRow`}/>
                )
            }) || []
            setRows(transactionRows)
        }
    }, [props.derivativeTransactions])


    return (
        <div className='deriv-transactions'>
            {
                rows?.length
                ? (
                    rows
                ) : (
                    <div className='holding-row'>
                        No Derivative Transactions
                    </div>
                )
            }
        </div>
    )
}




interface RowProps {
    transaction?: any
}

function DTxRowRender(props: RowProps) {

    const [expanded, setExpanded] = useState<boolean>(false)

    const onExpandRow = (value: boolean) => {
        setExpanded(value)
        console.log('expand', value)
    }

    return (
        <div className='transaction-row'>
            <div 
                className="flex transaction-banner"
                onClick={() => onExpandRow(!expanded)}
            >
                {
                    !expanded
                    ? (
                        <RightSquareOutlined className='toggle-expand expand-icon'/>
                    )
                    : (
                        <DownSquareOutlined className='toggle-expand expand-icon'/>
                    )
                }
                <span className="filing-text">{props.transaction[0]}</span>
            </div>
            {
                expanded 
                ? (
                    <div className="brdr-l ml-2">
                        <div>
                            <span className="tx-t">-</span>
                            <span className="tx-t">Security Title: </span>
                            <span className="tx-v">{props.transaction[1]?.securityTitle}</span>
                        </div>
                        <div>
                            <span className="tx-t">-</span>
                            <span className="tx-t">Acquired or Disposed of Code : </span>
                            <span className="tx-v">{props.transaction[1]?.transactionAcquiredDisposedCode}</span>
                        </div>
                        <div>
                            <span className="tx-t">-</span>
                            <span className="tx-t">Transaction Code : </span>
                            <span className="tx-v">{props.transaction[1]?.transactionCode}</span>
                        </div>
                        <div>
                            <span className="tx-t">-</span>
                            <span className="tx-t">Transaction Date : </span>
                            <span className="tx-v">{props.transaction[1]?.transactionDate}</span>
                        </div>
                        <div>
                            <span className="tx-t">-</span>
                            <span className="tx-t">Underlying Security Title : </span>
                            <span className="tx-v">{props.transaction[1]?.underlyingSecurityTitle}</span>
                        </div>
                        <div>
                            <span className="tx-t">-</span>
                            <span className="tx-t">Transaction Price Per Share : </span>
                            <span className="tx-v">{props.transaction[1]?.transactionPricePerShare}</span>
                        </div>
                        <div>
                            <span className="tx-t">-</span>
                            <span className="tx-t">Transaction Shares : </span>
                            <span className="tx-v">{props.transaction[1]?.transactionShares}</span>
                        </div>
                        <div>
                            <span className="tx-t">-</span>
                            <span className="tx-t">Underlying Security Shares : </span>
                            <span className="tx-v">{props.transaction[1]?.underlyingSecurityShares}</span>
                        </div>
                        <div>
                            <span className="tx-t">-</span>
                            <span className="tx-t">Conversion Or Exercise Price: </span>
                            <span className="tx-v">{props.transaction[1]?.conversionOrExercisePrice}</span>
                        </div>
                        <div>
                            <span className="tx-t">-</span>
                            <span className="tx-t">Deemed Execution Date: </span>
                            <span className="tx-v">{props.transaction[1]?.deemedExecutionDate}</span>
                        </div>
                        <div>
                            <span className="tx-t">-</span>
                            <span className="tx-t">Direct or Indirect Ownership: </span>
                            <span className="tx-v">{props.transaction[1]?.directOrIndirectOwnership}</span>
                        </div>
                        <div>
                            <span className="tx-t">-</span>
                            <span className="tx-t">Equity Swaps Involved: </span>
                            <span className="tx-v">{props.transaction[1]?.equitySwapsInvolved}</span>
                        </div>
                        <div>
                            <span className="tx-t">-</span>
                            <span className="tx-t">Exercise Date : </span>
                            <span className="tx-v">{props.transaction[1]?.exerciseDate}</span>
                        </div>
                        <div>
                            <span className="tx-t">-</span>
                            <span className="tx-t">Exipration Date : </span>
                            <span className="tx-v">{props.transaction[1]?.expirationDate}</span>
                        </div>
                        <div>
                            <span className="tx-t">-</span>
                            <span className="tx-t">Shares Owned Following Transaction : </span>
                            <span className="tx-v">{props.transaction[1]?.sharesOwnedFollowingTransaction}</span>
                        </div>
                        
                        <div>
                            <span className="tx-t">-</span>
                            <span className="tx-t">Transaction Form Type : </span>
                            <span className="tx-v">{props.transaction[1]?.transactionFormType}</span>
                        </div>
                        
                        <div>
                            <span className="tx-t">-</span>
                            <span className="tx-t">Transaction Timliness : </span>
                            <span className="tx-v">{props.transaction[1]?.transactionTimeliness}</span>
                        </div>
                        
                        
                    </div>
                ) : null
            }
        </div>
    )
}