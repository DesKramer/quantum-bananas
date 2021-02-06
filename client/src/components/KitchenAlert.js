import React, {Fragment, useEffect} from 'react';
import { Container, Card, Row, Image, Button } from 'react-bootstrap';

// Redux import
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getKitchen } from '../actions/kitchen';
import store from '../store';

const KitchenAlert = ( {items} ) => {
    useEffect(() => {
        store.dispatch(getKitchen());
    }, []);
    
    
    if(items !== null && items.length > 0 ){
        console.log("Items" + items);
        return (
            <div>
                <h2>Found something</h2>
                {/* <p>{items.kitchen}</p> */}
            </div>
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
    items: PropTypes.array.isRequired,
};


const mapStateToProps = state => ({
    items: state.kitchen,
});


export default connect(mapStateToProps, {
    getKitchen,})(KitchenAlert);