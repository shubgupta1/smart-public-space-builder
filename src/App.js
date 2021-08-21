import React, { Component } from "react";
import logo from "./logo.svg";
import image from "../src/images/Company Logo (Large).png";
import "./App.css";
import { withAuthenticator } from "aws-amplify-react";
import Amplify, { Auth } from "aws-amplify";
import aws_exports from "./aws-exports";
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Science Help</h1>
          <img src={image} alt="logo" className="App-logo" />
          <div>
            <h3>What is the problem?</h3>
            <p>This year has been very dramatic with the bushfires and the COVID-19 pandemic.
              The uncontrollable bushfires caused mass devastation to the environment and the diverse flora and fauna of the Australian terrain.
              Then came the pandemic that introduced travel restrictions and has hindered day to day work of workers across various communities 
              and occupations. The science and academia community has taken a hit because of this.
            </p>
            <p>
            For example, Steve, a researcher in Biodiversity from NSW has been waiting to fly to Perth to complete his research on the impact of
            recent environmental changes to the Quokka community since Quokkas are indigneous to WA. However, he had to cancel his travel plans last
             minute because of the hard border closures!
            </p>
          </div>
          <div>
            <h3>Our solution - Science Help</h3>
            <p>
              Here is where our solution, Science Help could come into play. We, Amit, Nithin, Dhurva, and Shub have devised an app that 
              could aid the science community in carrying out their ongoing research by connecting them with places they couldn’t visit because of the pandemic.
            </p>
            <p>
              Citizens like Jack, who are interested in contributing and knowing about scientific research can register on the app, choose from a wide variety 
              of research areas that interest him (Areas of interest screen) and select his base region.
            </p>
            <p>
              Also, researchers like Steve could register their profile on the app too and create a Request for help outlining the details of his thesis, its 
              outcome along with the time commitment required to help with the thesis. The time commitment translates to a point system that can be used to track the Leaderboard.
            </p>
            <p>
              Jack gets notified about the request submitted by Steve and can register to contribute to this project. Steve can view the profiles of people interested like Jack, chat with them and once both parties agree, 
              they can sign a virtual agreement outlining the effort of the contributor along with other things like the risks involved and approvals required if any. 
              Steve can also use the app to schedule a shipment to Jack containing the Geo-tag needed to map onto a Quokka for research. This geo-tag has sensors that will
              monitor Quokka's body temperature, health levels, etc and help Steve conduct his research on the effects of recent adversities on the animal species.
            </p>
            <p>
              Jack receives the shipment and heads to the beautiful Rottnest Island to conduct the research. Using the app, he can even livestream the research too.
              Once the research job performed by Jack is completed, Steve marks the Request as completed and Jack gets points to move up the leaderboard,
              providing him an opportunity to build a reputation in the science community and get accepted in his future PHD thesis.
              Jack also gets mentioned as a contributor when Steve’s research paper is published.
            </p>
            <p>
              We achieved this by using the following AWS Architecture and deploying a react native app built upon AWS Amplify that sets up AWS Cognito for user 
              identification and S3 to store the application code. DynamoDB table was used to store things like user preference.
              This app was also cached at various edge locations by using AWS CloudFront.
            </p>
            <p>
              Since in this case, all data from the sensors will be collected in large volumes, the device can be registered via the app and all data collected 
              will be stored in an S3 Bucket as a Data Lake. This can also enable the researcher to make the data open to the science community by hooking up the S3 
              with AWS Globus. Not only this, but the data stored in S3 can be analysed using AWS Athena to perform interactive queries and abstract vital information 
              that can support the research.
            </p>
            <p>This solution hence helps the 
              <ul>
                <li>researcher by enabling them to conduct their research and overcoming the hindrance caused by the pandemic,</li>
                <li>The Contributors by letting them be a part of scientific research, expanding their subject expertise and building reputation in the science community by imprinting their names on science research papers</li>
                <li>And the whole science community by making the research and data collected accessible to them</li>
              </ul>
            </p>
          </div>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
