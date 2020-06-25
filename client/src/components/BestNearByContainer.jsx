import React from 'react';
import PropTypes from 'prop-types';
import BestNearbyRestaurants from './BestNearByRestaurantsDetail';

const getRandomNumRestaurants = () => Math.floor(Math.random() * 20);
const getRandomNumAttractions = () => Math.floor(Math.random() * 10);
const getRandomNearbyDist = () => Math.floor(Math.random() * (100 - 10)) / 10;

const BestNearByContainer = ({ location, restaurants }) => (
    <div>
      <div className="bestnearby-container">
        <div className="bestnearby-header">
          Best nearby
          <span id="bestnearby-header-icon-container">
            <span id="bestnearby-header-icon"></span>
          </span>
        </div>
      </div>
      <div className="bestnearby-summarybar">
        <div id="bestnearby-summarybar-rest">
          <span id="bestnearby-summarybar-rest-val">{getRandomNumRestaurants()}</span>
          <span id="bestnearby-summarybar-rest-text">
            <span id="bestnearby-summarybar-rest-text-1">Restaurants</span>
            <span id="bestnearby-summarybar-rest-text-dist">{`within ${getRandomNearbyDist()} miles`}</span>
          </span>
        </div>
          <div id="bestnearby-summarybar-att">
            <span id="bestnearby-summarybar-att-val">{getRandomNumAttractions()}</span>
            <span id="bestnearby-summarybar-att-text">
              <span id="bestnearby-summarybar-att-text-1">Other Attractions</span>
              <span id="bestnearby-summarybar-att-text-dist">{`within ${getRandomNearbyDist()} miles`}</span>
            </span>
          </div>
      </div>
      <BestNearbyRestaurants parentLocation={location} restaurants={restaurants} />
    </div>
  )

BestNearByContainer.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.number,
    long: PropTypes.number,
  }).isRequired,
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BestNearByContainer;
