
    json.maincategories do 
        @categories.each do |category|
            json.set! category.id do
                json.extract! category, :id, :category_name
            end
        end
    end

    # [{id:1, cat}]
    # json.maincategories do 
    #     json.array! @categories do |category|
    #             json.extract! category, :id, :category_name
    #         end
    #     end
    # end
    json.subcategories do 
        @subcategories.each do |subcategory|
            json.set! subcategory.id do
                json.extract! subcategory, :id, :category_name, :parent_id
            end
        end
    end 

    # categories: {
#     2: {
#         id: 2,
#         categoryName: "Liva Games",
#     },
#     4: {
#         id: 4,
#         categoryName: "Design & Tech",
#     },
# },
    # subcategories: {
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

