import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { DataProvider } from "./data/useData";

import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Footer from "./components/Footer";
import NotFound from './components/NotFound'

import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
// import CartPage from "./components/CartPage";
// import PaymentPage from "./components/PaymentPage";
import OrderPage from "./pages/OrderPage";

// Fang
import SalePage from './pages/SalePage';
import ComplaintPage from './pages/ComplaintPage';
import OverviewPage from './pages/OverviewPage';
import AwaitingPage from './pages/AwaitingPage';
import ValidateUserPage from './pages/ValidateUserPage';
// import {HashRouter as Routes, Route} from "react-router-dom";


export default function App() {
  return (
    <DataProvider>
      <div className="container">
        <Header />
        <main className="main">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              {/* <Route path="/cart" component={CartPage} /> */}
              {/* <Route path="/payment" component={PaymentPage} /> */}
              <Route
                path="/myreframery/purchase-records/order-details"
                element={<OrderPage />}
              />
              <Route path="*" element={<NotFound />} />



              {/* Fang  */}
              <Route path="/myreframery/orders/sale/sale-details" element={<SalePage />} />
              <Route path="/myadmin/overview" element={<OverviewPage />} />
              <Route path="/myadmin/awaiting-validation" element={<AwaitingPage />} />
              <Route path="/myadmin/approved-users" element={<ValidateUserPage />} />
              <Route path="/myadmin/complaints" element={<ComplaintPage />} />

            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </DataProvider>
  );
}



// function App() {
//   return (
//     <Router>

//       <div className="container">
//         {/* header */}
//         <header className="header">
//           <div className="webname">
//             <Link to="/"><span className="link">Reframery Community Currency</span></Link>
//           </div>
//           <div className="header-links">
//             <Link to="/signin" > <span className="link">Sign In</span></Link>
//             <Link to="/cart" > <span className="link">Cart</span></Link>
//           </div>
//         </header>

//         <main className="main">

//           {/* side bar */}
//           <div className="sidebar">
//             <ul>
//               <li>My Wallet</li>
//               <li>My Items</li>
//               <li>My Profile</li>
//                 <ul>
//                   <li > <Link to="/myreframery"> User</Link></li>
//                   <li > <Link to="/myadmin/overview"> Admin</Link></li>
//                 </ul>
//               <li> <Link to="/myreframery/orders"> My History</Link></li>
//             </ul>
//           </div>
//           {/* content */}
//           <div className="content">
//             <Route path="/" exact={true} component={HomePage} />
//             <Route path="/product/:id" component={ProductPage} />
//             <Route path="/cart" component={CartPage} />
//             <Route path="/payment" component={PaymentPage} />

//             {/* <Route path="/myreframery" component={HistoryPage} /> */}

//             <Route path="/myreframery/orders/purchase/order-details" component={OrderPage} />
//             <Route path="/myreframery/orders/sale/sale-details" component={SalePage} />

//             <Route path="/myadmin/overview" component={OverviewPage} />
//             <Route path="/myadmin/awaiting-validation" component={AwaitingPage} />
//             <Route path="/myadmin/approved-users" component={ValidateUserPage} />
//             <Route path="/myadmin/complaints" component={ComplaintPage} />
//           </div>
//         </main>
//         {/* footer */}
//         <footer className="footer">  </footer>


//       </div>
//     </Router>
//   )
// }

// export default App;
