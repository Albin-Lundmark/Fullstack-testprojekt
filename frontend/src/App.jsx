import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [accounts, setAccounts] = useState([])
  useEffect(() => {
    fetch('/accounts')
    .then((response) => response.json())
    .then(data => setAccounts(data))
  }, [])


  return (
    <div>
      <h1>Accounts</h1>
      <ul>
        {accounts.map((account) =>
          <li key={account.id}>{account.email}</li>
        )}
      </ul>
    </div>
  )
}

export default App
