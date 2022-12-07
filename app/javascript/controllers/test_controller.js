import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
 connect() {
    /* this.element.textContent = "Hello World! update " */
    /* console.log(document); */

const input_selector = document.getElementById("input-text");
    const input_value = input_selector.value;
    const btn_selector = document.querySelector("#btn-submit");
    btn_selector.addEventListener("click", function(){
        console.log(input_value);
    })

  }

  /* habib(){
    
  } */
}