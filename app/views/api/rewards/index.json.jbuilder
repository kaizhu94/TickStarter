
@rewards.each do |reward|

    json.set! reward.id do

        json.extract! reward, :id, :title, :project_id, :description, :estimated_delivery, :amount
    end
end