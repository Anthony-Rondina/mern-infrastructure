import { useState } from 'react';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import { Route, Routes } from 'react-router-dom'
function App() {
  const [user, setUser] = useState(null)
  return (
    <main className="App">
      {user ?
        <Routes>
          <Route path="/orders/new" element={<NewOrderPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
        </Routes>
        :
        <AuthPage setUser={setUser}/>
      }
      
    </main>
  );
}

export default App;
