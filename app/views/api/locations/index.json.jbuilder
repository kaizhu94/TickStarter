@locations.each do |location|
    json.set! location.id do
        json.extract! location, :id, :location
    end
end

# locations: {
#     1: {
#         id: 1,
#         location: "United States",
#     },
#     2: {
#         id: 2,
#         location: "Canada",
# },
