module.exports = {
  darkMode: "class",
  purge: ["./src/**/*.js"],
  variants: {},
  plugins: [],
  theme: {
    extend:{
      keyframes:{
        moveForward: {
          '0%':{left: 0},
          '100%':{left:20},
        },
        turnAnti: {
          '100%':{transform: 'rotate(-15deg)'},
        },
        turnClock: {
          '100%':{transform: 'rotate(15deg)'},
        }
      },
      animation: {
        moveForward: 'moveForward 1s linear forwards',
        turnAnti: 'turnAnti 1s linear forwards',
        turnClock: 'turnClock 1s linear forwards',
       }
    }
  }
};
