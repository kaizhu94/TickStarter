debugger
@rewards.each do |reward|
    debugger
    json.set! reward.id do
        debugger
        json.extract! reward, :id, :title, :project_id, :description, :estimated_delivery, :amount
    end
end