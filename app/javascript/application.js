// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

import { Application } from "@hotwired/stimulus"
import ChatWidgetController from "controllers/chat_widget_controller"
import FabController from "controllers/fab_controller"
import SmoothScrollController from "controllers/smooth_scroll_controller"

const application = Application.start()
application.register("chat-widget", ChatWidgetController)
application.register("chat-widget-launcher", FabController)
application.register("smooth-scroll", SmoothScrollController)
