import { Link } from 'react-router-dom'
import './Header.css';

const Title = () => {
    return (
        <div className='title'>
            <Link to="/"><h1>Desde La Silla</h1></Link>
        </div>
    )
}

export default Title