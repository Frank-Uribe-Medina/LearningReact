function random_item_from_list(arr){
    min = 0 
    max = arr.length - 1

    rand_int = Math.floor(Math.random() * (max - min) + min)
    return arr[rand_int]

};



// Changing the Color of the H2 Element

const h1_tag = document.getElementById("rainbow");
const change_color_buttom = document.getElementById("change-color-button");
const arr_of_colors = ["red", "green", "yellow"]

change_color_buttom.addEventListener("click", function () {
  // Code to execute when the button is clicked
  h1_tag.style.color = random_item_from_list(arr_of_colors)
});
