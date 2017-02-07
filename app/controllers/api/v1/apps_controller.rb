class Api::V1::AppsController < Api::V1::BaseController
  before_action :set_index, only: [:create, :update, :destroy]

  def index
    respond_with App.all
  end

  def create
    app = App.new(app_params)

    if app.save
      app.algolia_index!
      @index.add_object(app)
    end

    respond_with :api, :v1, app
  end

  def destroy
    app = App.find(params[:id])
    @index.delete_object(params[:objectID])
    respond_with :api, :v1, app.destroy
  end

  def update
    app = App.find(params["id"])
    app.update_attributes(app_params)
    @index.partial_update_object(app)
    respond_with :api, :v1, app
  end

  private
    def app_params
      params.require(:app).permit(:name, :image, :category, :link, :rank)
    end

    def set_index
      @index = Algolia::Index.new('Appstore')
    end

end
