class Api::ProjectsController < ApplicationController
    before_action :ensure_logged_in, only: [:create]

    def index
        @projects = Project.all
        @published_projects = Project.where(published: true)
        render :index
    end

    def show
        @project = Project.find(params[:id])
        @backings = @project.backings
        @pledge = @backings.inject(0){|sum, x| sum + x[:backing_amount]}
        @progress = @pledge / @project[:goal] * 100
        @founder = User.find(@project[:founder_id])
        # debugger
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
        # debugger
        if @project.title_image.attached? && params[:project][:title_image] == 'delete'
            # debugger
            @project.title_image.purge
            render :show
        else
            # debugger
            if @project.title_image.attached? && params[:project][:title_image] 
                @project.title_image.purge
            end
            
            if @project 
                # debugger
                @project.update(project_params)
                # debugger
                render :show
            else
                render json: @project.errors.full_messages, status: 404
            end
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
            :founder_id, :category_id, :title_image)
    end
end
