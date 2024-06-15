import React, { useState } from "react";
import "./PaymentPage.scss"; 
const PaymentPage = () => {
  const [loading, setloading] = useState(false)
  const handleSubmit = (e) => {
    setloading(true);
  }

  const [number, setnumber] = useState(null)
  const [cvv, setcvv] = useState(null);
  const [date, setdate] = useState(null)
  const [year, setyear] = useState(null)
  const [name, setname] = useState(null)  
  return (
    <>
      {loading ? (
        <div class="main-container">
          <h2>Payment Successful</h2>
          <div class="check-container">
            <div class="check-background">
              <svg
                viewBox="0 0 65 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 25L27.3077 44L58.5 7"
                  stroke="white"
                  stroke-width="13"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="check-shadow"></div>
          </div>
        </div>
      ) : (
        <div class="container">
          <div class="form">
            <form action="">
              <div class="flex-row">
                <label for="card-number">Card Number</label>
                <input
                  name="card-number"
                  class="card-number"
                  type="text"
                  onChange={(e) => setnumber(e.target.value)}
                />
              </div>
              <div class="flex-row">
                <label for="card-name">Holder Name</label>
                <input
                  name="card-name"
                  class="card-name"
                  type="text"

                  onChange={(e) => setname(e.target.value)}
                />
              </div>
              <div class="flex-row">
                <table>
                  <tr>
                    <td class="table-column">
                      <label for="month">Expiration Date</label>
                      <select
                        name="month"
                        id="month-select"
                        onChange={(e) => setdate(e.target.value)}
                      >
                        <option value="Month" selected disabled>
                          Month
                        </option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                      </select>
                      <select
                        name="year"
                        id="year-select"
                        onChange={(e) => setyear(e.target.value)}
                      >
                        <option value="Year" selected disabled>
                          Year
                        </option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                      </select>
                    </td>
                    <td class="table-column">
                      <label for="card-cvv">CVV</label>
                      <input
                        name="card-cvv"
                        class="card-cvv"
                        type="text"
                        value=""
                        onChange={(e) => setcvv(e.target.value)}
                      />
                    </td>
                  </tr>
                </table>
              </div>
              <div class="flex-row">
                <input
                  class="card-submit"
                  type="button"
                  value="Proceed"
                  onClick={handleSubmit}
                />
              </div>
            </form>
            <img
              class="card-image"
              src="https://pngimg.com/uploads/credit_card/credit_card_PNG99.png"
              alt="Card image"
            />
            <div class="card-image-shadow"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentPage;
