import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  scrollTo(event) {
    event.preventDefault();
    const targetId = this.element.getAttribute("href")?.replace("#", "");
    if (!targetId) return;
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
} 