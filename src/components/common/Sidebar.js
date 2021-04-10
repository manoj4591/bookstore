import React, { Component } from 'react';
import './common.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

class Sidebar extends Component {
    constructor(props) {
        super(props);    
        this.state = {
            toggler : false,
            sidebarMini : false,
            activeSet: 3,
        };
    }

    getUrlDirection = (url, id) => {
        const { sidebarMini } = this.state;
        const { history, getMenuType} = this.props;
        if(id !== 1){
            history.push(url);
            this.setState({
                activeSet : id,
            });
        } else{
            getMenuType(!sidebarMini);
            this.setState(state => ({
                sidebarMini: !state.sidebarMini
            }));
        }
        
    }

    getToggler = () =>{
        this.setState(state => ({
            toggler: !state.toggler
        }));
    }

    getInnerHtml = (routes) => {
        const {activeSet} = this.state;
        return routes.map(item => {
            return (
                <li className={activeSet === item.id ? "active activeColor" : "active"}  key={item.id}>
                    <button type="button" onClick={() => this.getUrlDirection(item.path, item.id)}><span className="fa-stack fa-lg pull-left"><FontAwesomeIcon className="iconColor" icon={item.miniIcon} /></span>{item.name}</button>
                </li>
            );
        });
    }

    getMenuHtml = (routes) => {
        const {toggler, sidebarMini, activeSet} = this.state;
        return routes.map(item => {
            return (
                <li className={activeSet === item.id ? "active activeColor" : "active"} key={item.id}>
                    {item.collapse ? <button type="button" onClick={this.getToggler}><span className="fa-stack fa-lg pull-left"><FontAwesomeIcon className="iconColor" icon={item.icon} /></span>{sidebarMini ? "" : item.name} {item.collapse && !sidebarMini && <FontAwesomeIcon className="iconColor2" icon={faChevronDown} />}</button> : <button type="button" onClick={() => this.getUrlDirection(item.path, item.id)}><span className="fa-stack fa-lg pull-left"><FontAwesomeIcon className="iconColor" icon={item.icon} /></span>{sidebarMini ? "":item.name}</button> }
                    {item.collapse &&
                        <ul className={toggler ? "nav-pills nav-stacked" : "nav-pills nav-stacked hide"} style={{ listStyleType: "none" }}>
                            {this.getInnerHtml(item.views)}
                        </ul>
                    }
                </li>
            );
        });
    }

    render() {
        const { routes } = this.props;
        const { sidebarMini } = this.state;
        let menuItemHtml;
        if (routes) {
            menuItemHtml = this.getMenuHtml(routes);
        }
        return (
            <>
                <div className={sidebarMini ? "sidebar-wrapper mini" : "sidebar-wrapper"}>
                    <ul className="sidebar-nav nav-pills nav-stacked menu">
                        {menuItemHtml}
                    </ul>
                </div>
            </>
        );
    }
}
export default Sidebar;