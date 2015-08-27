# profiles
a tiny Node.js command-line app that pulls user data from teamtreehouse.com.
You pass in usernames and it returns the users' total number of badges, points and JavaScript points.

To run the app:  
1. Go to https://nodejs.org/ and click the big 'install' button and follow the instructions,  
2. Run `node -v` in your terminal to check it's installed ok.

Get a user's treehouse info:  
`node app.js andrewstelmach`

If you ask for more than one user, the app also nicely demonstrates the 'non-blocking' feature of Node i.e. in this app, if you ask for the info of several users, rather than just one, the results won't necessarily be displayed in the order you asked for them. This is because Node has this awesome 'thread pool' which manages all those requests concurrently, serving up the results whenever they come back. Node manages this even though the Kernel (the fundamental part of a computer's operating system) is not natively geared-up to do this out of the box. So, Node is very clever.

This is desirable because, in a scenario in which a high number of simultaneous requests are made of the same kind, one request has to wait for the other to finish before going about its business.

There are ways to do this without Node, but it's much more difficult to code. It's also worth noting that this non-blocking capability is not always needed and, in that case, you might well prefer to use something else you're more familiar with, or something that is just a better tool for the job overall.

Try running the following code to see the 'non-blocking' in action. Notice that the results come back in a different order to what they were asked for in:

`node app.js chalkers andrewstelmach nickpettit`

(testing has been deprecated for this, since it was just a little 'spike' to explore Node. However, I did have testing up and running to begin with, using "jasmine-node".
