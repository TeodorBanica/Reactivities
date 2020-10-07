import React, {useEffect, Fragment, useContext} from 'react';
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import NavBar from '../../features/nav/Navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
//import { Route } from 'react-router-dom';
//import HomePage from '../../features/home/HomePage';
//import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityStore from '../stores/activityStore';
import { observer } from 'mobx-react-lite';


const App = () => {

    const activityStore = useContext(ActivityStore);

    useEffect(() =>{
        activityStore.loadActivities();
    }, [activityStore]);

    if(activityStore.loadingInitial) return <LoadingComponent content='Loading activities...' />

    return (
      <Fragment >
        <NavBar />
        <Container style={{marginTop: '7em'}}>     
          <ActivityDashboard />  
        </Container>
      </Fragment>
    );

}

export default observer(App);
