
@rewards.each do |reward|

    json.set! reward.id do

        json.extract! reward, :id, :title, :project_id, :description, :estimated_delivery, :amount
        json.backers reward.backings.length
        json.items do
            reward.items.each do |item|
                json.set! item.id do
                    json.extract! item, :id, :item_name, :project_id
                end
            end
        end
    end
end