class Api::ItemsController < ApplicationController
    def index
        @items = Item.where(project_id: params[:project_id])
        render :index
    end

    private

    def item_params
        params.require(:item).permit(:item_name, :project_id)
    end
end
