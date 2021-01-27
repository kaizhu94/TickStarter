json.categories do 

    @categories.each do |category|
        debugger
        json.set! category.id do
            json.extract! category, :id, :category_name, :parent_id
        end
    end
    
end
@subcategories.each do |category|
    debugger
    json.set! category.id do
        json.extract! category, :id, :category_name, :parent_id
    end
end
{
    # categories: {
#     2: {
#         id: 2,
#         categoryName: "Liva Games",
#         parentId: 6,
#     },
#     4: {
#         id: 4,
#         categoryName: "Design & Tech",
#         parenId: null,
#     },
# },
subcategories

}