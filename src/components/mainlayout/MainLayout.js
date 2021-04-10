import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import '../../css/styles.scss';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import routes from "../../routes";

class MainLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarMini: false
        };
    }
    
        getRoutes = (data) => {
            return data.map((prop) => {
                if (prop.collapse) {
                    return this.getRoutes(prop.views);
                }
                if (prop.layout) {
                    return (
                        <Route
                            exact
                            path={prop.path}
                            component={prop.component}
                            key={prop.id}
                        />
                    );
                } 
                return null;
          
            });
        };

        getMenuType = (data) =>{
            this.setState({sidebarMini : data});
        }

        render() {
            const {history} =this.props;
            const {sidebarMini} =this.state;
            return (
                <div className={sidebarMini ? "mainWrapper wrapbox" : "mainWrapper"}>
                    <Sidebar {...this.props}
                        routes={routes}
                        history={history}
                        getMenuType={this.getMenuType}
                    />
                    <Header isSideNavOpen={sidebarMini}></Header>
                    <div className="main-panel">
                        {routes && <Switch>{this.getRoutes(routes)}</Switch>}
                    </div>
                </div>
            );
        }
}
export default MainLayout;
