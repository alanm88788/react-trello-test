import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MainLayout from './_Layout/MainLayout';
import RulesLayout from './_Layout/RulesLayout';
import InboxPage from './Inbox';
import SavedPage from './Saved';
import CalendarPage from './Calendar';
import FilesPage from './Files';
import PeoplePage from './People';
import RulesPage from './Rules';
import RuleActivity from './RuleActivity';
import RuleExplore from './RuleExplore';
import RuleAchived from './RuleAchived';

const MainRoutes = () => {
  return (
    <MainLayout>
      <Switch>
        <Redirect exact from="/" to="/inbox" />
        <Route exact path="/inbox" component={InboxPage} />
        <Route exact path="/saved" component={SavedPage} />
        <Route exact path="/calendar" component={CalendarPage} />
        <Route exact path="/files" component={FilesPage} />
        <Route exact path="/people" component={PeoplePage} />
      </Switch>
    </MainLayout>
  );
};

const RuleRoutes = () => {
  return (
    <RulesLayout>
      <Switch>
        <Route exact path="/rules" component={RulesPage} />
        <Route exact path="/rules/activity" component={RuleActivity} />
        <Route exact path="/rules/explore" component={RuleExplore} />
        <Route exact path="/rules/achived" component={RuleAchived} />
      </Switch>
    </RulesLayout>
  );
};

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/rules" component={RuleRoutes} />
        <Route path="/" component={MainRoutes} />
      </Switch>
    </Router>
  );
};

export default Routes;
