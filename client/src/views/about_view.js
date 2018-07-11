const AboutView = function() {

}

AboutView.prototype.bindEvents = function () {
  const coll = document.getElementsByClassName("collapsible");
  console.log(coll);

    for (let i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        console.log(content);
        // if (content.style.display === "block") {
        //     content.style.display = "none";
        // } else {
        //     content.style.display = "block";
        // }
      });
  }
};

module.exports = AboutView;
