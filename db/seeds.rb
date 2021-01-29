# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Category.destroy_all
RewardsItem.destroy_all
Reward.destroy_all
Project.destroy_all
Location.destroy_all
Like.destroy_all
Item.destroy_all
# Backing.destroy_all



# //users
u1 = User.create!(
    username: "kai",
    email: "kaizhu@gmail.com",
    password: "123456",
)


# //locations
l1 =Location.create!(
    location: "United States"
)
l2 =Location.create!(
    location: "Canada"
)
l3 =Location.create!(
    location: "China"
)
l4 =Location.create!(
    location: "England"
)



# //categories
c1 = Category.create!(
    category_name: "Art",
)
c16 = Category.create!(
    category_name: "Ceramics",
    parent_id: c1.id
)  
c17 = Category.create!(
    category_name: "Conceptual Art",
    parent_id: c1.id
) 
c18 = Category.create!(
    category_name: "Digital Art",
    parent_id: c1.id
) 
c19 = Category.create!(
    category_name: "Illustration",
    parent_id: c1.id
) 
c20 = Category.create!(
    category_name: "Installations",
    parent_id: c1.id
) 
c21 = Category.create!(
    category_name: "Mixed Media",
    parent_id: c1.id
) 
c22 = Category.create!(
    category_name: "Painting",
    parent_id: c1.id
) 
c23 = Category.create!(
    category_name: "Performance Art",
    parent_id: c1.id
) 
c24 = Category.create!(
    category_name: "Public Art",
    parent_id: c1.id
) 
c25 = Category.create!(
    category_name: "Sculpture",
    parent_id: c1.id
) 
c26 = Category.create!(
    category_name: "Social Practice",
    parent_id: c1.id
) 
c27 = Category.create!(
    category_name: "Textiles",
    parent_id: c1.id
) 
c28 = Category.create!(
    category_name: "Video Art",
    parent_id: c1.id
) 
c2 = Category.create!(
    category_name: "Comics",
)

c29 = Category.create!(
    category_name: "Comic Books",
    parent_id: c2.id
)
c30 = Category.create!(
    category_name: "Events",
    parent_id: c2.id
)
c31 = Category.create!(
    category_name: "Graphic Novels",
    parent_id: c2.id
)
c32 = Category.create!(
    category_name: "Webcomics",
    parent_id: c2.id
)
c3 = Category.create!(
    category_name: "Crafts",
)
c33 = Category.create!(
    category_name: "Candles",
    parent_id: c3.id
)
c34 = Category.create!(
    category_name: "Crochet",
    parent_id: c3.id
)
c35 = Category.create!(
    category_name: "DIY",
    parent_id: c3.id
)
c4 = Category.create!(
    category_name: "Dance",
)
c36 = Category.create!(
    category_name: "Performances",
    parent_id: c4.id
)
c37 = Category.create!(
    category_name: "Residencies",
    parent_id: c4.id
)
c38 = Category.create!(
    category_name: "Spaces",
    parent_id: c4.id
)
c39 = Category.create!(
    category_name: "Workshops",
    parent_id: c4.id
)
c5 = Category.create!(
    category_name: "Design",
)
c40 = Category.create!(
    category_name: "Architecture",
    parent_id: c5.id
)
c41 = Category.create!(
    category_name: "Civic Design",
    parent_id: c5.id
)
c42 = Category.create!(
    category_name: "Grapgic Design",
    parent_id: c5.id
)
c43 = Category.create!(
    category_name: "Interactive Design",
    parent_id: c5.id
)
c6 = Category.create!(
    category_name: "Fashion",
)
c44 = Category.create!(
    category_name: "Accessories",
    parent_id: c6.id
)
c45 = Category.create!(
    category_name: "Apparel",
    parent_id: c6.id
)
c46 = Category.create!(
    category_name: "Childrenswear",
    parent_id: c6.id
)
c47 = Category.create!(
    category_name: "Couture",
    parent_id: c6.id
)
c7 = Category.create!(
    category_name: "Film & Video",
)
c48 = Category.create!(
    category_name: "Action",
    parent_id: c7.id
)
c49 = Category.create!(
    category_name: "Animation",
    parent_id: c7.id
)
c50 = Category.create!(
    category_name: "Comedy",
    parent_id: c7.id
)
c51 = Category.create!(
    category_name: "Documentary",
    parent_id: c7.id
)
c8 = Category.create!(
    category_name: "Food",
)
c52 = Category.create!(
    category_name: "Bacon",
    parent_id: c8.id
)
c53 = Category.create!(
    category_name: "Community Gardens",
    parent_id: c8.id
)
c54 = Category.create!(
    category_name: "Cookbooks",
    parent_id: c8.id
)
c55 = Category.create!(
    category_name: "Drinks",
    parent_id: c8.id
)
c9 = Category.create!(
    category_name: "Games",
)
c56 = Category.create!(
    category_name: "Gaming Hardware",
    parent_id: c9.id
)
c57 = Category.create!(
    category_name: "Live Games",
    parent_id: c9.id
)
c58 = Category.create!(
    category_name: "Mobile Games",
    parent_id: c9.id
)
c59 = Category.create!(
    category_name: "Playing Cards",
    parent_id: c9.id
)
c10 = Category.create!(
    category_name: "Journalism",
)
c60 = Category.create!(
    category_name: "Audio",
    parent_id: c10.id
)
c61 = Category.create!(
    category_name: "Photo",
    parent_id: c10.id
)
c62 = Category.create!(
    category_name: "Print",
    parent_id: c10.id
)
c63 = Category.create!(
    category_name: "Video",
    parent_id: c10.id
)
c11 = Category.create!(
    category_name: "Music",
)
c83 = Category.create!(
    category_name: "Blues",
    parent_id: c11.id
)
c64 = Category.create!(
    category_name: "Chiptune",
    parent_id: c11.id
)
c65 = Category.create!(
    category_name: "Classical Music",
    parent_id: c11.id
)

c12 = Category.create!(
    category_name: "Photography",
)
c66 = Category.create!(
    category_name: "Animals",
    parent_id: c12.id
)
c67 = Category.create!(
    category_name: "Fine Art",
    parent_id: c12.id
)
c68 = Category.create!(
    category_name: "Nature",
    parent_id: c12.id
)
c69 = Category.create!(
    category_name: "People",
    parent_id: c12.id
)
c13 = Category.create!(
    category_name: "Publishing",
)
c70 = Category.create!(
    category_name: "Academic",
    parent_id: c13.id
)
c71 = Category.create!(
    category_name: "Anthologies",
    parent_id: c13.id
)
c72 = Category.create!(
    category_name: "Art Books",
    parent_id: c13.id
)
c73 = Category.create!(
    category_name: "Calendars",
    parent_id: c13.id
)
c14 = Category.create!(
    category_name: "Technology",
)
c74 = Category.create!(
    category_name: "3D Printing",
    parent_id: c14.id
)
c75 = Category.create!(
    category_name: "Apps",
    parent_id: c14.id
)
c76 = Category.create!(
    category_name: "Camera Equipment",
    parent_id: c14.id
)
c77 = Category.create!(
    category_name: "DIY Electronics",
    parent_id: c14.id
)
c15 = Category.create!(
    category_name: "Theater",
)
c78 = Category.create!(
    category_name: "Experimental",
    parent_id: c15.id
) 
c79 = Category.create!(
    category_name: "Festivals",
    parent_id: c15.id
) 
c80 = Category.create!(
    category_name: "Immersive",
    parent_id: c15.id
)  
c81 = Category.create!(
    category_name: "Musical",
    parent_id: c15.id
) 

#//projects
p1 = Project.create!(
    project_name: "GOPOSE: World’s first 2 in 1 fix posture and pulse massager",
    title: "GOPOSE Tech | Fix Posture | Pulse Massage | Intuitive GOPOSE App | Get Your Health & Confidence Back",
    subtitle: "A nice equipment for fix posture",
    description: "Introducting GOPOSE, world's first fix posture and pulse massager. It is an innovative all in one gadget for your back. Once put on, it will automatically improve and correct your posture day by day. ",
    location_id: l1.id,
    published: false,
    founder_id: u1.id,
    category_id: c77.id,
)
p2 = Project.create!(
    project_name: "massager",
    title: "GOPOSE Tech | Fix Posture | Pulse Massage | Intuitive GOPOSE App | Get Your Health & Confidence Back",
    subtitle: "A nice equipment for fix posture",
    description: "Introducting GOPOSE, world's first fix posture and pulse massager. It is an innovative all in one gadget for your back. Once put on, it will automatically improve and correct your posture day by day. ",
    location_id: l2.id,
    published: true,
    founder_id: u1.id,
    category_id: c77.id,
)