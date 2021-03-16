class Api::BackingsController < ApplicationController

    def create
        @backing = Backing.new(backing_params)
        if @backing.save
        else
            render json: @backing.errors.full_messages, status: 422
        end
    end

    def backing_params
        params.require(:backing).permit(:backer_id, :backing_amount, :reward_id)
    end
end
