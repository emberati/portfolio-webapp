
export default {
  mounted: el => {
    // function loadImage() {
    //   const imageElement = Array.from(el.children).find(el => el.nodeName === "IMG");
    //   if (imageElement) {
    //     imageElement.addEventListener("error", () => console.log("error"));
    //     imageElement.src = imageElement.dataset.src;
    //   }
    // }

    function handleIntersect(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // loadImage();
          console.log(entry.innerHTML)
          // observer.unobserve(el);
        }
      });
    }

    function createObserver() {
      const options = {

      };
      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(el);
    }

    console.log('loaded')
    if (window["IntersectionObserver"]) {
      createObserver();
    } else {
      // loadImage();
      console.error('IntersectionObserver is not supported by your browser!')
    }
  }
};