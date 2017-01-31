class HomeController < ApplicationController
  def index
    # Reused in app/views/home/index.html.erb
    @props = { title: "Welcome to this assignment" }
  end
end
