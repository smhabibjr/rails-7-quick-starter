import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  /* connect() {
    this.element.textContent = "Hello World! update "
  } */

  hithere(){
    console.log("hi there, i have been clicked !");
  }
}
