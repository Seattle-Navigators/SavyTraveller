import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../client/src/components/App.jsx';
import CurrentAttInfo from '../../client/src/components/CurrentAttInfo.jsx';
import BestNearByContainer from '../../client/src/components/BestNearByContainer.jsx';

Enzyme.configure({ adapter: new Adapter() })
const shallow = Enzyme.shallow;
const mount = Enzyme.mount;

  test('Client App renders without crashing', () => {
    shallow(<App />);
  });

  describe('<CurrentAttInfo />', () => {
    it('should have a address element', () => {
      const wrapper = shallow(<CurrentAttInfo contact={{
        address: "1297 Kokfe Pike",
        website: "ruufe@ucekagow.nc",
        phonenumber: "(526) 770-3178",
        email: "tac@dis.am"
      }}/>);
      
      expect(wrapper.contains(<div id="current-attraction-location-header">Location</div>)).toEqual(true)
    })

    describe('<BestNearByContainer />', () => {
      const wrapper = shallow(<BestNearByContainer />);
      it('should have a random number of restaurant reviews less than 20', () => {
        const text = wrapper.find('#bestnearby-summarybar-rest-val').text();
        expect(Number(text)).toBeLessThanOrEqual(20);
      })

      it('should have a random number of attraction reviews less than 10', () => {
        const text = wrapper.find('#bestnearby-summarybar-att-val').text();
        expect(Number(text)).toBeLessThanOrEqual(10);
      })
      
      it('should have a random number of attraction reviews less than 10', () => {
        const text = wrapper.find('#bestnearby-summarybar-rest-text-dist').text().slice(7, 10);
        expect(Number(text)).toBeLessThanOrEqual(10);
      })
    })
  });
