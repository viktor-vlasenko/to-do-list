import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (
                <Button
                    color={showAdd ? 'grey' : 'green'}
                    text={showAdd ? 'Close' : 'Add new task'}
                    onClick={onAdd}
                />
            )}
        </header>
    )
}

Header.defaultProps = {
    title: 'To Do List',

}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header