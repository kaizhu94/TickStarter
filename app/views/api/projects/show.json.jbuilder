

json.extract! @project, :id, :project_name, :title, :subtitle, :description, :risks, :goal, :end_date, :location_id, :launch_date, :published, :founder_id, :category_id
json.category_name  @project.category.category_name
if @project.title_image.attached?
    json.title_image_url url_for(@project.title_image)
end
if @backing
    json.backers @backings.length
end
json.founder @founder
# json.pledge @pledge
# json.progress @progress
# json.title_image_url do
