class Api::ProjectsController < ApplicationController
    def index
        @projects = Project.all
        render :index
    end

    def show
        @project = Project.find(params[:id])
    end

    private

    def project_params
        params.require(:project).permit(:project_name, :title, :subtitle, :description, 
            :risks, :goal, :end_date, :location_id, :launch_date, :published, :founder_id, :catagory_id)
    end
end
