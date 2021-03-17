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
            render json: @item.errors.full_messages, status: 422
        end
    end

    def update
        @item = Item.find(params[:id])
        if @item
            @item.update(item_params)
            render :show
        else
            render json: @item.errors.full_messages, status: 404
        end
    end

    def destroy
        @item = Item.find(params[:id])
        if @item
            RewardsItem.where(items_id: @item.id).each do |rewarditem_join|
                rewarditem_join.destroy
            end
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
