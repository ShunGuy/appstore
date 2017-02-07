class Api::V1::ItemsController < Api::V1::BaseController
  before_action :set_index, only: [:create, :update, :destroy]

  def index
    respond_with Item.all
  end

  def create
    item = Item.new(item_params)

    if item.save
      item.algolia_index!
      @index.add_object(item)
    end

    respond_with :api, :v1, item
  end

  def destroy
    item = Item.find(params[:id])
    @index.delete_object(params[:objectID])
    respond_with :api, :v1, item.destroy
  end

  def update
    item = Item.find(params["id"])
    item.update_attributes(item_params)
    @index.partial_update_object(item)
    respond_with :api, :v1, item
  end

  private
    def item_params
      params.require(:item).permit(:name, :image, :category, :link, :rank)
    end

    def set_index
      @index = Algolia::Index.new('Appstore')
    end

end
