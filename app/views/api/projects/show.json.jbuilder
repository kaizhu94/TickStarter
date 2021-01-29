# json.set! @project.id do
# end
# debugger
# json.partial! 'api/projects/project', project: @project

json.extract! @project, :id, :project_name, :title, :subtitle, :description, :risks, :goal, :end_date, :location_id, :launch_date, :published, :founder_id, :category_id
json.category_name  @project.category.category_name


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