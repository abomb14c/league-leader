import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapDispatchToProps, mapStateToProps } from './App';
import { shallow } from 'enzyme';
import { fetchEnglandScores, fetchNbaTeams } from '../../apiCalls/apiCalls';

jest.mock('./../../apiCalls/apiCalls');
describe('App', () => {
  let wrapper;
  let mockHandleEnglishSoccer;
  let mockHandleNba;

  beforeEach(() => {
    mockHandleEnglishSoccer = jest.fn();
    mockHandleNba = jest.fn();

    wrapper = shallow(<App 
      handleEnglishSoccer={mockHandleEnglishSoccer}
      handleNba={mockHandleNba}
    />, { disableLifecycleMethods: true });
  });
  
  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

  it('getSoccerData should call fetchEnglandScores on pageload', async () => {
    
    await wrapper.instance().getSoccerData();

    expect(fetchEnglandScores).toHaveBeenCalled();
  });

  it('getNbaData should call fetchNbaTeams on pageload', async () => {
    
    await wrapper.instance().getNbaData();

    expect(fetchNbaTeams).toHaveBeenCalled();
  });
});