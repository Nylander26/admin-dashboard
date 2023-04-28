import React from "react";
import { AiOutlineEye as View, AiOutlineShoppingCart as Cart, AiOutlineComment as Comments, AiOutlineDollarCircle as Earning } from 'react-icons/ai'
import '../css/index.css'

const Content = () => {
  return (
    <>
      <div className="cardBox">
        <div className="card">
          <div>
            <div className="numbers">123</div>
            <div className="cardName">view</div>
          </div>
          <div className="iconBox">
            <View />
          </div>
        </div>
        <div className="card">
          <div>
            <div className="numbers">124123</div>
            <div className="cardName">sales</div>
          </div>
          <div className="iconBox">
            <Cart />
          </div>
        </div>
        <div className="card">
          <div>
            <div className="numbers">234234</div>
            <div className="cardName">comment</div>
          </div>
          <div className="iconBox">
            <Comments />
          </div>
        </div>
        <div className="card">
          <div>
            <div className="numbers">346345</div>
            <div className="cardName">earning</div>
          </div>
          <div className="iconBox">
            <Earning />
          </div>
        </div>
      </div>
      <div className="details">
        <div className="recentOrders">
          <div className="cardHeader">
            <h2>Recent Orders</h2>
            <a href="" className="btn">View All</a>
          </div>
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Price</td>
                <td>Payment</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Star Refrigerator</td>
                <td>$1200</td>
                <td>Paid</td>
                <td><span className="status delivered">Delivered</span></td>
              </tr>
              <tr>
                <td>Window Cooler</td>
                <td>$110</td>
                <td>Due</td>
                <td><span className="status pending">Pending</span></td>
              </tr>
              <tr>
                <td>Speakers</td>
                <td>$620</td>
                <td>Paid</td>
                <td><span className="status return">Return</span></td>
              </tr>
              <tr>
                <td>HP Laptop</td>
                <td>$6000</td>
                <td>Due</td>
                <td><span className="status inprogress">In Progress</span></td>
              </tr>
              <tr>
                <td>Star Refrigerator</td>
                <td>$1200</td>
                <td>Paid</td>
                <td><span className="status delivered">Delivered</span></td>
              </tr>
              <tr>
                <td>Window Cooler</td>
                <td>$110</td>
                <td>Due</td>
                <td><span className="status pending">Pending</span></td>
              </tr>
              <tr>
                <td>Speakers</td>
                <td>$620</td>
                <td>Paid</td>
                <td><span className="status return">Return</span></td>
              </tr>
              <tr>
                <td>HP Laptop</td>
                <td>$6000</td>
                <td>Due</td>
                <td><span className="status inprogress">In Progress</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <div className="recentCustomers">
          <div className="cardHeader">
            <h2>Recent Customers</h2>
          </div>
          <table>
            <tbody>
              <thead>
                <tr>
                  <td width={60}><div className="imgBx"><img src={"vite.svg"}/></div></td>
                  <td><h4>David<br/><span>Italy</span></h4></td>
                </tr>
                <tr>
                  <td width={60}><div className="imgBx"><img src={"vite.svg"}/></div></td>
                  <td><h4>David<br/><span>Italy</span></h4></td>
                </tr>
                <tr>
                  <td width={60}><div className="imgBx"><img src={"vite.svg"}/></div></td>
                  <td><h4>David<br/><span>Italy</span></h4></td>
                </tr>
                <tr>
                  <td width={60}><div className="imgBx"><img src={"vite.svg"}/></div></td>
                  <td><h4>David<br/><span>Italy</span></h4></td>
                </tr>
                <tr>
                  <td width={60}><div className="imgBx"><img src={"vite.svg"}/></div></td>
                  <td><h4>David<br/><span>Italy</span></h4></td>
                </tr>
                <tr>
                  <td width={60}><div className="imgBx"><img src={"vite.svg"}/></div></td>
                  <td><h4>David<br/><span>Italy</span></h4></td>
                </tr>
                <tr>
                  <td width={60}><div className="imgBx"><img src={"vite.svg"}/></div></td>
                  <td><h4>David<br/><span>Italy</span></h4></td>
                </tr>
              </thead>
            </tbody>
          </table>
        </div> */}
      </div>
    </>
  );
};

export default Content;
