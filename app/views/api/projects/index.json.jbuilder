@projects.each do |project|
    json.set! project.id do
        json.extract! project, :id, :project_name, :title, :subtitle, :description, :risks, :goal, :end_date, :location_id, :launch_date, :published, :founder_id, :category_id
       
        pledge = project.backings.inject(0){|sum, x| sum + x[:backing_amount]}
        json.pledge pledge
        if project.title_image.attached?
            json.title_image url_for(project.title_image)
        end
    end
end