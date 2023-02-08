import { DownSquareOutlined, RightSquareOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react"
import { generateId } from "../../../helpers"



interface NonDerivativeHoldingsProps {
    nonDerivativeHoldings?: any
}


export default function NonDerivativeHoldings(props: NonDerivativeHoldingsProps) {

    const [rows, setRows] = useState<any>([])


    useEffect(() => {
        if (props.nonDerivativeHoldings) {
            const holdingRows = Object.entries(props.nonDerivativeHoldings)?.map((tx: any) => {
                return (
                    <NdHRowRender holding={tx} key={`${generateId()}-NdHRow`}/>
                )
            }) || []
            setRows(holdingRows)
        }
    }, [props.nonDerivativeHoldings])



    return (
        <div className='non-deriv-holdings'>
            {
                rows?.length
                ? (
                    rows
                ) : (
                    <div className='holding-row'>
                        No Non-Derivative Holdings
                    </div>
                )
            }
        </div>
    )
}





interface RowProps {
    holding?: any
}

function NdHRowRender(props: RowProps) {

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
                            <span className="tx-t">Shares Owned Following Transaction: </span>
                            <span className="tx-v">{props.holding[1]?.sharesOwnedFollowingTransaction}</span>
                        </div>
                        <div>
                            <span className="tx-t">-</span>
                            <span className="tx-t">Nature of Ownership: </span>
                            <span className="tx-v">{props.holding[1]?.natureOfOwnership}</span>
                        </div>
                        <div>
                            <span className="tx-t">-</span>
                            <span className="tx-t"> Direct or Indirect Ownership: </span>
                            <span className="tx-v">{props.holding[1]?.directOrIndirectOwnership}</span>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )

}