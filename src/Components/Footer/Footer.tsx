import './Footer.css';

import facebook from '../../Assets/Images/facebook.png';
import linkedin from '../../Assets/Images/linkedin.png';
import insta from '../../Assets/Images/insta.png';

export default function Footer() {
  return (
    <>
      <footer className='footerMain'>
        <section className='socialContainer'>
          <img src={facebook} alt='facebook' />
          <img src={linkedin} alt='linkedin' />
          <img src={insta} alt='instagram' />
        </section>
        <section className='buttonContainer'>
          <div>
            <button>Home</button>
            <button>About</button>
            <button>Candidates</button>
          </div>
          <div>
            <button>Employers</button>
            <button>Latest News</button>
            <button>Contact</button>
          </div>
          <div>
            <button>+62 (0) 9 124 5470</button>
            <button>careers@namespace.com</button>
            <button></button>
          </div>
          <div>
            <h6>Level 3</h6>
            <h6>79 High Street</h6>
            <h6>Melbourne CBD</h6>
            <h6>1010</h6>
          </div>
        </section>
      </footer>
      <footer className='copyRight'>Copyright © 2021 - Beyond Ltd. </footer>
    </>
  );
}
