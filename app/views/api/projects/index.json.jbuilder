@projects.each do |project|
    json.set! project.id do
        json.extract! project, :id, :project_name, :title, :subtitle, :description, :risks, :goal, :end_date, :location_id, :launch_date, :published, :founder_id, :category_id
        # json.phtopUrl do 
        #     json.array! project.photo do |p|
        #         json.url url_for(p)
        #     end
        # end
        if project.title_image.attached?
            json.title_image url_for(project.title_image)
        end
    end
end