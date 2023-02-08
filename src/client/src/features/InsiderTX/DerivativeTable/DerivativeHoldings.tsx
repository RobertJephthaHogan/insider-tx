import { DownSquareOutlined, RightSquareOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react"
import { generateId } from "../../../helpers"





interface DerivativeHoldingsProps {
    derivativeHoldings?: any
}

export default function DerivativeHoldings(props: DerivativeHoldingsProps) {

    const [rows, setRows] = useState<any>([])


    useEffect(() => {
        if (props.derivativeHoldings) {
            const holdingRows = Object.entries(props.derivativeHoldings)?.map((tx: any) => {
                return (
                    <DHRowRender holding={tx} key={`${generateId()}-DHRow`}/>
                )
            }) || []
            setRows(holdingRows)
        }
    }, [props.derivativeHoldings])



    return (
        <div className='deriv-holdings'>
            {
                rows?.length
                ? (
                    rows
                ) : (
                    <div className='holding-row'>
                        No Derivative Holdings
                    </div>
                )
            }
        </div>
    )
}





interface RowProps {
    holding?: any
}

function DHRowRender(props: RowProps) {

    const [expanded, setExpanded] = useState<boolean>(false)

    const onExpandRow = (value: boolean) => {
        setExpanded(value)
        console.log('expand', value)
    }

    return (
        <div className='holding-row'>
            <div 
                className="flex holding-banner"
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
                <span className="filing-text">{props.holding[0]}</span>
            </div>
            {
                expanded 
                ? (
                    <div className="brdr-l ml-2">
                        <div>
                            <span className="tx-t">-</span>
                            <span className="tx-t">Security Title: </span>
                            <span className="tx-v">{props.holding[1]?.securityTitle}</span>
                        </div>
                        <div>
                            <span className="tx-t">-</span>
                            <span className="tx-t">Underlying Security Title: </span>
                            <span className="tx-v">{props.holding[1]?.underlyingSecurityTitle}</span>
                        </div>
                        <div>
                            <span className="tx-t">-</span>
                            <span className="tx-t">Conversion Or Exercise Price: </span>
                            <span className="tx-v">{props.holding[1]?.conversionOrExercisePrice}</span>
                        </div>
                        <div>
                            <span className="tx-t">-</span>
                            <span className="tx-t"> Direct or Indirect Ownership: </span>
                            <span className="tx-v">{props.holding[1]?.directOrIndirectOwnership}</span>
                        </div>
                        <div>
                            <span className="tx-t">-</span>
                            <span className="tx-t">Exercise Date: </span>
                            <span className="tx-v">{props.holding[1]?.exerciseDate}</span>
                        </div>
                        <div>
                            <span className="tx-t">-</span>
                            <span className="tx-t">Expiration Date: </span>
                            <span className="tx-v">{props.holding[1]?.expirationDate}</span>
                        </div>
                        <div>
                            <span className="tx-t">-</span>
                            <span className="tx-t">Shares Owned Following Transaction: </span>
                            <span className="tx-v">{props.holding[1]?.sharesOwnedFollowingTransaction}</span>
                        </div>
                        <div>
                            <span className="tx-t">-</span>
                            <span className="tx-t">Underlying Security Shares: </span>
                            <span className="tx-v">{props.holding[1]?.underlyingSecurityShares}</span>
                        </div>
                        <div>
                            <span className="tx-t">-</span>
                            <span className="tx-t">Value Owned Following Transaction: </span>
                            <span className="tx-v">{props.holding[1]?.valueOwnedFollowingTransaction}</span>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )

}