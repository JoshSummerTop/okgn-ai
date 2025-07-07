// app/javascript/controllers/chat_widget_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["searchInput", "sendButton"]

  connect() {
    this.waitForWidget()
  }

  waitForWidget() {
    if (window.initChatWidget && window.openChatWidget) {
      window.initChatWidget()
      this.waitForSendChatMessage()
    } else {
      setTimeout(() => this.waitForWidget(), 50)
    }
  }

  waitForSendChatMessage() {
    if (window.sendChatMessage) {
      this.sendButtonTarget.addEventListener("click", () => this.sendMessage())
      this.searchInputTarget.addEventListener("keydown", (e) => {
        if (e.key === "Enter") this.sendMessage()
      })
    } else {
      setTimeout(() => this.waitForSendChatMessage(), 50)
    }
  }

  sendMessage() {
    const val = this.searchInputTarget.value
    if (val.trim()) {
      window.sendChatMessage(val)
      this.searchInputTarget.value = ""
      window.openChatWidget()
    }
  }

  openChatWidget() {
    window.openChatWidget && window.openChatWidget();
  }
}