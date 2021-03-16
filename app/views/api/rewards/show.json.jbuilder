json.extract! @reward, :id, :title, :project_id, :description, :estimated_delivery, :amount
json.items do
    @reward.items.each do |item|
        json.set! item.id do
            json.extract! item, :id, :item_name, :project_id
            json.backers item.backings.length
        end
    end
end