import React, {Component} from 'react';
import { Helmet } from 'react-helmet';
import { Container } from '@material-ui/core';
import "./PrivacyPolicy.css";

class PrivacyPolicy extends Component {
  constructor(){
    super();

    this.state = {
      
    }
  }

  //Do API calls here
  componentDidMount(){
    
  }

  //Add sub components of App here
  render () {
    return (
      <>
        <Helmet>
          <meta http-equiv="Content-Type" content="text/html;" />
          <meta name="description" content="Privacy Policy - Regarding how and what information is stored, used, and shared." />
          <title>Dragon's Lair - Privacy Policy</title>
          <html lang="en" />
        </Helmet>
        <Container id="PrivacyContainer" className="Container">
          <br/>
          <h3>Privacy Notice</h3>
          <br/>
          This privacy notice discloses the privacy practices for (www.dragonian.xyz). This privacy notice applies solely to information collected by this website. It will notify you of the following:<br/>
          <br/>
          What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.<br/>
          What choices are available to you regarding the use of your data.<br/>
          The security procedures in place to protect the misuse of your information.<br/>
          How you can correct any inaccuracies in the information.<br/>
          <br/>
          <h4>Information Collection, Use, and Sharing</h4>
          <br/>
          We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via SteamID or other direct contact from you. We will not sell or rent this information to anyone.<br/>
          <br/>
          We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship a contest prize.<br/>
          <br/>
          Unless you ask us not to, we may contact you via Steam in the future to tell you about specials, new products or services, or changes to this privacy policy.<br/>
          <br/>
          <h4>Your Access to and Control Over Information</h4>
          <br/>
          You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the SteamID given on our website:<br/>
          <br/>
          See what data we have about you, if any.<br/>
          Change/correct any data we have about you.<br/>
          Have us delete any data we have about you.<br/>
          Express any concern you have about our use of your data.<br/>
          <br/>
          <h4>Security</h4>
          <br/>
          We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.<br/>
          <br/>
          Wherever we collect sensitive information (such as Contest Submissions, Community Votes, or Judging Scores), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for "https" at the beginning of the address of the Web page.<br/>
          <br/>
          While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only persons who need the information to perform a specific job (for example, Moderators or Judges) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.<br/>
          <br/>
          If you feel that we are not abiding by this privacy policy, you should contact us immediately via Steam.<br/>
          <br/>
          <h4>Registration</h4>
          <br/>
          In order to use this website, a user must first complete the registration process. During registration a user is required to give certain information (SteamID, Steam Profile Name etc). This information is used to participate in the services on our site in which you have expressed interest.<br/>
          <br/>
          <h4>Cookies</h4>
          <br/> 
          We use "cookies" on this site. A cookie is a piece of data stored on a site visitor's hard drive to help us improve your access to our site and identify repeat visitors to our site. For instance, when we use a cookie to identify you, you would not have to log in through Steam more than once, thereby saving time while on our site.<br/>
          <br/>
          <h4>Links</h4>
          <br/>
          This website contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.<br/>
          <br/>
          <h4>Surveys & Contests</h4>
          <br/>
          From time-to-time our site requests information via surveys or contests. Participation in these surveys or contests is completely voluntary and you may choose whether or not to participate and therefore disclose this information. Information requested may include contact information (such as name and shipping address), and demographic information (such as zip code, age level). Contact information will be used to notify the winners and award prizes. Survey information will be used for purposes of monitoring or improving the use and satisfaction of this site.<br/>
          <br/>
        </Container>
      </>
    );
  }
}

export default PrivacyPolicy;
