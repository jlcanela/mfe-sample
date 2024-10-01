import React, { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

import counterWrapper from 'remote/counterWrapper';

import './index.css'

const App = () => {
  const divRef = useRef(null);

  useEffect(() => {
    counterWrapper(divRef.current);
  });
  return (

    <div className="container">
    <div>Name: react-host</div>
    <div ref={divRef}></div>
  </div>
  )
}
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)