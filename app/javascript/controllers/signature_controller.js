// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"
import SignaturePad from "signature_pad"
export default class extends Controller {
  static targets = [ "output", "canvas", "input"]

  updateData(event){
    this.inputTarget.value=this.signature_pad.toDataURL();

  }
  connect() {
    console.log("hello")
    this.signature_pad = new SignaturePad(this.canvasTarget)
    this.canvasTarget.height = this.canvasTarget.offsetHeight
    this.canvasTarget.width = this.canvasTarget.offsetWidth

  }
}
