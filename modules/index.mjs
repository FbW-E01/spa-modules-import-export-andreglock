// Your code goes here!
import { modulo, percentage, percentageOf, difference } from "./percentage.mjs";
import { fixRoundingErrors, calculateAspectRatio } from "./aspect-ratio.mjs";

// modulo
const moduloOne = document.getElementById("modulo_1");
const moduloTwo = document.getElementById("modulo_2");
const moduloResult = document.getElementById("modulo_result");
const moduloForm = document.getElementById("modulo-form");

moduloForm.addEventListener("change", () => {
    moduloResult.value = modulo(moduloOne.value, moduloTwo.value);
});

// percentage
const percentageOne = document.getElementById("percentage_1");
const percentageTwo = document.getElementById("percentage_2");
const percentageResult = document.getElementById("percentage_result");
const percentageForm = document.getElementById("percentage-form");

percentageForm.addEventListener("change", () => {
    percentageResult.value = fixRoundingErrors(percentage(percentageOne.value, percentageTwo.value));
});

// percentageOf
const percentageOfOne = document.getElementById("percentageOf_1");
const percentageOfTwo = document.getElementById("percentageOf_2");
const percentageOfResult = document.getElementById("percentageOf_result");
const percentageOfForm = document.getElementById("percentageOf-form");

percentageOfForm.addEventListener("change", () => {
    percentageOfResult.value = fixRoundingErrors(percentageOf(percentageOfOne.value, percentageOfTwo.value));
});

// difference
const differenceOne = document.getElementById("difference_1");
const differenceTwo = document.getElementById("difference_2");
const differenceResult = document.getElementById("difference_result");
const differenceForm = document.getElementById("difference-form");

differenceForm.addEventListener("change", () => {
    differenceResult.value = fixRoundingErrors(difference(differenceOne.value, differenceTwo.value));
});

// aspect ratio
const ratioOne = document.getElementById("ratio_1");
const ratioTwo = document.getElementById("ratio_2");
const widthResult = document.getElementById("ratio_result-width");
const heightResult = document.getElementById("ratio_result-height");

widthResult.addEventListener("input", () => {
    heightResult.value = calculateAspectRatio(ratioOne.value, ratioTwo.value, widthResult.value, "");
});
heightResult.addEventListener("input", () => {
    widthResult.value = calculateAspectRatio(ratioOne.value, ratioTwo.value, heightResult.value, "h");
});