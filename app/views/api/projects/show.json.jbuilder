# json.set! @project.id do
# end
# debugger
# json.partial! 'api/projects/project', project: @project


json.extract! @project, :id, :project_name, :title, :subtitle, :description, :risks, :goal, :end_date, :location_id, :launch_date, :published, :founder_id, :category_id