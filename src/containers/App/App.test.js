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

describe('mapDispatchToProps', () => {
  it('should call dispatch on handleEnglishSoccer with the correct params', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    const soccerData = [{}, {}, {}];
    const mockAction = {
      type:"ADD_ENGLISH_SOCCER",
      EPL: soccerData
    };
    mappedProps.handleEnglishSoccer(soccerData);

    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });

  it('should call dispatch on handleError with the correct params', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    const nbaStats = {};
    const mockAction = {
      type:"ADD_NBA",
      NBA: nbaStats
    };

    mappedProps.handleNba(nbaStats);

    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });
});