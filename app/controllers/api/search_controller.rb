class Api::SearchController < ApplicationController

    def search
        @projects_by_name = Project.where(published: true).where("project_name ILIKE :term", term: "%#{params[:searchTerm]}%")
        render :result
    end

end
