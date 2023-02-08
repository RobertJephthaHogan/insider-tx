import React from 'react'

import './styles.css'




interface GeneralTXDetailsProps {
    filing?: any
}


export default function GeneralTXDetails(props : GeneralTXDetailsProps) {

    return (
        <div className='tx-details'>
            <div className='m-1'>
                General Filing Information:
            </div>
            <div className='general-tx-details'>
                <div className='general-info-section brdr-r'>
                    <div className='general-info-row'>
                        <span className='gen-info-sec-title'>Document Type:</span> 
                        <span className='gen-info-sec-value'>{props.filing?.documentType}</span>
                    </div>
                    <div className='general-info-row'>
                        <span className='gen-info-sec-title'>Officer Title:</span> 
                        <span className='gen-info-sec-value'>{props.filing?.officerTitle}</span>
                    </div>
                    <div className='general-info-row'>
                        <span className='gen-info-sec-title'>Other Title:</span> 
                        <span className='gen-info-sec-value'>{props.filing?.otherTitle}</span>
                    </div>
                    <div className='general-info-row'>
                        <span className='gen-info-sec-title'>Reporting Owner CIK:</span> 
                        <span className='gen-info-sec-value'>{props.filing?.rptOwnerCik}</span>
                    </div>
                    <div className='general-info-row'>
                        <span className='gen-info-sec-title'>Reporting Owner Name:</span> 
                        <span className='gen-info-sec-value'>{props.filing?.rptOwnerName}</span>
                    </div>
                </div>
                <div className='general-info-section brdr-r'>
                    <div className='general-info-row'>
                        <span className='gen-info-sec-title'>Issuer Trading Symbol:</span> 
                        <span className='gen-info-sec-value'>{props.filing?.issuerTradingSymbol}</span>
                    </div>
                    <div className='general-info-row'>
                        <span className='gen-info-sec-title'>Issuer CIK:</span> 
                        <span className='gen-info-sec-value'>{props.filing?.issuerCik}</span>
                    </div>
                    <div className='general-info-row'>
                        <span className='gen-info-sec-title'>Issuer Name:</span> 
                        <span className='gen-info-sec-value'>{props.filing?.issuerName}</span>
                    </div>
                    <div className='general-info-row'>
                        <span className='gen-info-sec-title'>Issuer Quote:</span> 
                        <span className='gen-info-sec-value'>{props.filing?.issuerStockQuote}</span>
                    </div>
                    <div className='general-info-row'>
                        <span className='gen-info-sec-title'>Issuer Market Cap:</span> 
                        <span className='gen-info-sec-value'>{props.filing?.issuerMarketCap}</span>
                    </div>
                </div>
                <div className='general-info-section brdr-r'>
                    <div className='general-info-row'>
                        <span className='gen-info-sec-title'>Filing Accession Number:</span> 
                        <span className='gen-info-sec-value'>{props.filing?._id?.split('-')?.[1]}</span>
                    </div>
                    <div className='general-info-row'>
                        <span className='gen-info-sec-title'>Period Of Report:</span> 
                        <span className='gen-info-sec-value'>{props.filing?.periodOfReport}</span>
                    </div>
                    <div className='general-info-row'>
                        <span className='gen-info-sec-title'>Schema Version:</span> 
                        <span className='gen-info-sec-value'>{props.filing?.schemaVersion}</span>
                    </div>
                </div>
                <div className='general-info-section'>
                    <div className='general-info-row'>
                        <span className='gen-info-sec-title'>Is Director?:</span> 
                        <span className='gen-info-sec-value'>{props.filing?.isDirector}</span>
                    </div>
                    <div className='general-info-row'>
                        <span className='gen-info-sec-title'>is Officer?:</span> 
                        <span className='gen-info-sec-value'>{props.filing?.isOfficer}</span>
                    </div>
                    <div className='general-info-row'>
                        <span className='gen-info-sec-title'>Is Ten Percent Owner?:</span> 
                        <span className='gen-info-sec-value'>{props.filing?.isTenPercentOwner}</span>
                    </div>
                    <div className='general-info-row'>
                        <span className='gen-info-sec-title'>Is Other?:</span> 
                        <span className='gen-info-sec-value'>{props.filing?.isOther}</span>
                    </div>
                    <div className='general-info-row'>
                        <span className='gen-info-sec-title'>Not Subject to Sec. 16? :</span> 
                        <span className='gen-info-sec-value'>{props.filing?.notSubjectToSection16}</span>
                    </div>
                </div>
                <div className='v-divider'/>
            </div>
        </div>
    )
}