import React, { Component } from 'react'
import ExampleReduxComponent from './ExampleReduxComponent'


class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="header">
          <h1 className="title">
            julian soro 
            <span title="🥚 easter egg!" className="easter-egg"> ♥'s oculus</span>
          </h1>
          <pre style={{margin: '0 0 0.5em 0'}}>Software Engineer</pre>
        </header>

        <article>
          <p className="intro">
            I'm a software engineer with over 5 years experience building scalable 
            web applications. My active toolset includes Node.js, JavaScript, 
            React.js, Redis, AWS, PostgreSQL, and Java however I am not limited to
            these technologies. I design distributed, load-balanced systems, 
            tailoring the choice of technology and architecture to the unique 
            challenges at hand. 
          </p>
          <p>
            Developing software in 2018 is challenging, especially in the 
            JavaScript community. I try to hedge my bets by both 1) staying current 
            with trends in the greater community, and 2) staying grounded in 
            classical software wisdom from authors like Martin Fowler, Joel 
            Spolsky, and the Gang of Four.
          </p>
          <p>
            When I'm not programming, I like to explore diverse topics such as the 
            control problem in Artificial Intelligence, or the latest hardware 
            developments in VR/AR/XR at the VRLA Conference, or how to train for a 
            marathon, or even traditional wood working... I cannot help myself 
            from learning a new thing or reading a new book.
          </p>
          <p>
            In the meantime, enjoy this React Component using Redux example, 
            found in this&nbsp;
            <a href="https://github.com/julianfresco/udacity.react.p2/tree/master/src">
              Reddit Clone project
            </a>&nbsp;
            on &nbsp;<a href="https://github.com/julianfresco/">my github</a>.
          </p>

          <ExampleReduxComponent />
        </article>

      </div>
    )
  }
}

export default App
