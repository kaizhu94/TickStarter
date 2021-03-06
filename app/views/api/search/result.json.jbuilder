json.projects_by_name do
    @projects_by_name.each do |project|
        json.set! project.id do
            json.extract! project, :id, :project_name, :title, :subtitle, :description, :risks, :goal, :end_date, :location_id, :launch_date, :published, :founder_id, :category_id
            json.category_name  project.category.category_name
            pledge = project.backings.inject(0){|sum, x| sum + x[:backing_amount]}
            json.pledge pledge
            json.backers project.backings.length
            # json.progress pledge / project.goal * 100
            json.founder do
                f = User.find(project[:founder_id])
                json.extract! f, :id, :username
            end
            if project.title_image.attached?
                json.title_image url_for(project.title_image)
            end
        end
    end
end
