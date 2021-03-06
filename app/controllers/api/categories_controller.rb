class Api::CategoriesController < ApplicationController
    def index
        @categories = Category.where(parent_id: nil)
        @subcategories = Category.where.not(parent_id: nil)
        render :index
    end

    def show
        @categories = Category.find(params[:id])
        render :show
    end


end
