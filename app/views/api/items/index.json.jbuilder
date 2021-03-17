@items.each do |item|
    json.set! item.id do
        json.extract! item, :id, :item_name, :project_id
        json.rewards item.rewards.length
    end
end