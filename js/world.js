
      let saveWindow = window.innerWidth
      
      function runWorld() {
        gsap.registerPlugin(MotionPathPlugin)
        gsap.to(".online-broker__world", {
          duration: 15, 
          repeat: -1, 
          ease: "none",
          motionPath: {
            path: "#pathWorld",
            align: "#pathWorld",
            start: 0.06
          }})
      }
    
      
    
      window.addEventListener("resize", function() {
        if (saveWindow != window.innerWidth) {
          runWorld()
          saveWindow = window.innerWidth
        }
      }, false);