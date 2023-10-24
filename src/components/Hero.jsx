import people from '../assets/people.png';
import ai from '../assets/hero.png';

const Hero = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="header-content">
        <h1 className="gradient__text">Summarize Any Article in a click</h1>
        <p>This helps you summarize any article into concise, easy to digest content so you can free yourself from information overload.</p>

        <div className="header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button"><a href="/">Sign Up</a></button>
        </div>

        <div className="header-content__people">
          <img src={people} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="header-image">
        <img src={ai} />
      </div>
  </div>
  );
};

export default Hero;
