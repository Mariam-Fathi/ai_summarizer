import google from '../assets/google.png';
import slack from '../assets/slack.png';
import atlassian from '../assets/atlassian.png';
import dropbox from '../assets/dropbox.png';
import shopify from '../assets/shopify.png';

const Brand = () => (
  <div className="brand pt-[2rem] px-[6rem] max-sm:px-[4rem] max-sm:pb-[4rem]">
    <div>
      <img src={google} />
    </div>
    <div>
      <img src={slack} />
    </div>
    <div>
      <img src={atlassian} />
    </div>
    <div>
      <img src={dropbox} />
    </div>
    <div>
      <img src={shopify} />
    </div>
  </div>
);

export default Brand;
