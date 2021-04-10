import React, { Component } from 'react';
import './common.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
    render() {
        const {isSideNavOpen } = this.props;
        return (
            <>
                <div className={isSideNavOpen ? "header smallHeader" : "header"}>
                    <div className="iconset">
                        <FontAwesomeIcon className="iconColorbox" icon={faCommentDots} />
                    </div>
                    <div className="name">
                        <span className="atom">atom</span>
                    </div>
                </div>
            </>
        );
    }
}
export default Header;