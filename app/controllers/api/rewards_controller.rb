class Api::RewardsController < ApplicationController

    def index
        # debugger
        @rewards = Reward.where(project_id: params[:project_id])
        # debugger
        render :index
    end

    def create
        @reward = Reward.new(reward_params)
        @items = params[:items]
        debugger
        if @reward.save
            render :show
        else
            render json: @reward.errors.full_messages, status: 422
        end
    end

    private

    def reward_params
        params.require(:reward).permit(:title, :project_id, :description, :estimated_delivery, :amount)
    end
end
