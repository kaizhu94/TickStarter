class Api::SearchController < ApplicationController

    def search
        debugger
        @projects = Project.joins(:category).where(published: true).where("category_name ILIKE :term", term: "%#{params[:searchTerm]}%")
        debugger
    end

end
