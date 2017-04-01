import React from 'react';
import { Link } from 'react-router-dom';
import ActiveUsers from './ActiveUsers';

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <Link to="/single">Single player</Link>
                <Link to="/multi">Multiplayer</Link>

                <ActiveUsers />
            </div>
        );
    }
}

export default Welcome;
