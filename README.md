# PatriotHacks-2021

**We won PatriotHacks-2021! Check out our devpost [here](https://devpost.com/software/hack-sustainability).**

<!-- PROJECT LOGO -->
<p align="center">
  <h3 align="center">Sustainateers</h3>
  <p align="center">
    Clean up the Earth and have fun by competing against friends and the world to pick up the most trash!
    <br />
    <a href="hacksustainability.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/github_username/PatriotHacks-2021/issues">Report Bug</a>
    ·
    <a href="https://github.com/github_username/PatriotHacks-2021/issues">Request Feature</a>
  </p>
</p>

## Inspiration
We were inspired by the mobile game Pokemon Go and the ways it allowed people to connect and work together to achieve a common goal. We wanted our game to allow users to achieve a common goal, which is cleaning local areas of trash and waste.

## What it does
Users can create a profile and join a group to begin competing against other users. We deemed our users the term of Sustainateers--individuals who adventure to clean up the Earth. All users will automatically be entered into a global leaderboard to track their process with others and see live feedback on a world map. Our web application monitors and tracks how much trash a Sustainateer has picked up through a self-entry into our database. We attempted to have a trash verification method through OpenCV, but we could not train a model in time.

## How we built it
The first piece we built was the backend in node.js. Here, we defined most of the routes that the frontend react.js application would interact with. Our node.js backend also tied into our MongoDB Atlas database. We defined three schemas, a user, an entry, and a group. Next, we started creating the frontend so that we could POST data to the backend routes and ultimately the database. Once completed, we wanted a beautiful way to display the data that users would input into our app and display meaningful statistics. For the image recognition side, python and OpenCV were used to attempt to train a model on recognizing and determining how much trash there was given an input image or video.

### Frontend
- React
- Mapbox
- Google-Maps
- Google-Places

### Backend
- Node.js
- Python
- Express.js
- MongoDB

## Challenges we ran into
The largest challenges we faced were with front-end development and image recognition. We mostly have developed the back-end routes and tied them to the database within the first couple of hours of the hackathon; however, developing the frontend and ensuring a streamlined, responsive, and intuitive user experience was a difficult process. There were many instances where a single keyword in React would break the app and we'd invest considerable amounts of time to debug it. Furthermore, OpenCV proved challenging, because most of us had never engaged with it before; we eventually were able to get the model to recognize an eye, but we had trouble translating what we learned from that to allow it to recognize trash. The plan was to use the OpenCV model as an authenticator before a database entry was submitted to prevent "fraudulent" trash entries; however, we were unable to accomplish this.

## Accomplishments that we're proud of
This was the first time working together as a group, and we were proud of the way we delegated tasked and worked effectively. One of our members has never been to a hackathon and is extremely proud of being able to contribute to the group. Besides, this is the first time that anyone in our group is submitting an arguably finished project to a hackathon. Lastly, we found a fun way to apply what we learned in our classes and side projects in a fast-paced environment to solve several problems.

## What we learned
Some of our members were strangers and none of us knew the same tech stacks. We all attempted to play to our strengths but that doesn't mean that we didn't pick up anything else from each other. We had one developer who was fairly new, so we allocated a lot of time to git, source control, and overall explaining the ecosystem of web apps. Our python developer who focused on OpenCV started to attempt to build frontends in React and creating an API with Flask. Our frontend developers shared their knowledge of the stack and became entranced in the training of visual recognition models. Overall, the members of our team were able to gain a little more insight into the tech stack that they had not originally been exposed to before.

## What's next for Sustainateers
We hope to complete the OpenCV trash image recognition and tie it into our app. We would also like to implement a feature where the app would give location recommendations to users to go to clean up and potentially earn bonus points or rewards. But, the primary thing we should do is some rigorous quality assurance testing.
