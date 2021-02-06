import React, {Fragment, useEffect} from 'react';
import { Container, Card, Row, Image, Button } from 'react-bootstrap';

// Redux import
import { connect } from 'react-redux';
import { checkAlerts } from '../actions/kitchen';
import store from '../store';
import PropTypes from 'prop-types';

const KitchenAlert = ({ alerts }) => {
    useEffect(() => {
        store.dispatch(checkAlerts());
    }, []);

    let kAlerts = [];

    if(alerts !== null && alerts.length>0 ){
        return (
            <div>Found something</div>
        )
    } else {
        return (
            <div>
                <Card>
                    <h2>AI Kitchen Helper detects no mess.</h2>
                </Card>
            </div>
        );
    }
}


KitchenAlert.propTypes = {
    alerts: PropTypes.array.isRequired,
};


const mapStateToProps = state => ({
    alerts: state.alert,
});


export default connect(mapStateToProps, {
    checkAlerts,})(KitchenAlert);