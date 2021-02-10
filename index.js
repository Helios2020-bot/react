import {combineReducers} from 'redux';
import images from './image-reducers';

const allReducers= combineReducers({
    allimages: images 
});

export default allReducers;