import React from 'react'
import Header from './Header'

const App = ({ children}) => (
  <div>
    <Header></Header>
    {children}
  </div>
)

export default App
