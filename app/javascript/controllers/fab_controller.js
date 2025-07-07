import { Controller } from "@hotwired/stimulus"

console.log("Launcher controller loaded");

export default class extends Controller {
  openChatWidget() {
    if (window.openChatWidget) {
      window.openChatWidget();
    } else {
      console.warn("window.openChatWidget is not defined");
    }
  }
} 