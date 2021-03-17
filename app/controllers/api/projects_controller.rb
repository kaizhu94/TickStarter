class Api::ProjectsController < ApplicationController
    before_action :ensure_logged_in, only: [:create]

    def index
        # debugger
        @projects = []
        if logged_in?
            @projects = Project.where(founder_id: current_user[:id])
        end
        # debugger
        all_published_projects = Project.where(published: true)
        time = Time.now
        all_published_projects.each do |project|
            if project[:end_date] <= time 
                project.update(published: false)
            end
        end
        @published_projects = Project.where(published: true)
        # debugger
        render :index
    end

    def show
        @project = Project.find(params[:id])
        @backings = @project.backings
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
