import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Features/Dashboard';
import GeneralJournal from '../Features/GeneralJournal';
import TrialBalance from '../Features/TrialBalance';
import FinancialStatement from '../Features/FinancialStatement';
import ClosingEntry from '../Features/ClosingEntries/index';

function RouterSwitch() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/general-journal" component={GeneralJournal} />
      <Route exact path="/trial-balance" component={TrialBalance} />
      <Route exact path="/financial-statement" component={FinancialStatement} />
      <Route exact path="/closing-entry" component={ClosingEntry} />
    </Switch>
  );
}

export default RouterSwitch;
