class Api::ItemsController < ApplicationController
    def index
        @items = Item.where(project_id: params[:project_id])
        render :index
    end

    def create
        @item = Item.new(item_params)
        if @item.save
            render :show
        else
            render json: @item.errors.full_messages, status: 404
        end
    end

    def destroy
        @item = Item.find(params[:id])
        if @item
            @item.destroy
        else
            render json: @item.errors.full_messages, status: 404
        end
    end

    private

    def item_params
        params.require(:item).permit(:item_name, :project_id)
    end
end
