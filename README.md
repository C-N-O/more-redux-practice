# I am using this App to learn react-redux

I have 3 components: Apples, Oranges, Mangoes

By default I have 50 Apples, 30 Oranges, and 80 Mangoes

Each will have their components and have them all displayed on the screen. Each component, with have an increment and decrement button

# Steps to setting up Redux with my React App

npm install redux react-redux

# inside the Projects index.js

import { createStore } from 'redux'; // This is in the index.js file of the Project

# actions

create a folder 'actions' and create an index.js file and add and export all the actions needed by the App

# reducers

create a reducer folder that has an index.js and all the reducer files needed, and export default each file

# combine Reducers

since we have multiple reducers, we need to combine them, and we use combineReducers. In the reducers folder in the index.js file,
import {combineReducers} from 'redux'
import all the reducers in the reducers folder;
combine all the reducers and store in a variable
export default the variable

# import the combined reducers

import allReducers into the projects index.js like
import allReducers from './reducers'
We do not need the './reducers/index' because Webpack will automatically look into the index.js file

# we create a store

const store = createStore(allReducers);

# optional

we can add
window.**REDUX_DEVTOOLS_EXTENSION** && window.**REDUX_DEVTOOLS_EXTENSION**()
as the second argument to createStore. This will allow us see our various states in the redux dev tools

# connect the store to our React App

We do this by importing Provider from 'react-redux'

import {Provider} from 'react-redux

# wrap the Provider around our App and pass the store as props

<Provider store={store}>
    <App />
    </Provider>

# In any component, you can get access to any piece of state that you want

The Provider allows all components have access to the store
In the component import {useSelector, useDispatch} from 'react-redux'. This is a pair of custom React hooks that allow your React components to interact with the Redux store.
In the component, you can then get access to the specific state relevant to that component

For exmaple, the Apple's component needs the apples state

const myApple = useSelector(state => state.countApple)

# import the action that the component needs

For the apple component
import { incrementApples, decrementApples } from '../actions';

# create a dispatch variable

const dispatch = useDispatch();

# on button click, increment or decrement the state

onClick={() => dispatch(decrementApples())
onClick={() => dispatch(incrementApples())
