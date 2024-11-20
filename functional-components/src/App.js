import "./App.css";
import Investor from "./components/Investor";

function App() {
  return (
    <div className="App">
      <header id="header">Unveiling Functional Components</header>
      <div className="flex">
        <div className="investorDiv">
          <img className="investorPic" src="./images/warrenBuffett.jpg"></img>
          <h2 className="card-title">Warren Buffett</h2>
          <hr></hr>
          <dl>
            <dt>
              <h3 className="card-text">Strategy</h3>
            </dt>
            <dd>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit quia.
              </p>
            </dd>
            <dt>
              <h3 className="card-text">Impact</h3>
            </dt>
            <dd>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit quia.
              </p>
            </dd>
          </dl>
        </div>

        <div className="investorDiv">
          <img className="investorPic" src="./images/peterLynch.jpg"></img>
          <h2 className="card-title">Peter Lynch</h2>
          <hr></hr>
          <dl>
            <dt>
              <h3 className="card-text">Strategy</h3>
            </dt>
            <dd>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit quia.
              </p>
            </dd>
            <dt>
              <h3 className="card-text">Impact</h3>
            </dt>
            <dd>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit quia.
              </p>
            </dd>
          </dl>
        </div>

        <div className="investorDiv">
          <img className="investorPic" src="./images/georgeSoros.webp"></img>
          <h2 className="card-title">George Soros</h2>
          <hr></hr>
          <dl>
            <dt>
              <h3 className="card-text">Strategy</h3>
            </dt>
            <dd>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit quia.
              </p>
            </dd>
            <dt>
              <h3 className="card-text">Impact</h3>
            </dt>
            <dd>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit quia.
              </p>
            </dd>
          </dl>
        </div>
        <Investor
          title="Ray Dalio"
          text1="Notable Strategy"
          text2="Impression"
          para="Quia lorem ipsum dolor sit amet consectetur adipisicing elit."
          pic="./images/rayDalio.png"
        ></Investor>
        <Investor
          title="Rakesh Jhunjhunwala"
          text1="Strategy"
          text2="Significance"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit quia."
          pic="./images/rakeshJhunjhunwala.avif"
        ></Investor>
        <Investor
          title="Radhakishan Damani"
          text1="Notable Strategy"
          text2="Impression"
          para="Quia lorem ipsum dolor sit amet consectetur adipisicing elit."
          pic="./images/radhakishanDamani.webp"
        ></Investor>
        <Investor
          title="Vijay Kedia"
          text1="Approach"
          text2="Effect"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit quia."
          pic="./images/vjayKedia.avif"
        ></Investor>
        <Investor
          title="Raamdeo Agrawal"
          text1="Roadmap"
          text2="Outcome"
          para="Uia lorem ipsum dolor sit amet sit amet consectetur adipisicing elit."
          pic="./images/raamdeoAgrawal.avif"
        ></Investor>
        <Investor
          title="Porinju Veliyath"
          text1="Methodology"
          text2="Influence"
          para="Quia lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet sit amet consectetur adipisicing elit Quia lorem ipsum."
          pic="./images/porinjuVeliyathNoBG.png"
        ></Investor>
        <Investor
          title="Dolly Khanna"
          text1="Agenda"
          text2="Repercussion"
          para="Sit amet consectetur adipisicing elit uia lorem ipsum dolor sit ametq."
          pic="./images/dollyKhannaNoBG.png"
        ></Investor>

        <Investor
          title="Sanjay Bakshi"
          text1="Blueprint"
          text2="Result"
          para="Sit amet consectetur adipisicing elit uia lorem ipsum dolor sit amet consectetur adipisicing elit uia lorem ipsum dolor sit amet."
          pic="./images/sanjayBakshiNoBG.png"
        ></Investor>
        <Investor
          title="Carl Icahn"
          text1="Course of action"
          text2="Change"
          para="Consectetur adipisicing elit uia lorem ipsum dolor sit amet sit amet dolor sit amet sit amet consectetur adipisicing elit Quia lorem ipsum Consectetur adipisicing elit uia lorem ipsum dolor sit amet sit amet dolor sit amet sit amet consectetur adipisicing elit Quia lorem ipsum dolor sit amet sit amet consectetur adipisicing elit."
          pic="./images/carlIcahnNoBG.png"
        ></Investor>
        <Investor
          title="David Einhorn"
          text1="Tactics"
          text2="Reach"
          para="Dolor sit amet sit amet consectetur adipisicing elit quia lorem ipsum."
          pic="./images/davidEinhornNoBG.png"
        ></Investor>
        <Investor
          title="Jim Simons"
          text1="Framework"
          text2="Repercussion"
          para="Quia lorem ipsum consectetur adipisicing elit uia lorem ipsum dolor sit amet Quia lorem ipsum."
          pic="./images/jimSimonsNoBG.png"
        ></Investor>
        <Investor
          title="Michael Steinhardt"
          text1="Game plan"
          text2="Consequence"
          para="sit amet consectetur adipisicing elit consectetur adipisicing elit uia."
          pic="./images/michaelSteinhardtNoBG.png"
        ></Investor>
      </div>
      <footer id="footer">
        © 2024 Stock Market Investor. All rights reserved. Empowering investors
        with reliable insights worldwide.
      </footer>
    </div>
  );
}

export default App;
