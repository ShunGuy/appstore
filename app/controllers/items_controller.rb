class ItemsController < ApplicationController
  def new
    @props = Item.new.to_json
  end

  def edit
    @props = Item.find(params[:id]).to_json
  end
end
