# Tenzies - Select all dice with same number of dots!

> ### [Page link](https://tenzies.mndev.eu)

---

#### The project was built using vite, frontend of the site was written in ReactJS and SCSS to write to CSS code, used icons from https://fontawesome.com/

- used fonts:
  - [Inter](https://fonts.google.com/specimen/Inter)
  - [Karla](https://fonts.google.com/specimen/Karla)

---

#### Structure:

- the website has been designed in a responsive way so that it can be used freely and comfortably on any device:

| Smartphone                                                  | Mobile                                                                                           |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| < 768px                                                     | >= 768px                                                                                         |
| View adapted for use on a smartphone (initial site design), | Mobile view, fixed navigation bar on top, fonts resize and fit of animations for larger screens, |

- open graph tags (page preview in pasted link) in the head of the page,

- game starts when START button is pressed,

- marked cube (this is shown by its changed color when you press on it, you can deselect it) does not change its value,

- under the dice there is a RESET button after pressing which the game is reset,

- when the same values are selected on all dice, the winner is informed by confetti spilling from the top of the screen, [react-confetti](https://www.npmjs.com/package/react-confetti) was used to make this possible,

- [nanoid](https://www.npmjs.com/package/nanoid) is used to generate an id for a die,

- look of the dice was created in css itself,

- the course of the game is displayed at the bottom of the board, and the best score is saved to local storage,

- button under the highscore is used to remove the highscore from local storage,

- github links are located in bottom left corner under button.

#### Look:

- changed scrollbar design,

- changed text selection design.

#### Extras:

- ability to disable completely the animations present on the page.

  > (To disable animations: Settings > Accessibility > Display > Show animations in Windows (Disable)) (The setting is found in the \_reset.scss file).

---

#### Made by: Mateusz Narowski

#### Date: 05.09.2022
