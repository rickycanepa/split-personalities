const originalDisorderFormat = "Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia"
let split = originalDisorderFormat.split("|$|");
let array = split.join("<div></div>")
console.log(array);
