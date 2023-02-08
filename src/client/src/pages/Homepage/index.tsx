import { useNavigate } from "react-router-dom"



export function Homepage() {

    const navigate = useNavigate()

    return (
        <div>
            Hello Homepage!
            <button onClick={() => navigate('/login')}>
                Login
            </button>
            <button onClick={() => navigate('/signup')}>
                Signup
            </button>
            <button onClick={() => navigate('/insider-tx')}>
                See Insider Tx
            </button>
        </div>
    )
}