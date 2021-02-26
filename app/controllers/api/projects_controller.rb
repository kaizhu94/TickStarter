class Api::ProjectsController < ApplicationController
    before_action :ensure_logged_in, only: [:create]
    def index
        @projects = Project.all
        render :index
    end

    def show
        @project = Project.find(params[:id])
        render :show
    end

    def create
        @project = Project.new(project_params)
        if @project.save
            render :show
        else
            render json: @project.errors.full_messages, status: 404
        end
    end

    def update
        @project = Project.find(params[:id])
        debugger
        if @project
            @project.update(project_params)
            render :show
        else
            render json: @project.errors.full_messages, status: 404
        end
    end

    def destroy
        @project = Project.find(params[:id])
        if @project
            @project.destroy
        else
            render json: @project.errors.full_messages, status: 404
        end
    end

    private

    def project_params
        params.require(:project).permit(:project_name, :title, :subtitle, :description, 
            :risks, :goal, :end_date, :location_id, :launch_date, :published, 
            :founder_id, :category_id, :photo)
    end
end
