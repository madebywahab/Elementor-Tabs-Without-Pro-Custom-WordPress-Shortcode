<script> 
document.addEventListener("DOMContentLoaded", function() {

const ourMain = document.querySelectorAll(".visible-sec");
const HiddenSec = document.querySelectorAll(".hide");

ourMain.forEach(function (mainSection, index) {
  const ShowBtn = mainSection.querySelector("a");

  ShowBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior
    console.log("Button clicked in section:", index);

    // Only show the hidden section with the same index
    const thisHidden = HiddenSec[index];
    {/* console.log(HiddenSec); */}
     if (thisHidden) {
       thisHidden.style.display = "block";
     }

     const HideBtn = thisHidden.querySelector("a");

     HideBtn.addEventListener('click', function() {
        thisHidden.style.display = "none";
      });

    });
});

});
</script> 
