// we are currently working with Vanilla JS
// DOM - document object model - important for user interfaces, important for react. 
// DOM is the way JS is connected to HTML.
// DOM is representation in HTML as a JS object
// react is manipulating DOM. Modifying html that shows up on the page through JS. 
// React is doing it in a smart and efficient way. 


// JS version below


// console.log(document); 
// // above prints your html document in the console - document refers to html. 
// // do not name anything else document

// const incrementBtn = document.getElementById('increment-btn')
// // console.log(incrementBtn)

// const countDisplay = document.getElementById('count-display')
// // console.log(countDisplay)

// // countDisplay.innerText = '1'
// // above would update the number on html

// // incrementBtn.innerText = "+9"

// let currentCount = 0; // this should be represented on the browser

// incrementBtn.addEventListener('click', () => {
//     // alert("You clicked me")
// currentCount++     
// countDisplay.innerText = currentCount
// }); 

// the reason we need react if we are creating multiple counters.



// React version below



//now we will see how to do the same as above, but in React
// import React library
// add script tags to the head of HTML. 

// by adding script links to HTML, it will download react files
// console.log(React); 
// console.log(ReactDOM); 

const reactContentRoot = document.getElementById("root"); 

// ReactDOM.render('hello world', reactContentRoot); 
// // react DOM will render the content within ('',  into the bit that's noted second within )
// // react DOM can render things onto the browser. we can use React API - its library. 
// // render React elements. 

// // below in ():  name of element [html tag], props, content we are putting in the items
// const myFirstElement = React.createElement('ul', null, [
// // in here, we could add the item that goes in. it can be more complex than just an item: array
//     React.createElement('li', null, "item1"), 
//     React.createElement('li', null, "item2"), 
//     ]); 
// ReactDOM.render(myFirstElement, reactContentRoot); 
// // this is inside our root element
// // if you used ReactNative, it would render onto a mobile device or desktop. 

// the above does not look great. we can use jsx to replicate the code above. 

// jsx is a syntax similar to html

// babel

// we can use babel website https://babeljs.io/
// https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=DwVwNgfABAUF_2GAlhZAXApgWwIzAHoUI4EolUMcAmQ4uQ8EoA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.16.12&externalPlugins=&assumptions=%7B%7D
// we will copy the below or any html text into it: 
/* <ul> 
     <li>item1</li>
     <li>item2</li>
 </ul> */
// babel will convert it into JS code, as below: 
//  /*#__PURE__*/
//  React.createElement("ul", null, 
//  /*#__PURE__*/React.createElement("li", null, "item1"), 
//  /*#__PURE__*/React.createElement("li", null, "item2"))


// how can we use HTML code here and make it work? 
// we will add babel link to html script so it would convert the below to work.
// we will also change the type for script in html 
// if it is not working and i am getting the below error: 
// babel.min.js:13 You are using the in-browser Babel transformer. Be sure to precompile your scripts for production - https://babeljs.io/docs/setup/
// right click on your index.html file
// click on open in default browser 
// my VS Code does not have this option!! 
// if does not work, can also use: http-server npm https://www.npmjs.com/package/http-server


// const myJSXElement = (
// <ul> 
//      <li>item1</li>
//      <li>item2</li>
//  </ul> 
// );

// ReactDOM.render(myJSXElement, reactContentRoot); 

// we can interpolate JS into HTML. 
// can also use functions on them
// below JSX is not a valid JS, you have to pass it through transpilers. 
// browser will not be able to read it

// const myItem = 'item3'

// const myJSXElement = (
    // <ul> 
    //      <li>item1</li>
    //      <li>item2</li>
    //      <li>{myItem.toUpperCase()}</li>
    //  </ul> 
    // );

// above we are creating elements
// we can also create components
// component is a little container with elements inside of it
// it is good for reusability 
// JS function that returns JSX 

// const App = () => {
//     const myItem = 'item3'

//     return (
//     <ul> 
//     <li>item1</li>
//     <li>item2</li>
//     <li>{myItem.toUpperCase()}</li>
// </ul> 
//     )
// }

// ReactDOM.render(<App />, reactContentRoot)
// // can also write App() instead of <App />


// now we will move to an environment that is better for React 
// we will use a create react app 
// npm package
// https://reactjs.org/docs/create-a-new-react-app.html 
// it will add in babel and other bits. 
//
// need to have a node.js installed already. 








