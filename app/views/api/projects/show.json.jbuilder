# json.set! @project.id do
# end
# json.partial! 'api/projects/project', project: @project

json.extract! @project, :id, :project_name, :title, :subtitle, :description, :risks, :goal, :end_date, :location_id, :launch_date, :published, :founder_id, :category_id
json.category_name  @project.category.category_name
if @project.title_image.attached?
    json.title_image_url url_for(@project.title_image)
end
json.backers @backings.length
json.pledge @pledge
json.progress @progress
# json.title_image_url do
#     if @project.title_image.attached?
#         debugger
#        url_for(@project.title_image)
#     end
# end
# json.photoUrl do 
#     json.array! @project.photo do |p|
#         # debugger
#         json.url url_for(p)
#     end
# end
# @project.photo.each do |photo|
#     json.photoUrl url_for(photo)
# end

# json.project do
#     json.id @project.id
#     json.project_name @project.project_name
#     json.title @project.title
#     json.subtitle @project.subtitle
#     json.description @project.description
#     json.risks @project.risks
#     json.goal @project.goal
#     json.end_date @project.end_date
#     json.location_id @project.location_id
#     json.launch_date @project.launch_date
#     json.published @project.published
#     json.founder_id @project.founder_id
#     json.category_id @project.category_id
#     json.main_category @project.category.category_name
# end