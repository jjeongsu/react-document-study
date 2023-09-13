function reducer(state, action) {
  if (state === undefined) {
    return { color: 'yellow' };
  }
  if (action.type === 'CHANGE_COLOR') {
    console.log('이번의 action', action);
    const newState = Object.assign({}, state, { color: action.color });
    return newState;
  }
}
const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
console.log('store.getState()', store.getState());
const currentState = store.getState();

//RED
function red() {
  const state = store.getState(); //{color:"yellow"}
  document.querySelector('#red').innerHTML = `
      <div class='container' id='component_red' style="background-color:${state.color}">
        <h1>red</h1>
        <input type = 'button' value='fire' onclick="
          store.dispatch({type:'CHANGE_COLOR', color:'red'});
        "/>
        </div>
        `;
}
store.subscribe(red); //state값이 바뀔때 마다 red 함수가 호출됨. 음 근데 state 중에서도 color값이 바뀔때만 호출하면 안되나??
red();

//BLUE
function blue() {
  const state = store.getState(); //{color:"yellow"}
  document.querySelector('#blue').innerHTML = `
      <div class='container' id='component_blue' style="background-color:${state.color}">
        <h1>blue</h1>
        <input type = 'button' value='fire' onclick="
          store.dispatch({type:'CHANGE_COLOR', color:'blue'});
        "/>
        </div>
        `;
}
store.subscribe(blue);
blue();

//GREEN
function green() {
  const state = store.getState(); //{color:"yellow"}
  document.querySelector('#green').innerHTML = `
      <div class='container' id='component_green' style="background-color:${state.color}">
        <h1>green</h1>
        <input type = 'button' value='fire' onclick="
          store.dispatch({type:'CHANGE_COLOR', color:'green'});
        "/>
        </div>
        `;
}
store.subscribe(green);
green();
