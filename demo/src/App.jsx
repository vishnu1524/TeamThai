
import './App.css'

function App() {
 
  return (
    <>
  <div class="main">
    <div class="fir">
        
        <h3>KangCokor.</h3>
        <nav class="nav-item">
        <li>Overview</li>
        <li>Customers</li>
        <li>Schedule</li>
        <li>Report</li>
        </nav>
        
    </div>

    <div class="sec">
        <div>
            <p>Welcome back</p>
            <h2> Kim se-jeong</h2>
        </div>
            <input type='text' placeholder='Search here'></input>
          <div class="abc">
            <div >
              <div class="inc">
                    <p>TOTAL INCOME</p>
                    <h1>$267,00</h1>
                </div>
                <div class="inc2">
                    <p>This week</p>
                    <h2>+14.02%</h2>
                    <button>Withdraw</button>
                </div>
            </div>
            <div>
            <div class="inc3">
                  <p>TOTAL VISITORS</p>
                  <h1>32</h1>
              </div>
              </div>
            </div>
        
    </div>

    {/* <div>
      <Card title="total Income" value="123"/>
      <Card title="total Income" value="123"/>
    </div> */}
  </div>

    </>
  )
}

export default App
