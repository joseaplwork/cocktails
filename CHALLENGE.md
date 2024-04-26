### The challenge

Code challenge Web:
The purpose of this challenge is to assess your skills as a developer. We want you to build a project that is close to what you will do at work. The deadline for receiving your challenge is 1 week from the moment you confirm you have received this document​. Ideally, you should have ample time to complete it but in case there are some missing points we would like you to tell us how would you approach them.
We value the following:

- [x] JS code, our web app is built using React, therefore we value your skills on the UI library and the challenge should be completed using it, use the tools that you feel that will help you achieve the goal.
- [x] Project architecture: we care about how the project is architected, mostly because we have an ever-evolving project that needs to be flexible but consistent (component organization, module responsibilities for example).
- [x] Code quality: appropriate data structures and the use of typical programming patterns and good practices.
- [x] Documentation: We care about explaining the reasoning about decisions and we are thriving to have more and better documentation on our projects.
- [x] Testing: both having tests (Unit, UI, integration, and every kind of test you can imagine) and testable code.
- And last but not least, we want you to reason about your choices. Everyone in our team should be able to defend their opinions and decisions, ie: ​why have you used a certain data structure, which alternatives did you consider, what would you improve if you had more time, etc.​
  At the end of the challenge, you must ​deliver your project, with the git files and a text file with all your comments containing your reasoning described in the latest point from above. You should make a zip file and share it to us via email/wetransfer or similar.
  The ​project MUST build and run out of the box without us having to do any further adjustments.

<b>The challenge: Build a cocktails book</b>
This challenge should be done by using the free to use Thecocktaildb API​. We would like you to retrieve some cocktails from there, display the cocktails and perform certain operations on those cocktails. Hereby the details:

1. API connection, you should use their search endpoint and perform cocktails searches with the cocktail name (​ie: www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
   ) and parse the results.
2. Use a search bar as user input for the first point and show the results when pressing enter,
3. The results are shown in a list view with a layout like the following. Each cocktail should show the image on top, the cocktail name, ingredients (this one could have multiple lines so the layouts should support dynamic heights) and a label in a 45% angle that would show only if it contains lactose (to simplify consider that only milk and cheese contain lactose).
4. In a screen wider than 768px, it should show the results on a grid of 2 columns

<p style="text-align:center"><img src="./screenshot.png"></p>

### Reasoning behind the challenge

- <b>Project structure</b>:
  I've implemented the separation of concerns design to separate the models layer, the presentation (components) layer and the controllers(containers) layer. I've chosen the flux architecture with `react-redux`

- <b>Programming language</b>:
  I've decided to use typescript

- <b>Styling</b>:
  I've used the `ITCSS` architecture to structure the styles in the project and followed the BEM convention to style components, objects and utilities

- <b>API</b>:
  I've implemented the logic with `redux-sagas` to use asynchronous actions and attach it to redux flow
