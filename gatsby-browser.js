import FontFaceObserver from "fontfaceobserver";

exports.onClientEntry = () => {
  // Called when the Gatsby browser runtime first starts.

  // "Flash of Faux Text": Add class to body once font is loaded
  const lazer84Observer = new FontFaceObserver("lazer84", {
    style: "italic"
  });
  const montserratObserver = new FontFaceObserver("Montserrat");
  const exoObserver = new FontFaceObserver("exo");

  lazer84Observer
    .load()
    .then(() => {
      document.documentElement.classList.add("lazer84-active");
    })
    .catch(err => {
      /* eslint no-console: "off"*/
      console.warn("lazer84 failed to load.", err);
    });

  montserratObserver
    .load()
    .then(() => {
      document.documentElement.classList.add("montserrat-active");
    })
    .catch(err => {
      /* eslint no-console: "off"*/
      console.warn("montserrat failed to load.", err);
    });

  exoObserver
    .load()
    .then(() => {
      document.documentElement.classList.add("exo-active");
    })
    .catch(err => {
      /* eslint no-console: "off"*/
      console.warn("exo failed to load.", err);
    });
};
