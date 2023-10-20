// Creaintg a single Heading in react
// const heading = React.createElement('h1', {id:'heading'}, "Hello From React 🚀");

// creating this structure in React:

/* <div id="parent">
    <div id="children">
        <h1>Hello from React</h1>
    </div>
</div> */


// const heading = React.createElement('div', {
//     id: 'parent'
// }, React.createElement('div', {
//     id: 'children'
// }, React.createElement('h1', {}, "Hello from React 🚀 Part 2")));

// creating this structure in React:

/* <div id="parent">
    <div id="children">
        <h1>Hello from React</h1>
        <h2>Hello from React 2</h2>
    </div>
</div> */


const heading = React.createElement('div', {
    id: 'heading'
}, React.createElement('div', {
    id: 'children'
}, [React.createElement('h2', {}, 'Hello From React 🚀'),
    React.createElement('h2', {}, 'Namaste React 🚀')
]));



console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);