# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Category.destroy_all
RewardsItem.destroy_all
Reward.destroy_all
Project.destroy_all
Location.destroy_all
Like.destroy_all
Item.destroy_all
Backing.destroy_all



# //users
u1 = User.create!(
    username: "kai",
    email: "kaizhu@gmail.com",
    password: "123456",
)
u2 = User.create!(
    username: "star",
    email: "star@gmail.com",
    password: "123456",
)
u3 = User.create!(
    username: "light",
    email: "light@gmail.com",
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

    # launch_date: "2023-10-27T16:18:33.000Z",
    # end_date: "2023-12-30T15:03:33.000Z"  
#//projects
p1 = Project.create!(
    project_name: "BRING THE SUN TO LUCKENWALDE",
    subtitle: "Help us bring the award-winning beach opera Sun & Sea to E-WERK Luckenwalde, a new art institution and renewable power station!",
    description: "EN: E-WERK Luckenwalde, a renewable power station and art centre 30 minutes south of Berlin, has invited Sun & Sea to be shown in the city for two days this spring, Saturday 1 to Sunday 2 May 2021.",
    location_id: l1.id,
    published: true,
    founder_id: u1.id,
    category_id: c17.id,
    goal: 9000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p1.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/1.jpg"), filename: "1.jpg")
p2 = Project.create!(
    project_name: "The Art of LUOMAN",
    subtitle: "An 80+ page hardcover artbook, illustrated by Man Luo",
    description: "The art of Luoman is a collection of artworks created by the artist Man Luo over the last few years. It contains over 60 illustrations, some of which are unpublished, and several sketches with strong textures and a minimalist style. Inside the book, you will also find two tutorials, where the artist will show you their personal way to create a digital illustration and how they approach life drawing.",
    risks: "The biggest challenge of this campaign is to ship every order by November 2021.",
    location_id: l2.id,
    published: true,
    founder_id: u2.id,
    category_id: c19.id,
    goal: 8000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p2.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/2.png"), filename: "2.png")
p3 = Project.create!(
    project_name: "Imprese Pericolose - Fine Art Drypoint Etching & Printing",
    subtitle: "I'm an Artist based @Gate44. I specialised in Drypoint Etching & printing. I am raising funds to support my next Exhibition.",
    description: "I focused my studies and research on Futurism, an Italian artistic and literary movement of the early 20thcentury.",
    risks: "The real risk relies in the amount of Monochrome prints that will be funded. Given that Press Printing is all carried out by hand and requires lots of effort coupled with an unlimted number of Monochrome orders I will required the support of a printing shop with several press prints in order to cope with the demand.",
    location_id: l3.id,
    published: true,
    founder_id: u2.id,
    category_id: c22.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p3.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/3.png"), filename: "3.png")
p4 = Project.create!(
    project_name: "Of Mountains, Seas and Skies - An Enamel Pin Collection",
    subtitle: "A collection of enamel pins based on Chinese mythology.",
    description: "While pins need to be unlocked by stretch goals, every design is available as a sticker from the start of the campaign!  Each sticker measures roughly 2 inches and is printed on durable, glossy vinyl.",
    risks: "In addition to successfully running a pin Kickstarter in the past, I have also been running my own online store for the past 4 years! My experience means that I am very familiar with the process of manufacturing and sending out pins in a timely manner. The manufacturer I am using for this pin Kickstarter is the same as the one I used for my Pride Dragons Kickstarter, and I am very happy with their quality, speed, and communication.",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c25.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p4.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/4.png"), filename: "4.png")

p5 = Project.create!(
    project_name: "Private Studio Electric Kiln",
    subtitle: "Raising money for an electric kiln for bisque ware and low-fire, oxidized glaze ware.",
    description: "My name is Charlie Cartwright, I have a BFA in Ceramics which I use to create unique works of art for coffee rituals. I'm raising money for a small electric kiln. ",
    risks: "My at home studio is a small working space which doesn't allow for bulk work. Everything is made in small batches potentially putting things behind schedule.",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c16.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p5.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/5.jpg"), filename: "5.jpg")

p6 = Project.create!(
    project_name: "Nostalgic Dog: Mix n Match Collar Pins!",
    subtitle: "A set of nostalgic puppy collar pins, potentially with different variations!",
    description: "My name is Laine and I'm hoping to bring these little collar pins to life !! I'm currently an animation major junior, a merch designer, and an illustrator! I've been running an online store (here) since August of 2020!",
    risks: "Due to the enamel pins being manufactured, it's possible that some could be defective. Should this happen, I will be in contact with the manufacturer to fix this! This could add 2-4 weeks to the schedule, depending on severity and how fast they can be replaced.",
    location_id: l3.id,
    published: true,
    founder_id: u1.id,
    category_id: c18.id,
    goal: 5000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p6.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/6.png"), filename: "6.png")

p7 = Project.create!(
    project_name: "A Touch of Color [RELAUNCH]",
    subtitle: "A colorful fairy-themed art anthology",
    description: "Fairies are everywhere. There’s not a culture that hasn’t told tales of tiny tricksters, benevolent creatures, or winged sprites that weave their magic into the world. It’s inevitable that such creatures would, over time, influence our imagination and inspire countless pieces of art. ",
    risks: "We've done our best to minimize the risks, however, some issues may arise in regards to slow shipping times when it comes to receiving items from manufacturers and when shipping out the rewards. We will maintain communication with all the backers at all time!",
    location_id: l1.id,
    published: true,
    founder_id: u1.id,
    category_id: c20.id,
    goal: 4000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p7.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/7.png"), filename: "7.png")


p8 = Project.create!(
    project_name: "I Wish I Wasn't Royalty",
    subtitle: "I Wish I Wasn’t Royalty is a poetic & artistic collaboration resulting in a chapbook disguised as a 54-card playing deck.",
    description: "Founded in 2017, Game Over Books is a small Boston-based press run by nerdy artists. Our mission? Print unique books from diverse voices that push creative writing forward into the Next Level. ",
    risks: "Our first run of I Wish I Wasn’t Royalty decks was incredibly popular, and sold out during the pre order phase. Since the decks were released in November, we have received repeated requests for another run. ",
    location_id: l1.id,
    published: true,
    founder_id: u1.id,
    category_id: c21.id,
    goal: 4000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p8.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/8.png"), filename: "8.png")

p9 = Project.create!(
    project_name: "MIDxMIDWST",
    subtitle: "A Mural Art & Culture Fest unlike any other in the Midwest. 9 artists. 2 Days. Live Music. MIDWST.",
    description: "MIDxMIDWST is a new arts & culture initiative in the heart of the Midwest: Springfield, MO.  Later on, we'll work on big initiatives like a world class public art residency program.",
    risks: "We're closely monitoring public health precautions and guidelines surrounding the COVID19 pandemic. It is of the utmost importance to us to promote and facilitate a safe community environment and we are committed to following CDC guidelines in planning and preparation of our festival..",
    location_id: l1.id,
    published: true,
    founder_id: u2.id,
    category_id: c24.id,
    goal: 4000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p9.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/9.png"), filename: "9.png")

p10 = Project.create!(
    project_name: "Omni Tarot by Olivia M Healy",
    subtitle: "a bold and modern 78 card tarot deck which draws from ancient and occult influences & contemporary subcultures.",
    description: "I am an illustrator creating bold figurative work that aims to empower feminine identities and the explore the diversity of gender expression. ",
    risks: "So far the entire deck is completed and ready to be printed once the kickstarter goal is reached! During the course of this campaign I will be finishing up writing and formatting the Guidebook as well as designing the Altar Cloth.",
    location_id: l1.id,
    published: true,
    founder_id: u1.id,
    category_id: c2.id,
    goal: 2000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p10.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/10.jpg"), filename: "10.jpg")

p11 = Project.create!(
    project_name: "The Dancer #1 - A Psychological Martial Arts Thriller",
    subtitle: "A dancer/ASSASSIN is forced to deal with her childhood trauma of witnessing her parents' deaths.",
    description: " They Call Her...The Dancer is a story that focuses on the beauty and brutality of dance and martial arts, delving into the morally gray psyche of a professional dancer and assassin.",
    risks: "We've attempted to manage all of the risks associated with this project by doing most of the leg work before this campaign's launch so that we could ensure that we continue to deliver immediately after the campaign.",
    location_id: l1.id,
    published: true,
    founder_id: u2.id,
    category_id: c29.id,
    goal: 4000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p11.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/11.png"), filename: "11.png")

p12 = Project.create!(
    project_name: "I Am Hexed: Issue #4",
    subtitle: "Equality is Magic: A comic book about the ongoing political struggles of modern day witches.",
    description: "This Kickstarter Campaign is for Issue #4, the final issue of our story. The fourth issue's script is complete and with your help we can go full speed ahead to commission art production and make issue #4 a reality!",
    risks: "The production and project management of this title is “in-house” and comfortably in my control, eliminating many variables that could cause delays. ",
    location_id: l1.id,
    published: true,
    founder_id: u2.id,
    category_id: c29.id,
    goal: 4000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p12.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/12.jpg"), filename: "12.jpg")

p13 = Project.create!(
    project_name: "THE TWIN BLADES",
    subtitle: "A 44 page action comic that blends sci-fi and Aztec mythology into a story about family, believing in yourself, and magical swords.",
    description: "There have been four previous suns over four previous earths...each one born of the gods' sacrifice and each destroyed by the gods' conflicts.",
    risks: "Risks are minimal. Though this is my (Jarred) first Kickstarter and Julio and Rocco's first long form comic work, we are more than halfway completed with inks and working through colored pages as we speak. Though delays are possible with this sort of a new undertaking, the likelihood remains low.",
    location_id: l1.id,
    published: true,
    founder_id: u2.id,
    category_id: c29.id,
    goal: 5000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p13.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/13.jpg"), filename: "13.jpg")

p14 = Project.create!(
    project_name: "Singapore's First Queer Zinefest!",
    subtitle: "We made it! We couldn't have done it without you! Queer stories, art, music, and community come together in Singapore on the 14th July. See you there!",
    description: "ZINE (“ZEEN”): A self-published or independently published work, usually a book or magazine. They can be made by anyone, about anything, for mass distribution or for personal collection. ",
    risks: "Queer Zinefest SG is run by a team of passionate, dedicated individuals. Between us, we've successfully crowdfunded previous artistic projects and have experience creating merchandise for sale.",
    location_id: l1.id,
    published: true,
    founder_id: u2.id,
    category_id: c30.id,
    goal: 5000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p14.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/14.jpg"), filename: "14.jpg")

p15 = Project.create!(
    project_name: "This Is What Democracy Looks Like, A Comic Book, A Road Trip",
    subtitle: "We made it! We couldn't have done it without you! Queer stories, art, music, and community come together in Singapore on the 14th July. See you there!",
    description: "Produced by The Center for Cartoon Studies (CCS), This Is What Democracy Looks Like, A Graphic Guide To Governance is the result of a collaboration of educators and world-class cartoonists and is designed to help teachers  prepare students to be empowered, informed, and civic minded. ",
    risks: "This is CCS's first Kickstarter campaign, but we are old pros at creating and printing exceptional comics and we run a dynamic college so we can handle the logistics of a road trip. ",
    location_id: l1.id,
    published: true,
    founder_id: u2.id,
    category_id: c30.id,
    goal: 5000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p15.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/15.jpg"), filename: "15.jpg")


p16 = Project.create!(
    project_name: "The Croaking Volume 1",
    subtitle: "The collected edition of volume 1 of the Ringo-nominated webcomic by Megan Grey!",
    description: "The Roost - the world’s most prestigious military academy - has never accepted a Crow into its ranks. Until now. However, the conditions surrounding Scra’s acceptance are shrouded in conspiracy, and his new roommate Ky won’t rest until he finds out just where he goes every night.",
    risks: "There is little risk in that this book is being published and the art has been completed. The team running the Kickstarter have worked with the vendors and printers before and have confidence in the quality and timeline we've outlined. However, during production mistakes can happen and some of the vendors are overseas.",
    location_id: l1.id,
    published: true,
    founder_id: u2.id,
    category_id: c31.id,
    goal: 5000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p16.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/16.jpg"), filename: "16.jpg")


p17 = Project.create!(
    project_name: "SAINTS'QUARTER: Episode Two",
    subtitle: "Life in the ‘Quarter isn’t just cute shops and witchy neighbors... It's time to print Episode Two!",
    description: "Saints’Quarter is a webcomic series about an odd little neighborhood between Brooklyn and Queens, NY, and the people both magical, non, or Otherwise.",
    risks: "The timeline has been made with setbacks from mail slowdowns and pandemic complications in mind. ",
    location_id: l1.id,
    published: true,
    founder_id: u2.id,
    category_id: c32.id,
    goal: 5000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p17.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/17.jpg"), filename: "17.jpg")

p18 = Project.create!(
    project_name: "The Mysterious Chateau (Webcomic)",
    subtitle: "comics",
    description: "Claire, a young librarian in a rather common city just received a letter with a key inside, with this she also receives a summon, once arrived there she is accepted by Fin Taylor a lawyer specialized in inheritance law.",
    risks: "I believe I have a good story based Webcomic, but I'm just starting out so I'm relying on organic audience, I'm asking for a humble amount of money so I believe I can hit the target at the end.",
    location_id: l1.id,
    published: true,
    founder_id: u2.id,
    category_id: c32.id,
    goal: 5000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p18.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/18.png"), filename: "18.png")


p19 = Project.create!(
    project_name: "Magicals Creatures",
    subtitle: "Pin and stickers",
    description: " [FR] Bonjour et bienvenue dans ce nouveau projet. Moi c’est Cécile alias Erzebeth ^~^ je travaille depuis plusieurs semaines sur ces petites créatures. J’espère de tout mon cœur qu’elles vous plairont. Passons à la présentation de ce fameux projet. 😊",
    risks: "💔 Comme tout projet si celui ci n'abouti pas vous n'aurez aucun prélèvement et les pin's ne seront pas produits. Mais on espère que cela n'arrive pas :p.",
    location_id: l1.id,
    published: true,
    founder_id: u3.id,
    category_id: c3.id,
    goal: 5000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p19.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/19.png"), filename: "19.png")

p20 = Project.create!(
    project_name: "Ukiyo Candles",
    subtitle: "Eco-friendly minimalist candles, hand poured in London.",
    description: "What is the first thing you notice when walking into someone’s home? The smell, right? That’s why your parents always used to spray his/her air freshener and light all the candles before guests came around. Candles are a unique way of making our homes feel even cosier.",
    risks: "Candles have been on the market for years and the popularity is ever-growing. The timeline has given plenty of time in order to hand-make and distribute the products, making sure to include extra time for any issues that may arise along the way.",
    location_id: l1.id,
    published: true,
    founder_id: u1.id,
    category_id: c33.id,
    goal: 2000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p20.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/20.jpg"), filename: "20.jpg")

p21 = Project.create!(
    project_name: "Homegrown Scentsability",
    subtitle: "Wax melts, candles, sugar scrubs, and soaps",
    description: "Hello from Homegrown Scentsability. We are a tiny outfit of crafters looking to expand our offerings. Currently we offer hand poured candles, wax melts and tarts, as well as handpoured soaps and sugar scrubs.",
    risks: "Covid-19 has already affected our supply chain and it may get worse.",
    location_id: l1.id,
    published: true,
    founder_id: u1.id,
    category_id: c33.id,
    goal: 2000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p21.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/21.jpg"), filename: "21.jpg")

p22 = Project.create!(
    project_name: "Character Inspired Hats",
    subtitle: "I started making hats inspired by animated characters from my favorite films. I would love to share them and expand my micro business.",
    description: "I am currently raising money to increase my yarn supply so that I can create a wider variety of items and grow my micro-business.",
    risks: "These hats are generally one size fits all. They are all size Adult which measures approximately 19-21 inches. As these items are all handmade, some minor variations may occur from item to item.",
    location_id: l1.id,
    published: true,
    founder_id: u1.id,
    category_id: c34.id,
    goal: 2000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p22.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/22.jpg"), filename: "22.jpg")

p23 = Project.create!(
    project_name: "Adopt a Popli - A cute lifetime friend",
    subtitle: "Let your Popli take care of the challenges in your life. They’ll be your forever friend, guiding you with absolute love and support.",
    description: "Welcome! A place that exists to those who stop, and follow the birdsong. Nestled between the bustling streets of Alice Way and Bellbird Place, lies the Fident Forest. Unassuming upon first glance, but the deeper you explore, the more curiosities unfold. ",
    risks: "For backers requesting choose your own colourway options - I have access to a limited quantity of yarn. But there is a possibility I may not have your requested colour. ",
    location_id: l1.id,
    published: true,
    founder_id: u1.id,
    category_id: c34.id,
    goal: 2000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p23.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/23.jpeg"), filename: "23.jpeg")

p24 = Project.create!(
    project_name: "The Shawl Club Book - A Collection of Crochet Patterns",
    subtitle: "This project is to raise funds for a very special collection of crocheted shawl patterns for all abilities and tastes.",
    description: "I learned to crochet about six years ago, and about two years ago I started to create my own designs.",
    risks: "This project has limited risks associated with it as the patterns are already written. The main jobs left to do are the photography (I have a fantastic local photographer lined up for the work) and typesetting the book ready for printing. ",
    location_id: l1.id,
    published: true,
    founder_id: u2.id,
    category_id: c34.id,
    goal: 3000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p24.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/24.jpg"), filename: "24.jpg")

p25 = Project.create!(
    project_name: "Doggo Tomodachi Fizzy Drinkies Enamel Pin",
    subtitle: "A series of fizzy drinks close to heart and close to home.",
    description: "This collection features 4 different drinks that are close to home! This will be a shorter campaign than usual so do support early if you do not wish to miss out! :)",
    risks: "There could always be possible manufacturing defects as all pins are handmade. However, most of the time 90-85% of the pins are of great standard and I'm working with the same manufacturer I've always been working with.",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c35.id,
    goal: 3000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p25.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/25.jpg"), filename: "25.jpg")

p26 = Project.create!(
    project_name: "My Exclusive Vision mini Bird Bag",
    subtitle: "Limited Hand Made by my own",
    description: "Hi everyone, I am Killky, a bird lover, an illustrator. ",
    risks: "I made this bag for my interested and I have to take quite a long time to finish one. So the risk and challenge is my time control.",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c35.id,
    goal: 4000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p26.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/26.jpg"), filename: "26.jpg")

p27 = Project.create!(
    project_name: "Kayvee Tees",
    subtitle: "A paint-night type experience for screen printing t-shirts.",
    description: "I started Kayvee Tees as a teacher looking to make fun shirts for spirit days at school, but knowing that I didn't love the feel or wear of heat pressed vinyl. ",
    risks: "The biggest challenge currently is finding the perfect storefront and creating a functional space for the screen printing workshops while also adhering to the current Rhode Island COVID restrictions. ",
    location_id: l4.id,
    published: true,
    founder_id: u3.id,
    category_id: c35.id,
    goal: 5000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p27.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/27.jpg"), filename: "27.jpg")

p28 = Project.create!(
    project_name: "RAWdance presents: Mine",
    subtitle: "'Mine' - a theatrical dance installation unearthing where possession lies in the body. Dec. 6-15 at Joe Goode Annex, SF.",
    description: "RAWdance is embarking on our newest and most adventurous project to date: an evening-length work for five amazing dancers, transforming the unconventional Joe Goode Annex into an elevated playground of nets and hooks, and creating an intimate, sensorial experience for limited houses.",
    risks: "There are still huge risks involved both on the design and the performance side (no dancers will be harnessed during this piece). But with your support, we will be able to make the most of every minute we have with the amazing team behind this project. Thank you for helping to bring it to life!",
    location_id: l4.id,
    published: true,
    founder_id: u3.id,
    category_id: c4.id,
    goal: 5000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p28.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/28.jpg"), filename: "28.jpg")

p29 = Project.create!(
    project_name: "Cats Paying Dues 10th Anniversary (CPD10)",
    subtitle: "Join us for the world premiere of THREE SUITES! Including a special collaboration with Max ZT and House of Waters.",
    description: "Cats Paying Dues (CPD) is a tap dance company by Andrew Nemr now celebrating its 10th Anniversary.",
    risks: "The major challenge in a theatrical production (particularly in New York City) is space. That's why we have already secured dates with two venues that are appropriate for the production and available during the proposed time frame.",
    location_id: l1.id,
    published: true,
    founder_id: u1.id,
    category_id: c36.id,
    goal: 5000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p29.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/29.jpg"), filename: "29.jpg")

p30 = Project.create!(
    project_name: "Lindsay Nelko presents AWAKENING",
    subtitle: "Join us for the world premiere of THREE SUITES! Including a special collaboration with Max ZT and House of Waters.",
    description: "AWAKENING will premier in NYC at The Ailey CitiGroup Theatre on August 6th & 7th 2014! Choreographed by Lindsay Nelko, the 2013 CAPEZIO A.C.E AWARDS 2nd Runner Up Winner. ",
    risks: "This opportunity requires great discipline, passion and creativity. This is something I have been dreaming about for over a decade, and I am honored to have an opportunity to create and showcase my work on this level.",
    location_id: l1.id,
    published: true,
    founder_id: u1.id,
    category_id: c36.id,
    goal: 5000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p30.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/30.jpg"), filename: "30.jpg")

p31 = Project.create!(
    project_name: "Enter The Cave",
    subtitle: "WIFE's 'Enter the Cave' is a story of one unified mind told through three separate bodies via dance, illusion and projection mapping.",
    description: "WIFE is embarking on the creation of a new evening length live performance. Loosely based on Plato’s Allegory of the Cave, Enter the Cave is a story of transformation and transcendence told through illusion. ",
    risks: "Finding a non-traditional performance space where WIFE can create an immersive experience with large set pieces, lighting, and projections, as well as set up and rehearse with ample time to prepare the show also poses a challenge.",
    location_id: l3.id,
    published: true,
    founder_id: u2.id,
    category_id: c36.id,
    goal: 8000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p31.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/31.jpg"), filename: "31.jpg")

p32 = Project.create!(
    project_name: "Retio - The Moment Never Ends",
    subtitle: "Handcrafted retro radio speaker with vintage Nixie tubes. A tribute to the precious moments in the past.",
    description: "Retio is an all-in-one retro radio, Bluetooth speaker, and clock. It uses Nixie tubes to display time and radio frequencies. Retio is portable, with a 6800mAh battery that supports 6 hours of playback and clock time.",
    risks: "We take your pledge seriously. Being designers and craftspeople who have made and sold Nixie products for 12 years, we have worked diligently to bring our ideas into mass production and have an excellent track record with delivering them within stated deadlines. ",
    location_id: l3.id,
    published: true,
    founder_id: u2.id,
    category_id: c5.id,
    goal: 8000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p32.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/32.jpg"), filename: "32.jpg")

p33 = Project.create!(
    project_name: "systemson: DIY furniture",
    subtitle: "DIY furniture kits offering endless possibilities. Create your own lamps, stools, shelves and other furniture using only a few parts.",
    description: "A DIY furniture system consisting of a small number of basic building blocks but offering endless possibilities.",
    risks: "We have a lot of experience finishing projects and finding the right production solutions involving a lot of different materials and we have also tested various production sites to assure the quality and production in case of problems.  ",
    location_id: l3.id,
    published: true,
    founder_id: u2.id,
    category_id: c40.id,
    goal: 8000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p33.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/33.jpg"), filename: "33.jpg")

p34 = Project.create!(
    project_name: "Plans and the Architectural model of the Going Merry",
    subtitle: "Creating the most famous anime ship designs made by an architect",
    description: "As a fan of anime, I know the importance that this little ship has had for the history of the series and the impact on its characters, that is why as a tribute and using the original sketches of Oda.",
    risks: "This is the first Kickstarter that I do so I have no experience in this sector, however I have enough experience in the field of architectural modeling to resolve any eventuality that may arise.",
    location_id: l3.id,
    published: true,
    founder_id: u2.id,
    category_id: c40.id,
    goal: 8000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p34.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/34.jpg"), filename: "34.jpg")

p35 = Project.create!(
    project_name: "+ POOL",
    subtitle: "A water-filtering floating pool in New York for everybody",
    description: "+ POOL started with a simple goal: instead of trying to clean the entire river, what if you started by just cleaning a small piece of it?  And what if you could change how New Yorkers see their rivers, just by giving them a chance to swim in it?",
    risks: "When compared with most projects here on Kickstarter, + POOL is larger, more costly and will take longer to complete. And with any complex building project, from a kitchen refurbishment to a brand new city, budgets and estimates can change. ",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c41.id,
    goal: 8000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p35.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/35.jpg"), filename: "35.jpg")

p36 = Project.create!(
    project_name: "The French Quarter Parklet",
    subtitle: "We're building a public parklet on 21st at Main. This project adds a bike bar and a community art wall.",
    description: "The chocolaterie will sponsor and maintain the parklet, but shop owner Anne-Geneviève Poitras needs your help to Kickstart extra features for this fully public space.",
    risks: "The French Quarter Parklet is 100% funded with the exception of the bike bar and additional features as presented in the video.",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c41.id,
    goal: 8000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p36.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/36.jpg"), filename: "36.jpg")

p37 = Project.create!(
    project_name: "The Uni: a portable, open-air reading room for public space",
    subtitle: "We're building a structure that will allow us to quickly deploy and operate temporary reading rooms in almost any urban setting.",
    description: "The Uni is a tool to share books, showcase the act of learning, and improve public space. It is a portable infrastructure, well-adapted to the urban environment, lightweight and partner-driven, that can offer books and learning experiences.",
    risks: "",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c41.id,
    goal: 9000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p37.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/37.png"), filename: "37.png")

p38 = Project.create!(
    project_name: "A visual collection of Pillar Boxes",
    subtitle: "A poster illustrating the evolution of the pillar boxes in Britain, from their origins until the present day.",
    description: "My name is Jose, I am a Spanish architect living in London, and I have two big passions, design and heritage. I would like your help to create a poster illustrating the evolution of the pillar boxes over time in the UK.",
    risks: "I am familiar with the process and will be working hard to solve any potential challenges. This project has been researched, illustrated, and designed with the same love that I will take in its production.",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c42.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p38.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/38.jpg"), filename: "38.jpg")

p39  = Project.create!(
    project_name: "New Seymour Chwast Book Protests 5,000 Years of War",
    subtitle: "Design icon Seymour Chwast has used his art to battle war since 1957. His new antiwar book features 70 pages of original illustrations.",
    description: "Seymour Chwast is a design legend. As co-founder with Milton Glaser of Push Pin Studios, he led a revolution in graphic design in the 1960s and '70s, producing bold, vibrant work that pushed the limits of nearly every visual medium.",
    risks: "With this highly experienced and detail-oriented team in place, we have the expertise and dedication to deliver a book that meets our own high expectations as well as those of our discerning backers.",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c42.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p39.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/39.jpg"), filename: "39.jpg")


p40 = Project.create!(
    project_name: "Ladislav Sutnar: Visual Design in Action - Facsimile Edition",
    subtitle: "Facsimile reprint of an iconic 1961 book by modernist graphic designer and pioneer of information design Ladislav Sutnar",
    description: "Out of print for decades, Visual Design in Action is one of the most beautiful books on modern graphic design. Written and designed by Ladislav Sutnar and published in 1961, it has been called a 'lost milestone' and a 'treasure.'",
    risks: "We're eager to make this book available once again to an audience that, like Ladislav Sutnar, believes in design as 'a convincing statement of visual or tactile delight and functional effectiveness.'",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c42.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p40.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/40.jpg"), filename: "40.jpg")


p41 = Project.create!(
    project_name: "Deaf-POV Animated Film | Liftoff",
    subtitle: "Animated short film about a Deaf dancer who faces her fears within her dreams.",
    description: "This story was born out of a desire to see accurate Deaf and Hard-of-Hearing (HoH) stories in animation.  We want to tell stories with Deaf/HoH main characters who have authentic, well-rounded experiences. ",
    risks: "To ensure we are creating a film that is respectful to the Deaf/HoH community, we are intentionally asking for and listening to feedback on a frequent basis along our creation process. This may lengthen the time it takes to complete this film.",
    location_id: l1.id,
    published: true,
    founder_id: u2.id,
    category_id: c7.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p41.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/41.jpg"), filename: "41.jpg")


p42 = Project.create!(
    project_name: "Legendary Forces",
    subtitle: "An action pack feature film that includes six college students inhabiting abilities and going on a adventure to save everyone.",
    description: " Legendary Forces is an action movie about six college students who wonder across these interesting stones with different abilities. ",
    risks: "Some risks that come along with this production is meeting deadlines, coming up short on the budget, and delays in release dates.",
    location_id: l2.id,
    published: true,
    founder_id: u2.id,
    category_id: c48.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p42.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/42.jpg"), filename: "42.jpg")


p43 = Project.create!(
    project_name: "Vorago (2° Try)",
    subtitle: "Adrenaline-pumping action medium-lenght film that revolves around a nuclear terrorist attack, a secret mission, and a new technology.",
    description: "We have not achieved our goal but have received more support than we expected, so we try to relaunch the campaign for a longer time, hoping to reach more people who like the project.",
    risks: "We will spend every extra donation to improve the quality of the project and its distribution.",
    location_id: l3.id,
    published: true,
    founder_id: u2.id,
    category_id: c48.id,
    goal: 9000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p43.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/43.jpg"), filename: "43.jpg")


p44 = Project.create!(
    project_name: "Z-Wolf: A Yamcha Story (Fan-Made Dragonball Movie)",
    subtitle: "Z-WOLF: A Yamcha Story is a live action fan-made, non-profit film (or maybe mini-series) to be released for free on YouTube!!!",
    description: "Like everyone else, I was looking forward to the Dragonball Evolution movie and it took only 10 seconds to see that it was going to be one of the harshest travesties of my movie going life.",
    risks: "All projects carry a level of risk. in this case, the risk would be that we couldn't collect the fully needed amount. but in this case, what will be done is instead of a full length feature film or a mini series, we will simply do a short film. ",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c48.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p44.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/44.jpg"), filename: "44.jpg")


p45 = Project.create!(
    project_name: "EWILAN'S QUEST - The Animated Series",
    subtitle: "Epic, dramatic and carried by an independent and determined heroine, Ewilan’s Quest is a family series. Welcome to Gwendalavir !",
    description: "Ewilan’s adventures have thrilled millions of readers. Today’s youngsters continue to discover this landmark among sagas. ",
    risks: "The community of fans is truly appreciable, but the difficulties in producing a series like Ewilan’s Quest remain unchanged: respecting the original work of the author and finding a broadcaster.",
    location_id: l2.id,
    published: true,
    founder_id: u2.id,
    category_id: c49.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p45.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/45.jpg"), filename: "45.jpg")

p46 = Project.create!(
    project_name: "The Ghost Moo",
    subtitle: "A short animated movie by Bryn G. Jones.",
    description: "Here are some scenes and character shots that I've created for this series. Some of them might not make the final cut, but they give a good idea of how my characters look, and the vibes from the fantasy world that my animation explores.",
    risks: "The biggest risk will be data loss. I'll backup the scenes on various hard drives and also my cloud storage. While my computer is rendering the scenes I would like to continue working",
    location_id: l1.id,
    published: true,
    founder_id: u1.id,
    category_id: c49.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p46.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/46.jpg"), filename: "46.jpg")
p47 = Project.create!(
    project_name: "Chupahuahua - Animated Short",
    subtitle: "Hello! My name is Nory De Hostos Lopez, and I am currently a Ringling College of Art + Design senior in Computer Animation.",
    description: "My name is Nory De Hostos Lopez, a Puerto Rican Computer Animation Senior at Ringling College of Art + Design!",
    risks: "Once the project is funded, we will make sure that Chupahuahua gets finished at the highest quality possible! Regardless of whether the project is successfully funded, this film will be completed in late Spring 2020.",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c49.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p47.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/47.png"), filename: "47.png")

p48 = Project.create!(
    project_name: "Onyx The Fortuitous and The Talisman of Souls",
    subtitle: "THE WEIRD SATANIST GUY is making a FEATURE FILM!",
    description: "Onyx is the brainchild of writer and performer Andrew Bowser. Through an ongoing series of viral videos spanning nearly 9 years, Onyx has permeated every corner of pop culture.",
    risks: "All physical rewards will be manufactured to order. While we don't foresee delays there is always the risk that there could be unexpected delays in manufacturing and shipping.",
    location_id: l2.id,
    published: true,
    founder_id: u2.id,
    category_id: c50.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p48.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/48.png"), filename: "48.png")
p49 = Project.create!(
    project_name: "The Cole Show Season 2",
    subtitle: "A sketch comedy show shot on an iPhone and edited by the use of a free trial, by two brothers First-gen Gambians, from Anchorage, AK.",
    description: "The Cole Show Season 2: Through hard times such as this pandemic the things that got us through it were laughs from ' The Chapelle Show' and 'Key & Peeple' they say laughter is the best medicine. ",
    risks: "Making a film in ordinary times is already an inherently risky endeavor even when a film is well funded and support.",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c50.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p49.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/49.jpg"), filename: "49.jpg")
p50 = Project.create!(
    project_name: "Mr. Gloom",
    subtitle: "A low-budget senior thesis production of 'Mr. Gloom', a comedy short written by Mike Shelton.",
    description: "I am aiming to create the best audio-visual story I can with the culmination of four years of hard work and study, as well as all available physical resources I have at my disposal.",
    risks: "As I do not see potential risks, the challenges we face will mainly be expense-related, aside from typical production obstacles that are likely to happen with any given shoot.",
    location_id: l4.id,
    published: true,
    founder_id: u2.id,
    category_id: c50.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p50.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/50.png"), filename: "50.png")

p51 = Project.create!(
    project_name: "Topogato — Tasteful treats for curious souls",
    subtitle: "Chocolates handmade in San Francisco that comfort, delight, and inspire.",
    description: "Our story begins with a chance encounter on a San Francisco apartment building stoop in the spring of 2008. Simon was in culinary school, and Beau graphic design school.",
    risks: "We will be fulfilling orders in the order they are received. Since launching late last year in San Francisco, we’ve become used to making large orders of our treats fresh by hand.",
    location_id: l3.id,
    published: true,
    founder_id: u2.id,
    category_id: c8.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p51.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/51.png"), filename: "51.png")

p52 = Project.create!(
    project_name: "Y'alls Balls | You make the jokes, we make the food.",
    subtitle: "The world's first sausage cheese ball company! We serve the nostalgia of the sausage ball with updated recipes and local ingredients.",
    description: "Y'alls Balls is the world's first sausage cheese ball company proudly based in Nashville, TN. After months of doing pop-ups and local events, we're ready to take the next steps to grow our business. ",
    risks: "In the case of those things you can't plan for, I know and trust my Nashville community and can guarantee I'd have the support to figure out a solution to any issue.",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c52.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p52.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/52.jpg"), filename: "52.jpg")
p53 = Project.create!(
    project_name: "Expanding Electric City Butcher",
    subtitle: "Electric City Butcher is a responsibly sourced, whole animal butcher shop providing custom cut-to-order meats & charcuterie to So. Cal.",
    description: "The only whole animal butcher shop in Orange County, Electric City Butcher has been providing the best responsibly-sourced whole animal meats from small, family-owned farms in California for the last two years. ",
    risks: "One of our biggest challenges is educating our guests about the realities of whole animal butchery. ",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c52.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p53.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/53.jpg"), filename: "53.jpg")

p54 = Project.create!(
    project_name: "ME DICEN TEDDY: COOKING CHANNEL",
    subtitle: "WE ALL HAVE A QUALITY TO SHARE. Create a fun and entertaining cooking channel to encourage culinary learning",
    description: "The world needs us, it needs our talents, our magic, our spark, everything that makes us different, the world needs us to share everything that fills our hearts, because that is the reason for being here, teaching, helping.",
    risks: "Perhaps one of the biggest challenges will be the propagation of the channel in the current field where there is a lot of content, but I am optimistic, and I know that with work and perseverance, and especially with your support.",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c54.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p54.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/54.png"), filename: "54.png")
p55 = Project.create!(
    project_name: "Provenance 譜珍譜法: Principles of plant-based cookery",
    subtitle: "A cookbook filled with memoirs and recipes from the grassroots kitchen, customised for foodservice professionals and home cooks alike.",
    description: "Provenance 譜珍譜法 is more than just a cookbook. It's a culmination of everything we at Grassroots have done, packaged as a memoir and a guide to help you proactively participate in climate action. ",
    risks: "We are fortunate to have a small but mighty and talented team to bring this cookbook to fruition.",
    location_id: l2.id,
    published: true,
    founder_id: u1.id,
    category_id: c54.id,
    goal: 9000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p55.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/55.jpg"), filename: "55.jpg")
p56 = Project.create!(
    project_name: "The Kurochka Cookbook",
    subtitle: "The Kurochka Cookbook explores Russian & Ukrainian cuisine through the culinary history, classic foodie literature, quirky illustrations and of course, recipes.",
    description: "Kurochka Clothing started right here on Kickstarter, humbly, but with big dreams. We wanted to create a company where we could showcase Russian and Ukrainian culture in a quirky way. ",
    risks: "The risks in this project lay in the unknown. We're covering a lot uncharted territory, but the biggest question mark is in the physical publishing of the book. ",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c54.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p56.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/56.jpg"), filename: "56.jpg")

p57 = Project.create!(
    project_name: "Final Fantasy 7 Tea Series",
    subtitle: "A series of hand blended loose leaf teas based on FF7 characters.",
    description: "A refreshing and revitalising tea that can be served hot or iced. Soothing green tea with a citrus kick that will get you up and going. ",
    risks: "The art has already been completed and the teas planned out. The majority of the ingredients have been bought so I just need to buy the labels and bags.",
    location_id: l3.id,
    published: true,
    founder_id: u1.id,
    category_id: c55.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p57.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/57.jpeg"), filename: "57.jpeg")
p58 = Project.create!(
    project_name: "True Story",
    subtitle: "Deliciously unique. Uniquely delicious. We're bringing bartender-quality cocktails right to your home. You're welcome. ",
    description: "This is a True Story...of five friends...living in Austin...determined to start a company...to bring the world high-quality cocktails in a can.",
    risks: "Financing First and Second Batches: Getting our first two batches of cans out will require support from investors, but we plan to be self-sufficient by the third batch.",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c55.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p58.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/58.png"), filename: "58.png")
p59 = Project.create!(
    project_name: "Kingston Bay Rum #GoBeyondTheRum",
    subtitle: "Kingston Bay Rum is a gluten free, light bodied white rum that's sweet to the taste, with no added sugar or flavoring.",
    description: "Our story is pretty simple. Kingston Bay was founded in 2020 by sisters Donnica and T'ka in Snellville, GA. We decided to step outside of our traditional career paths. ",
    risks: "The hard work and challenges ahead will come as we are continue working on growing our brand, in addition to finding the appropriate sourcing and distribution.",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c55.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p59.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/59.png"), filename: "59.png")

p60 = Project.create!(
    project_name: "The Darkest House",
    subtitle: "A descent into horror for 5e or any RPG that will make your campaign and characters better—optimized for an awesome online experience.",
    description: "That house on the outskirts of town, sitting empty behind a crumbling wall. The one people whisper about. ",
    risks: "This is the nineteenth Kickstarter campaign for Monte Cook Games. All of our previous campaigns have been successful and jam-packed with rewards.",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c9.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p60.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/60.jpg"), filename: "60.jpg")


p61 = Project.create!(
    project_name: "32GB Nvidia Steam Gaming Machine and Arcade DIY kits",
    subtitle: "Powerful PC - Latest Games & cool DIY kits to make your own arcade machine.",
    description: "This is our big Video presentation with the ' Back this project now ' speech in English at the end. Thanks for watching !",
    risks: "We have already produced several arcade machines which are currently used by us and our first clients.",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c56.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p61.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/61.jpg"), filename: "61.jpg")

p62 = Project.create!(
    project_name: "Tartaro 2 Printable Terrain",
    subtitle: "3d STL files for warhammer village",
    description: "The Tartaro 2 is a terrain design to wargammes. They are stl files perfect to FDM 3D printer.The perfect scale is 28/32 mm. ",
    risks: "The STL files haven´t need support. The best material to print is PLA",
    location_id: l3.id,
    published: true,
    founder_id: u2.id,
    category_id: c56.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p62.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/62.jpg"), filename: "62.jpg")

p63 = Project.create!(
    project_name: "Make A Scene Larp Anthologies",
    subtitle: "Two books of original larps written for Minnesota's live-action scenario festival",
    description: "Make a Scene is Minnesota’s scenario festival, an annual event featuring all-new original live-action roleplaying games (larps). ",
    risks: "While this is our first Kickstarter, the Make a Scene team has experience bringing complex projects to fruition as a result of running the in-person festival in 2019. ",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c57.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p63.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/63.png"), filename: "63.png")

p64 = Project.create!(
    project_name: "Zombie Escape Room",
    subtitle: "An escape room with a difference. We currently specialise in Zombie Survival Experiences we're now bringing this to an Escape Room.",
    description: "We currently run and specialise in Zombie Survival Experiences in the UK. We are now adding to our events by introducing our take on Escape Rooms.",
    risks: "Equipment is custom built and will need testing. If for any reason equipment fails this could delay us slightly but have allowed one month extra for problems.",
    location_id: l3.id,
    published: true,
    founder_id: u2.id,
    category_id: c57.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p64.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/64.png"), filename: "64.png")

p65 = Project.create!(
    project_name: "EarthFall: Invasion LARP",
    subtitle: "EarthFall: Invasion is a sci-fi LARP based in NJ that promises to present an experience unlike anything that has been seen before.",
    description: "Earthfall presents players with an opportunity to live out an adventure in real time.",
    risks: "With most of the background rules still being ironed out, EarthFall can be considered to be in its late Alpha stages. ",
    location_id: l3.id,
    published: true,
    founder_id: u2.id,
    category_id: c57.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p65.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/65.jpg"), filename: "65.jpg")

p66 = Project.create!(
    project_name: "Warring States:The Heroes",
    subtitle: "This is a meaningful battle game characterized by the use of strategies!",
    description: "This is an intellective battle game. It may look simple, but you will find it meaningful when you play it.",
    risks: "We have invested 6 years into this project. The core of an eSports game is game balance, and we've spent 3 years working merely on this. We have also done most of other core modules of the game.",
    location_id: l3.id,
    published: true,
    founder_id: u2.id,
    category_id: c58.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p66.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/66.jpg"), filename: "66.jpg")
p67 = Project.create!(
    project_name: "Dash Brawl",
    subtitle: "Start your journey on becoming a ninja!",
    description: "Dash Brawl presents the story of a little boy going on an amazing adventure hoping to achieve his dream. ",
    risks: "The only risk is not achieving the goal and not being able to raise the money to start my game studio.",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c58.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p67.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/67.png"), filename: "67.png")
p68 = Project.create!(
    project_name: "Chess on the toroid",
    subtitle: "THIS IS THE EVOLUTION OF CHESS, THE METHOD AND THE APPLICATION THAT ALLOWS TO PERFORM AMAZING DIMENSIONAL ATTACKS ON A GEOMETRIC TOROID",
    description: "A Designer together with a chess enthusiast. Together we want to revolutionize the way you play chess!",
    risks: "DELIVERY TIME 3 MONTHS FROM THE SUCCESS OF THE SPONSORSHIP AND DELIVERY OF THE RAISED.",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c58.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p68.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/68.jpeg"), filename: "68.jpeg")

p69 = Project.create!(
    project_name: "Harp Attack 4 – Harp Twins Album!",
    subtitle: "Harp Attack 4 is a duet harp album of Rock and Metal covers - arranged and performed by Camille and Kennerly (Harp Twins)",
    description: "We’re so excited to announce that we’re creating our fourth harp Rock, Classic Rock, and Metal cover album, Harp Attack 4! ",
    risks: "We don’t foresee any risks to this campaign as we are already well into the process of creating this album. The only possible challenges that we could foresee are printer / shipping delays.",
    location_id: l4.id,
    published: true,
    founder_id: u2.id,
    category_id: c11.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p69.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/69.jpeg"), filename: "69.jpeg")

p70 = Project.create!(
    project_name: "God Don't Never Change",
    subtitle: "A stunning collection of artists and performances celebrate the timeless music of legendary gospel bluesman Blind Willie Johnson.",
    description: "The creator of the award-winning album and independently produced Gotta Serve Somebody: The Gospel Songs of Bob Dylan hopes to return in 2014 with God Don’t Never Change:The Songs of Blind Willie Johnson.",
    risks: "The greatest risk is the project will only be made if it's funded by YOU. We don't foresee any issues, but multi-artist compilations invite scheduling problems or perhaps waiting for the best artist to cover a particular song.",
    location_id: l3.id,
    published: true,
    founder_id: u2.id,
    category_id: c83.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p70.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/70.jpg"), filename: "70.jpg")
p71 = Project.create!(
    project_name: "Joyann Parker's New Album: Out Of The Dark",
    subtitle: "Help Joyann make the incredible follow-up to her acclaimed debut album!",
    description: "Welcome, friend! I'm so glad you are here to support me as I record my new album Out Of The Dark, which will be produced by Kevin Bowe. ",
    risks: "The biggest challenge in this case is the financial one. Making a great record requires a lot of cost for studio time, producing products, paying musicians, paying publicists for print and radio, paying for marketing materials and more. With your help, we can overcome this financial challenge!",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c83.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p71.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/71.jpg"), filename: "71.jpg")

p72 = Project.create!(
    project_name: "The Lost Birds - an Extinction Elegy by Christopher Tin",
    subtitle: "Join the two-time Grammy-winner as he composes and records a new requiem for the species we've driven to extinction (featuring VOCES8)   ",
    description: "The Lost Birds is a musical memorial to bird species driven to extinction by humankind. Sweeping and elegiac, it's a haunting tribute to those soaring flocks that once filled our skies, but whose songs have since been silenced.",
    risks: "I have a good track record with Kickstarter: my last album was the highest grossing classical music Kickstarter ever, and I gave a very thorough behind-the-scenes experience of the creation of the album, from pre-production, to composing, to release, to marketing.",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c65.id,
    goal: 9000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p72.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/72.png"), filename: "72.png")
p73 = Project.create!(
    project_name: "Hear Now 2021 Music Festival",
    subtitle: "Tune in to the 2021 Hear Now Festival: THE VIRTUE OF THE VIRTUAL!",
    description: "Without leaving your home you will be able to hear breathtaking performances of very personal, idiosyncratic, impossible to categorize forms of concert music. ",
    risks: "This year Hear Now is facing the challenge that so many organizations are facing: the impossibility of presenting live concerts safely. ",
    location_id: l3.id,
    published: true,
    founder_id: u2.id,
    category_id: c65.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p73.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/73.jpg"), filename: "73.jpg")
p74 = Project.create!(
    project_name: "Set Chopin Free",
    subtitle: "Help us free the life's work of Frédéric Chopin.",
    description: "Thanks to everyone who has contributed so far. Our last Kickstarter got 40% of its donations from word of mouth, so please take a minute to vote up our stories or submit your own:",
    risks: "Given our previous experience doing this, we're confident that this project will go smoothly, much more so than the previous. We will vet each individual musician and will hire 2 musicians for every single recording.",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c65.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p74.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/74.png"), filename: "74.png")

p75 = Project.create!(
    project_name: "Destroy All Presets: re-mixable chiptune album!",
    subtitle: "Destroy All Presets is an electro-pop album created entirely on a Game Boy Advance. The tunes are nerdy, upbeat, and catchy as hell.",
    description: "Limitation drives creativity... and let's face it, these old gaming consoles make awesome sounds. That's why I've made my newest album, Destroy All Presets on my Game Boy Advance.",
    risks: "The album is finished and digital distribution should be a breeze. My biggest concern is with manufacturing of the carts and shipping them. ",
    location_id: l3.id,
    published: true,
    founder_id: u1.id,
    category_id: c64.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p75.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/75.png"), filename: "75.png")
p76 = Project.create!(
    project_name: "Big Giant Circles - The Glory Days",
    subtitle: "Experience a full album of chiptune-style music bridging retro sounds & modern production from game composer Jimmy Hinson!",
    description: "The Glory Days, as the name suggests is a 2-way perspective of game music and life.",
    risks: "For one final reiteration, the album is in a release-ready state now (at least digitally). So you don't have to worry about me taking years to finish an album that might not even happen at all. ",
    location_id: l3.id,
    published: true,
    founder_id: u2.id,
    category_id: c64.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p76.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/76.png"), filename: "76.png")
p77 = Project.create!(
    project_name: "Anamanaguchi",
    subtitle: "We just finished a 22-track record over 3 years without help from a label. Help us make Endless Fantasy more than just an album!",
    description: "ATTN: NEW BACKERS!! A DIGITAL DOWNLOAD IS AVAILABLE IN BACKER UPDATE #5 :)",
    risks: "We will of course be subject to our collaborators schedules, hopefully we'll be able to hold enough sway to make things meet reasonable deadlines!",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c64.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p77.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/77.png"), filename: "77.png")

p78 = Project.create!(
    project_name: "Oh My Gods! A History of Belief",
    subtitle: "A stunning children's book on the history of our beliefs and gods, and what they say about us.",
    description: "Oh My Gods! A History of Belief is a stunning picture book for ages 4-10 that will explore our history of belief.",
    risks: "We've been through this rodeo many times before: this is our seventh Kickstarter campaign, and we have ALWAYS gotten our readers their book rewards. ",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c13.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p78.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/78.png"), filename: "78.png")

p79 = Project.create!(
    project_name: "China",
    subtitle: "This book is an introduction to the historical reasons and successful measures of China's Reform and rapid economic development.",
    description: "The campaign is going to raise $9,000 in 60 days. The manuscript has been completed on February 19, 2021, and an initial fee of $480 has been paid to the Publishing house for the signature of the publication agreement.",
    risks: "The risk is very limited. The pandemic may affect the price of the book, but it may bring more readers because people at home have more time to read. People from all walks of life, who are concerned about the epidemic will be interested in this book.",
    location_id: l2.id,
    published: true,
    founder_id: u2.id,
    category_id: c70.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p79.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/79.jpg"), filename: "79.jpg")
p80 = Project.create!(
    project_name: "Leggo, Penso... Scrivo!",
    subtitle: "Un libro per insegnare a leggere e scrivere ai bambini di 5/6 anni. È un metodo semplice, sistematico, creativo ed interdisciplinare.",
    description: "Ciao a tutti coloro che si soffermeranno a leggere queste righe e a guardare la foto della copertina del libro.",
    risks: "La sfida…è certamente la più grande ed ambiziosa per questo mio Progetto: quella di riuscire a pubblicare e vendere il mio libro, scavalcando il “sistema casa editrice”.",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c70.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p80.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/80.jpeg"), filename: "80.jpeg")
p81 = Project.create!(
    project_name: "Die 'digitale Identität' der Kinder muss beschützt werden!",
    subtitle: "Eine Initiative für ein Bewusstsein in der Gesellschaft bei dem es darum geht die 'Digitale Identität' unsere Kinder zu beschützen!",
    description: "In Pandemie Zeiten merken wie es mehr als deutlich - Deutschland ist eine digitale Wüste geworden! ",
    risks: "Die größte Herausforderung für dieses Projekt sehe ich im bewussten Interesse für die digitale Bildung in unserem Land - sofern sich zu wenig Menschen für den Bildung digitaler Kompetenzen. ",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c70.id,
    goal: 5000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p81.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/81.png"), filename: "81.png")

p82 = Project.create!(
    project_name: "Transmissions 7 - A robot art book",
    subtitle: "A full colour, 40 page softcover collection of robot artwork.",
    description: "Hello. My name is Matt. I like to make pictures of robots and with your  help, I'd like to collect some of my recent work into a new book.",
    risks: "I have successfully completed ten Kickstarter projects and believe I am familiar with the risks and challenges involved. ",
    location_id: l3.id,
    published: true,
    founder_id: u2.id,
    category_id: c72.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p82.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/82.jpg"), filename: "82.jpg")

p83 = Project.create!(
    project_name: "The Breakup Coloring Book",
    subtitle: "A World-Class Guide to Heartbreak",
    description: "A bad breakup led to the chance discovery that different cultures turn to really different metaphors for breakup wisdom.",
    risks: "With that said, we are confident that we can successfully deliver The Breakup Coloring Book to all of our backers.",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c72.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p83.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/83.jpg"), filename: "83.jpg")

p84 = Project.create!(
    project_name: "The Gratitude Planner | Journal",
    subtitle: "The Gratitude Planner/Journal is a great resource to help you become more productive in your purpose and get more enjoyment from life.",
    description: "Our mission is ambitious, but it is to change the world, one day at a time, from the inside out. ",
    risks: "There are some limited risks associated with sourcing the most economical and efficient print provider. ",
    location_id: l3.id,
    published: true,
    founder_id: u1.id,
    category_id: c73.id,
    goal: 5000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p84.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/84.png"), filename: "84.png")

p85 = Project.create!(
    project_name: "Marshmallow Microcosm 2015 Calendar",
    subtitle: "The fourth edition of my Marshmallow Microcosm series in calendar form. Everyone loves a monthly marshmallow.",
    description: "Last year I tried Kickstarter to fund my 3rd Marshmallow Microcosm calendar, and it was a tremendous success with 50 backers funding the project 203% and I thank all of my supporters!",
    risks: "This will be my fourth calendar, and finding a printer I like, that doesn't cost so much that I need to charge a small fortune for a calendar is a hurdle every year. ",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c73.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p85.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/85.jpg"), filename: "85.jpg")

p86 = Project.create!(
    project_name: "2014 Hoodcats Calendar",
    subtitle: "A calendar featuring Oakland's finest felines, from Adam Myatt, a.k.a. 'The Cat Man of West Oakland' >^. .^<",
    description: "Oh, how the time flies! 2013 is already on its last legs, and it's time to get started on next year's 2014 Hoodcats calendar! ",
    risks: "Last year's campaign was a bit of a last-minute experiment. I wasn't exactly sure if folks would be all that interested in having these photos in print, but boy was I wrong! ",
    location_id: l3.id,
    published: true,
    founder_id: u3.id,
    category_id: c73.id,
    goal: 7000,
    launch_date: "2023-08-22T16:18:33.000Z",
    end_date: "2023-10-26T15:03:33.000Z"    
)
p86.title_image.attach(io: URI.open("https://seedstorage.s3.us-east-2.amazonaws.com/Tickstarter/86.jpg"), filename: "86.jpg")
