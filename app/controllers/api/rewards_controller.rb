class Api::RewardsController < ApplicationController

    def index
        # debugger
        @rewards = Reward.where(project_id: params[:project_id])
        # debugger
        render :index
    end

    def create
        # debugger
        @reward = Reward.new(reward_params)
        # debugger
        if @reward.save
            @items = params[:reward][:items]
            @items.each{|key, value| RewardsItem.create!(rewards_id: @reward.id, items_id:key)}
            
            render :show
        else
            render json: @reward.errors.full_messages, status: 422
        end
    end

    def destroy
        @reward = Reward.find(params[:id])
        if @reward
            RewardsItem.where(rewards_id: @reward.id).each do |rewarditem_join|
                rewarditem_join.destroy
            end
            @reward.destroy
        else
            render json: @reward.errors.full_messages, status: 404
        end
    end

    private

    def reward_params
        params.require(:reward).permit(:title, :project_id, :description, :estimated_delivery, :amount)
    end
end
