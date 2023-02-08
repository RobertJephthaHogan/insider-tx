import { DownSquareOutlined, RightSquareOutlined } from "@ant-design/icons"
import { useState } from "react"
import GeneralTXDetails from "../GeneralTXDetails"
import TransactionTables from "../TransactionTables"
import './styles.css'


interface TXRowProps {
    filing?: any
}

export default function TXRow (props: TXRowProps) {

    const [expanded, setExpanded] = useState<boolean>(false)

    const onExpandRow = (value: boolean) => {
        setExpanded(value)
    }

    return (
        <div 
            className='flex bordered fdc'
            id={`${props.filing._id}-filing-row-container`}
            key={`${props.filing._id}-filing-row-container`}
        >
            <div 
                className='w-100 p-1 toggle-expand' 
                onClick={() => onExpandRow(!expanded)}
                id={`${props.filing._id}-filing-row`}
                key={`${props.filing._id}-filing-row`}
            >
                {
                    !expanded
                    ? (
                        <RightSquareOutlined className='toggle-expand'/>
                    )
                    : (
                        <DownSquareOutlined className='toggle-expand'/>
                    )
                }
                <span className='filing-title'>{props.filing?._id}</span>
            </div>
            {
                expanded 
                ? (
                    <div className="tx-body">
                        <GeneralTXDetails filing={props.filing}/>
                        <TransactionTables filing={props.filing}/>
                    </div>
                ) 
                : null
            }
        </div>
    )
}


