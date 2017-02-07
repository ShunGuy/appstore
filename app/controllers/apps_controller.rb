class AppsController < ApplicationController
  def new
    @props = App.new.to_json
  end

  def edit
    @props = App.find(params[:id]).to_json
  end
end
