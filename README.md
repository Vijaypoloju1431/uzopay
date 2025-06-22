# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

//Note
====== This uzopay developed with the following technlogines ====
React 19v
React-router-dom v6  (for routing)
React-icons (for icons) in the given zip files some svgs are missed
tailwind css 3.6v
framer motion 5v (for animations on page load)
swiper js 5v for carousels (testimonials and our expertize components)

//Appclication runnction process
  
Note: Pre-requisites
    => Node must be installed and above 14v [prefered]
    install node https://nodejs.org/en

  => open terminal and navigate to project (eg: cd uzopay)
  Enter following commonds
  -> npm i
  -> npm run dev
  -> http://localhost:5173/ hit this on broswer

==>Mssed requirements
  -> Due to missing of some svgs and the banner image or hero section i have taken a dummy background 
  -> colors and backgrund might not match exactly due to not having exact color codes

==>Addon functionalities
  -> Made animations by using framer motion
  -> used box-shadows for glowing effect
  -> Added routing and its dummy pages
  -> Made login and logout funstionality by utilizing local storages and context api (for small state management)
     <Process>
     -> if user alreay creates account then after loading the application user name will dipalay instead of sign in and login
     -> is not created the login and sign in will displays
     -> user can create account by giving email, name, mobile and password by clcking on sign in button a model will opens and    will store the details in localstorage
     -> after clicking on submit, the user name will dipalys in the place of login and sign in buttons with logout button
     -> If user have already acount then user can directly login by clickng on login button.
     -> Note: if user have an acount and tries to create acount the error will displays.
              Given a sample login/signin modle only with simple ui design changes only.



    





