const fabricSelect = document.querySelector("#pa_tkanina");
const fabricModal = document.querySelector(".fabric");
const fabricImages = document.querySelectorAll(".fabric__image");
const fabricHiddenInput = document.querySelector("#wdm_name");
const resetVariations = document.querySelector(".reset_variations");

if (resetVariations) resetVariations.click();

fabricSelect.addEventListener("click", () => {
  fabricSelect.setAttribute("disabled", "disabled");
  fabricModal.classList.toggle("fabric--hidden");
});

fabricImages.forEach((image) =>
  image.addEventListener("click", () => {
    const filename = image.src.replace(/^.*[\\\/]/, "");
    const imageFabricGroup = image.getAttribute("data-fabric-group");
    fabricModal.classList.toggle("fabric--hidden");
    fabricHiddenInput.value = filename.replace(".jpg", "");
    fabricSelect.value = imageFabricGroup;
    fabricSelect.removeAttribute("disabled");
  })
);

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});
