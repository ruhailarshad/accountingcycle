import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../Features/Dashboard';
import GeneralJournal from '../Features/GeneralJournal';
import TrialBalance from '../Features/TrialBalance';


function RouterSwitch() {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/general-journal" component={GeneralJournal} />
            <Route exact path="/trial-balance" component={TrialBalance} />
        </Switch>
    )
}

export default RouterSwitch;
