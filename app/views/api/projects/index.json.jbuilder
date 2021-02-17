@projects.each do |project|
    json.set! project.id do
        json.extract! project, :id, :project_name, :title, :subtitle, :description, :risks, :goal, :end_date, :location_id, :launch_date, :published, :founder_id, :category_id
        # json.photoUrl url_for(project.photo)
    end
end