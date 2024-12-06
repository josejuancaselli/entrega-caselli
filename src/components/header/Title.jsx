import { Link } from 'react-router-dom'
import './header.css';

const Title = () => {
    return (
        <div className='title'>
            <Link to="/"><h1>Desde La Silla</h1></Link>
        </div>
    )
}

export default Title