import { DownSquareOutlined, RightSquareOutlined } from '@ant-design/icons'
import { message, Spin } from 'antd'
import { useEffect, useState } from 'react'
import TXRow from '../../features/InsiderTX/TXRow'
import { filterByValue } from '../../helpers'
import './styles.css'



export default function InsiderTX() {

    const [distanceToTop, setDistanceToTop] = useState<any>(0)
    const [insiderTXs, setInsiderTxs] = useState<any>([])
    const [txStream, setTXStream] = useState<any>([])
    const [txComponents, setTXComponents] = useState<any>()
    const [loading, setLoading] = useState<any>(true)




    function toTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => { // Add Scroll event listener
        document?.addEventListener("scroll", scrollToSection);
    })


    useEffect(() => { // Remove Scroll event listener cleanup on unmount
        return () => {
            document?.removeEventListener("scroll", scrollToSection);
        } 
    })

    function scrollToSection() {
        setDistanceToTop(window?.scrollY)
    }


    useEffect(() => {

        let ws = new WebSocket('ws://localhost:8000/ws')

        ws.onmessage = (event: any) => {
            let message = JSON.parse(event.data)
            console.log(message)
            setTXStream((currentData: any) => [...currentData, message])
        }

        return function cleanup() {
            ws.close()
        }

    }, [])
    

    useEffect(() => { // when collection mode is off, the last 100 filings are streamed even if 100 are not new, this filters duplicates
        txStream?.forEach((tx: any) => {
            const filtered = filterByValue(insiderTXs, tx?._id)
            if (filtered?.length === 0) { 
                setInsiderTxs((currentData: any) => [...currentData, tx])
                setLoading(false)
            }
        })
        
    }, [txStream])


    useEffect(() => {

        const rows = insiderTXs?.map((tx: any) => {// dynamically generate new filing rows when insider transactions update
            return (
                <TXRow 
                    key={`${tx._id}-wrapper`} 
                    filing={tx}
                />
            )
        }) || []
        setTXComponents(rows)

    }, [insiderTXs])


    return (
        <div className="insider-tx">
            <div className='insider-tx-banner'>
                
                <div className='banner-text'>
                    <h1 className='banner-title'>Insider Transactions feed</h1>
                    <h4 className='banner-description'> Below is an incoming stream of Form 4 filings sent from the websocket of my insider-tx project.</h4>
                </div>
            </div>
            <h1 className='pl-2 pt-2'>Transactions:</h1>
            <div>
                {
                    !loading
                    ? (
                        null
                    ) : (
                        <div className='loading-bg'>
                            <div style={{ margin: 'auto'}}>
                                <div className='flex fdc'>
                                    <div className='flex jc-c pb-2' style={{margin: 'auto'}}>
                                        <span className="loader"></span>
                                    </div>
                                    <span style={{color:'white'}}>Connecting to Insider Transactions Websocket...</span>
                                    <span  style={{color:'white', margin: 'auto'}}>This may take a few moments.</span>
                                </div>
                            </div>
                        </div>
                    )
                }
                {txComponents?.reverse()}
            </div>
            {
                distanceToTop > 0
                ? <button className='scroll-to-top' onClick={toTop}>Scroll To Top</button>
                : null
            }
        </div>
    )
}


