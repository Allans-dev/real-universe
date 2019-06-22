##Real-Universe v2.0

While the previous real-universe was my first project using react-router, this website does not use router at all.<br>
This project focuses on TypeScript and React and is my first time using TypeScript and so far it is a good <br>
experience.

The site uses Jed Watson's [react-select](https://github.com/JedWatson/react-select) for auto-complete <br>
searchbar. The tabs above the searchbar are labels that point to the searchbar much like a traditional <br>
html form and also change the state and subsequent criteria that can be searched and also the type of <br>
data returned.

I made a note to make the project scalable with data coming from a csv(excel) file I generated from a <br>
[wikipedia page](https://en.wikipedia.org/wiki/List_of_gravitationally_rounded_objects_of_the_Solar_System#Planets).

The .csv to json conversion wasn't ideal so the data needed to be tidied up, but as long as the format <br>
remains the same from the .csv file, extra data can be added without any changes to layout or logic.

Because of the risk of overcomplicating things I opted out of react context in this project after <br>
trying to create a store like redux to pass state to sibling Components.

This project is more of a learning experience for me. And also closure for not adding the search function <br>
in the first real-universe :P.