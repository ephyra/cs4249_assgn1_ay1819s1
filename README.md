# cs4249 Assignment 1
This repository contains a basic interface and instrumentation to perform an empirical evaluation of Marking Menus and Radial Menus. You are expected to modify the code to perform the following tasks
1. Implement a new Independent Variable
2. Implement a new Dependent Variable
3. Modify tracking to record participant id, consent, pre-survey and post-survey questionnaires.

 You may fork this repository to your own Github account and clone your forked version for development. This will also help you use Github pages for hosting if you plan to conduct experiments online.
 
 ## Changes done
 1. Added prompt for participant ID and change trial file loaded according to ID.
 2. Changed menu data to accommodate for 3 levels of menu depth and 2 levels of menu breadth.
 3. Changed experiment data to accommodate for breadth field input.
 4. Added pre-experiment trial files to allow users to familiarise with interface.
 5. Prevent user from skipping trials.
 6. Prevent user from proceeding before selecting the correct trial so that we can calculate accuracy rate in individual trial.
 7. Added mouse distance tracking, the distance tracking starts when menu is opened, and it is accumulative rather than end minus start position. The accumulation stops upon an item being selected.
 8. Consent, pre-survey and post-survey will be done on paper.
   
### Recommended Browsers
This repository has been tested on the browsers listed below. It is suggested you use Chrome.
1. Chrome 68.0.3440.106
2. Firfox 61.0.2
3. Safari V10

 ## Credits
This repository contains modified implementations of menus from the original contributors listed below.
1. Marking Menu : Forked from https://github.com/QuentinRoy/Marking-Menu
2. Radial Menu : Forked from https://github.com/lgrkvst/d3-sunburst-menu
