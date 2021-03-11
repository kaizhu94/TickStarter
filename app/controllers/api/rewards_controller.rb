class Api::RewardsController < ApplicationController

    def index
        # debugger
        @rewards = Reward.where(project_id: params[:project_id])
        # debugger
        render :index
    end

    def create

    end

    private

    def reward_params
        params.require(:reward).permit(:title, :project_id, :description, :estimated_delivery, :amount)
    end
end
