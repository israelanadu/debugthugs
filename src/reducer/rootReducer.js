import col from "../asset/image/images/co1.png"
import co from "../asset/image/images/co2.png"
import image2 from "../asset/image/images/images 2.jpg"
import image from "../asset/image/images/images .jpg"
import co6 from "../asset/image/images/co6.jpg"

import Images2 from "../asset/image/landingimg2.jpg"
import Images3 from "../asset/image/lannding3.jpg"
import Images4 from "../asset/image/landingimage.jpg"
import Images5 from "../asset/image/landingimg4.jpg"

import culture from "../asset/image/images/culture6.jpg"
import culture1 from "../asset/image/images/culture4.jpg"
import culture2 from "../asset/image/images/culture3.jpg"
import culture3 from "../asset/image/images/culture1.jpg"

import Dept from "../asset/image/images/class.jpg"
import Dept1 from "../asset/image/images/Code_org.jpg"
import Deptimg from "../asset/image/images/KOACI.jpg"
import Deptimg1 from "../asset/image/images/student.jpg"
import Deptimg2 from "../asset/image/images/happy.jpg"

import sport from "../asset/image/images/sports4.jpg"
import sport1 from "../asset/image/images/sports2.jpg"
import sport2 from "../asset/image/images/sports7.jpg"
import sport3 from "../asset/image/images/sports4.jpg"
import sport4 from "../asset/image/images/co5.jpg"


const initState = {
    event: [
        {
            id: 1,
            title: "Let There Be Teachers Conference 2025",
            description: "This historic gathering—aiming to unite over 60,000 educators—is designed to both celebrate teachers' critical contributions and elevate the teaching profession. It seeks to empower educators through networking, professional development, and advocacy.",
            date: "24-01-2025",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5853563471023!2d3.396914173343592!3d6.4472476935441305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b22826bd1db%3A0x45dc01f044534b98!2sTBS%20Banquet%20Hall!5e0!3m2!1sen!2sng!4v1757677441003!5m2!1sen!2sng",
            thumbnails: col,
            feedback: [
                {

                    ratings: 4,
                    comment: "I love that this conference isn't just about training, but also about honoring teachers' voices.",
                    name: "Chinedu Okafor"
                },
                {
                    rating: 4,
                    comment: "Setting a Guinness World Record shows the world how important teachers are.",
                    name: "Oluwaseun Adeyemi"

                },
                {
                    rating: 3,
                    comment: "Teaching is the backbone of society, and it's amazing to see teachers being celebrated at this scale",
                    name: "Ibrahim Musa"

                },
            ],

            category: "Academy",
            status: "upcoming"

        },



        {
            id: 2,
            title: "Emerging School Models",
            description: "The conference aims to explore innovative school models—such as micro-schools, charter schools, career and technical education (CTE), learner-centered models, and alternative forms of homeschooling—that are gaining momentum across the education landscape. These new models are expanding rapidly, especially in environments driven by school choice and educational reform.",
            date: "26-09-2025",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3982662520766!2d3.3110861733438597!3d6.471130493520582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b893a05857215%3A0xf72008c8bcde8f3c!2sPanama%20Events%20Centre!5e0!3m2!1sen!2sng!4v1757681213662!5m2!1sen!2sng",
            thumbnails: co,
            feedback: [
                {
                    ratings: 4,
                    comment: "I think it's exciting that the conference is exploring new models like microschools and hybrid homeschooling—education really needs fresh ideas.",
                    name: "Emeka Nwosu"
                },
                {
                    rating: 4,
                    comment: "What I like most is that it's not just theory. They're talking about how to actually scale these models so more students can benefit.",
                    name: "Tunde Balogun"

                },
                {
                    rating: 4,
                    comment: "The focus on AI and innovation in education is so timely. Schools need to adapt to prepare students for the future.",
                    name: "Isabella Adebayo"

                },
            ],
            category: "Academy",
            status: "upcoming"


        },



        {
            id: 3,
            title: "African School Games",
            description: "The African School Games are a continental multi-sport event designed specifically for African schoolchildren (typically between ages 13 and 18). It's a brand-new initiative aimed at promoting youth development, sport, education, and cross-continental camaraderie.",
            date: "25-06-2025",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15857.442237750034!2d3.2925973554199253!3d6.475933299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b89d9462faa61%3A0x18cda41f84c4abe1!2sMountRoyal%20Centre%20Hotel%20and%20Suites!5e0!3m2!1sen!2sng!4v1757683435851!5m2!1sen!2sng",
            thumbnails: image2,
            feedback: [
                {
                    ratings: 4,
                    comment: "It's inspiring to see young athletes from across Africa coming together—not just to compete, but to celebrate unity and culture through sport.",
                    name: "Lucas Obi",
                },
                {
                    rating: 4.,
                    comment: "The African School Games are such a great opportunity for students to showcase their talents and maybe even discover future stars.",
                    name: "Ethan Mohammed"

                },
                {
                    rating: 4.,
                    comment: "I love how this event builds friendships across countries. Sport is a powerful way to connect people.",
                    name: "Grace Ogundele"

                },
            ],
            gallery: [
                { id: 1, img: Images2 },
                { id: 2, img: Images3 },
                { id: 3, img: Images4 },
                { id: 4, img: Images5 },
            ],
            category: "Academy",
            status: "past"

        },


        {
            id: 4,
            title: "Back to School Night",
            description: "This annual event gives families the opportunity to meet teachers, learn about educational plans, and explore their child's learning environment. It's designed to foster collaboration between families and the school community as the new school year begins.",
            date: "16-09-2025",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15857.553145483655!2d3.299867255419921!3d6.472401999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8954c4806b33%3A0x145f5983f2854c6!2sVilla%20Park%20Hotel%20and%20Suites%20-%20Festac!5e0!3m2!1sen!2sng!4v1757683907875!5m2!1sen!2sng",
            thumbnails: image,
            feedback: [
                {
                    ratings: 4,
                    comment: "I love that parents get to meet the teachers early on. It makes communication so much easier throughout the year.",
                    name: "Victor Eze",
                },
                {
                    rating: 4,
                    comment: "Events like this show kids that their school and parents are working together to support their learning.",
                    name: "Aisha Abdullahi"

                },
                {
                    rating: 4.,
                    comment: "It's not just about meeting teachers—it's about building relationships that help children succeed.",
                    name: "Ifeoma Nwachukwu"

                },
            ],
            category: "Academy",
            status: "upcoming"


        },


        {
            id: 5,
            title: "Talent Show",
            description: "A Talent Show is a school or community event where students get the chance to showcase their unique skills and creativity in front of an audience of classmates, teachers, parents, and friends.",
            date: "19-09-2025",
            location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15853.448962993987!2d3.333438355419922!3d6.601826200000012!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b923100000001%3A0x6b605ba67e692745!2sMartinos%20Hotel%20and%20Events%20Centre!5e0!3m2!1sen!2sng!4v1757687416218!5m2!1sen!2sng",
            thumbnails: co6,
            feedback: [
                {
                    ratings: 4,
                    comment: "I'm always amazed at how much hidden talent comes out during the school's talent show—so many creative students!",
                    name: "Yetunde Alabi",
                },
                {
                    rating: 4,
                    comment: "The best part is seeing classmates you never expected to perform get up there with so much confidence.",
                    name: "Chioma Okeke"

                },
                {
                    rating: 4,
                    comment: "It's not just about winning, it's about celebrating everyone's unique gifts",
                    name: "Halima Bello"

                },
            ],
            category: "Academy",
            status: "upcoming"
        },


        {
            id: 6,
            title: "Cultural Showcase",
            description: "The cultural showcase is a celebration of the diversity and global community that makes up a university campus. Students from different countries and backgrounds come together to present traditional music, dances, poetry, and fashion. Food is often the centerpiece—each cultural club prepares authentic dishes so attendees can sample flavors from around the world. The event usually takes place in a large hall or outdoor stage, decorated with flags and symbols of different cultures. Some showcases also feature craft tables where students can try henna, calligraphy, origami, or beadwork. By the end of the night, the audience has traveled the world without leaving campus, and international students feel recognized and valued for their heritage.",
            date: "01-10-2025",
            time: "10:00AM - 4:00PM",
            Venue: "Sports Complex",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3982662520766!2d3.3110861733438597!3d6.471130493520582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b893a05857215%3A0xf72008c8bcde8f3c!2sPanama%20Events%20Centre!5e0!3m2!1sen!2sng!4v1757681213662!5m2!1sen!2sng",
            feedback: [
                {
                    rating: 4,
                    comment: "The beauty! The rich history! The class! The elegance! This is what I'm here for",
                    name: "Great Prosper"
                },
                {
                    rating: 5,
                    comment: "We are Africans with our own history and background. Feels good to be reminded of that. A top class event in my books",
                    name: "Olaoluwa Patrick"
                },
                {
                    rating: 5,
                    comment: "Learnt more about my culture in this event than i have in my entire life!",
                    name: "Calson Idris"
                }
            ],
            thumbnails: culture,
           
            category: "Cultural",
            status:"upcoming",
    
        },
    
        {
            id: 7,
            title: "Karaoke Night",
            description: "Karaoke night transforms a campus lounge or auditorium into a mini concert hall where students sing their hearts out. A big screen displays lyrics while participants choose from a catalog of songs—from 80s ballads to current chart-toppers. Some students belt out performances with passion, while others deliver funny, off-key renditions that get the crowd laughing. To encourage participation, organizers often have themed rounds like “Disney songs only,” “throwback 90s,” or “duet battles.” The casual, judgment-free environment makes it easy for students to step outside their comfort zone, and it usually turns into a night of cheering, laughter, and unexpected talent discoveries.",
            date: "12-12-2025",
            time: "5:00PM - 10:00PM",
            Venue: "Arts Theatre",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15857.442237750034!2d3.2925973554199253!3d6.475933299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b89d9462faa61%3A0x18cda41f84c4abe1!2sMountRoyal%20Centre%20Hotel%20and%20Suites!5e0!3m2!1sen!2sng!4v1757683435851!5m2!1sen!2sng",
           feedback: [
                {
                    rating: 4,
                    comment: "Nothing more beautiful than singing along to your favorite song!",
                    name: "Okon Melody"
                },
                {
                    rating: 5,
                    comment: "The most fun event ever. Looking forward to the next one already",
                    name: "Olarenwaju Isioma"
                },
                {
                    rating: 5,
                    comment: "No better closing to a semester than a proper karaoke night",
                    name: "Innocent Ajibola"
                }
            ],
            thumbnails: Dept,
            
            category: "Departmental",
            status:"upcoming",
    
        },
        
        {
            id: 8,
            title: "Career Fairs",
            description: "Career fairs are large-scale networking events where employers, recruiters, and graduate programs set up booths to connect with students. Held in gymnasiums, ballrooms, or student centers, the fair is a sea of business suits, resumes, and company banners. Students move from table to table, asking questions, handing out résumés, and hoping to make a memorable impression. Workshops often precede the event, teaching résumé writing, elevator pitches, and professional etiquette. While they can feel overwhelming and exhausting, career fairs are critical stepping stones toward internships and post-graduation opportunities.",
            date: "05-04-2025",
            time: "10:00AM - 5:00PM",
            Venue: "Main Hall 2",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15857.553145483655!2d3.299867255419921!3d6.472401999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8954c4806b33%3A0x145f5983f2854c6!2sVilla%20Park%20Hotel%20and%20Suites%20-%20Festac!5e0!3m2!1sen!2sng!4v1757683907875!5m2!1sen!2sng",
               feedback: [
                {
                    rating: 5,
                    comment: "I got a really good internship from attending one of these. Highly recommend",
                    name: "Desmond Ade"
                },
                {
                    rating: 5,
                    comment: "A great way of securing future job opportunities if you ask me",
                    name: "Miracle Peters"
                },
                {
                    rating: 4,
                    comment: "Came really late for the last one. Anticipating the next!",
                    name: "Alex Doro"
                }
            ],
            thumbnails: Dept1,
                
            gallery: [
                {id : 1, img: Deptimg},
                {id : 2, img: Deptimg1},
                {id : 3, img: Deptimg2},
                {id : 4, img: Dept},
                {id : 5, img: Dept1},
            ],
            category: "Departmental",
            status:"past",
    
        },
       
    
        {
            id: 9,
            title: "Afrobeat Dance Festival",
            description: "This event transforms campus into a celebration of rhythm and movement. Students gather for workshops and performances centered around Afrobeats, Amapiano, Highlife, and traditional African dances. Professional instructors or talented students lead sessions teaching signature moves, while live DJs spin mixes from Burna Boy, Wizkid, Davido, Sho Madjozi, and more. Dance battles create friendly competition, with prizes for the most energetic or creative routines. The festival often ends in a massive group dance, where everyone joins in—even those with “two left feet.” It’s a joyful way to bond through music that speaks directly to African youth culture.",
            date: "10-10-2025",
            time: "1:00PM - 9:00PM",
            Venue: "Arts Theatre",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15857.442237750034!2d3.2925973554199253!3d6.475933299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b89d9462faa61%3A0x18cda41f84c4abe1!2sMountRoyal%20Centre%20Hotel%20and%20Suites!5e0!3m2!1sen!2sng!4v1757683435851!5m2!1sen!2sng",
            feedback: [
                {
                    rating: 5,
                    comment: "Dance! Dance! Dance! This is what I'm here for",
                    name: "Francis Isheri"
                },
                {
                    rating: 5,
                    comment: "You get to see insane levels of talent displayed. Never a dull moment here!",
                    name: "Blessing Asuwe"
                },
                {
                    rating: 5,
                    comment: "My favorite school event of all time!",
                    name: "Kingsley Idiroko"
                }
            ],
            thumbnails: culture1,
                
            category: "Cultural",
            status:"upcoming",
    
        },
        {
            id: 10,
            title: "Campus Trade Fair",
            description: "The campus trade fair is a large-scale exhibition where students, local vendors, and young entrepreneurs come together to showcase and sell their products, services, and innovations. Think of it as a mini version of a commercial expo, right in the heart of the university. Rows of colorful stalls are set up along the quad, student center, or sports grounds, each brimming with activity—students promoting handmade crafts, African prints and jewelry, natural hair and skincare products, digital art, books, and even tech startups showing off apps or inventions. Local businesses often participate too, bringing food stalls with jollof rice, shawarma, puff-puff, roasted plantain, grilled suya, or fresh smoothies, turning the event into both a marketplace and a food festival.Beyond buying and selling, the trade fair is also about discovery. Attendees can sample products, enter raffles, watch live demos, and interact with young entrepreneurs eager to share their ideas. Some fairs feature fashion shows where designers display their collections, while others host quick workshops on entrepreneurship, digital marketing, or financial literacy.",
            date: "05-12-2025",
            time: "10:00AM - 3:00PM",
            Venue: "Sports Complex",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3982662520766!2d3.3110861733438597!3d6.471130493520582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b893a05857215%3A0xf72008c8bcde8f3c!2sPanama%20Events%20Centre!5e0!3m2!1sen!2sng!4v1757681213662!5m2!1sen!2sng",
            feedback: [
                {
                    rating: 5,
                    comment: "Trade is literally where i get all my clothes!",
                    name: "Delight Habby"
                },
                {
                    rating: 5,
                    comment: "Would never pass up an opppotunity to get things at giveaway prices.",
                    name: "Laju Amos"
                },
                {
                    rating: 5,
                    comment: "Trade fair has been a significant help to my business.",
                    name: "Akin Abigail"
                }
            ],
            thumbnails: sport,
                
           
            category: "Sports",
            status:"upcoming",
    
        },
    
            {
            id: 11,
            title: "Campus Tech Fair",
            description: "The campus tech fair is a showcase of innovation, startups, and technology created by students, faculty, and local tech companies. Picture rows of booths filled with gadgets, coding projects, robotics displays, mobile apps, VR demos, and AI prototypes — all buzzing with curious students and recruiters. It’s part exhibition, part networking space, and part hands-on playground.Student startups present their apps (from fintech payment solutions to e-learning platforms), engineering groups show off drones and robots, and computer science clubs host coding games or hack mini-projects live at their stands. Some fairs include “innovation pitches” where participants compete Shark Tank–style for seed funding, while others have keynote talks by alumni working at top tech firms or running their own African startups.Workshops are a big part of the event too — things like “Intro to AI & Machine Learning,” “Building a Website in One Hour,” “How to Launch a Startup with Zero Capital,” or “The Future of Fintech in Africa.” Attendees don’t just walk around looking; they get to touch, test, and learn.",
            date: "07-02-2025",
            time: "10:00AM - 3:00PM",
            Venue: "Student Union Hall",
            location: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15853.448962993987!2d3.333438355419922!3d6.601826200000012!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b923100000001%3A0x6b605ba67e692745!2sMartinos%20Hotel%20and%20Events%20Centre!5e0!3m2!1sen!2sng!4v1757687416218!5m2!1sen!2sng",
            feedback: [
                {
                    rating: 5,
                    comment: "Attending one of these ignited my passion for tech.",
                    name: "Bobby Friday"
                },
                {
                    rating: 3,
                    comment: "Not really fun if you don't know anything about tech.",
                    name: "Jenny Osas"
                },
                {
                    rating: 5,
                    comment: "So much knowledge being shared plus you really get to network.",
                    name: "Peace Kigali"
                }
            ],
            thumbnails: Deptimg2,
                
            gallery: [
                {id : 1, img: Deptimg},
                {id : 2, img: Deptimg1},
                {id : 3, img: Deptimg2},
                {id : 4, img: Dept},
                {id : 5, img: Dept1},
            ],
            category: "Departmental",
            status:"past",
    
        },
        
        {
            id: 12,
            title: "African School Games",
            description: "The African School Games are a continental multi-sport event designed specifically for African schoolchildren (typically between ages 13 and 18). It’s a brand-new initiative aimed at promoting youth development, sport, education, and cross-continental camaraderie.",
            date:"25-06-2025",
            time: "10:00AM - 3:00PM",
            Venue: "Sports Complex",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3982662520766!2d3.3110861733438597!3d6.471130493520582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b893a05857215%3A0xf72008c8bcde8f3c!2sPanama%20Events%20Centre!5e0!3m2!1sen!2sng!4v1757681213662!5m2!1sen!2sng",
            feedback:[
                {
                    ratings: 4,
                    comment: "It’s inspiring to see young athletes from across Africa coming together—not just to compete, but to celebrate unity and culture through sport.",
                    name:"Lucas Obi",
                },
                {
                    rating: 4.,
                    comment: "The African School Games are such a great opportunity for students to showcase their talents and maybe even discover future stars.",
                    name: "Ethan Mohammed"
    
                },
                {
                    rating: 4.,
                    comment: "I love how this event builds friendships across countries. Sport is a powerful way to connect people.",
                    name: "Grace Ogundele"
    
                },
            ],
            thumbnails: sport2,
                
            gallery: [
                {id : 1, img: sport1},
                {id : 2, img: sport3},
                {id : 3, img: sport2},
                {id : 4, img: sport4},
                {id : 5, img: sport},
            ],
            category : "Sports",
            status : "past"
        },
    
    
         {
            id: 13,
            title: "Back to School Night",
            description: "This annual event gives families the opportunity to meet teachers, learn about educational plans, and explore their child’s learning environment. It's designed to foster collaboration between families and the school community as the new school year begins.",
            date:"16-09-2025",
            time: "10:00AM - 3:00PM",
            Venue: "Main Hall 2",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15857.553145483655!2d3.299867255419921!3d6.472401999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8954c4806b33%3A0x145f5983f2854c6!2sVilla%20Park%20Hotel%20and%20Suites%20-%20Festac!5e0!3m2!1sen!2sng!4v1757683907875!5m2!1sen!2sng",
            feedback:[
                {
                    ratings: 4,
                    comment: "I love that parents get to meet the teachers early on. It makes communication so much easier throughout the year.",
                    name:"Victor Eze",
                },
                {
                    rating: 4,
                    comment: "Events like this show kids that their school and parents are working together to support their learning.",
                    name: "Aisha Abdullahi"
    
                },
                {
                    rating: 4.,
                    comment: "It’s not just about meeting teachers—it’s about building relationships that help children succeed.",
                    name: "Ifeoma Nwachukwu"
    
                },
            ],
            thumbnails: culture2,
             
            category : "Cultural",
            status : "upcoming"
        },
    
    
         {
            id: 15,
            title: "Talent Show",
            description: "A Talent Show is a school or community event where students get the chance to showcase their unique skills and creativity in front of an audience of classmates, teachers, parents, and friends.",
            date:"19-09-2025",
            time: "10:00AM - 3:00PM",
            Venue: "Sports Complex",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3982662520766!2d3.3110861733438597!3d6.471130493520582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b893a05857215%3A0xf72008c8bcde8f3c!2sPanama%20Events%20Centre!5e0!3m2!1sen!2sng!4v1757681213662!5m2!1sen!2sng",
            feedback:[
                {
                    ratings: 4,
                    comment: "I’m always amazed at how much hidden talent comes out during the school’s talent show—so many creative students!",
                    name:"Yetunde Alabi",
                },
                {
                    rating: 4,
                    comment: "The best part is seeing classmates you never expected to perform get up there with so much confidence.",
                    name: "Chioma Okeke"
    
                },
                {
                    rating: 4,
                    comment: "It’s not just about winning, it’s about celebrating everyone’s unique gifts",
                    name: "Halima Bello"
    
                },
            ],
            thumbnails: culture3,
                
            
            category : "Cultural",
            status :"upcoming"
    },
    
    ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "INCREMENT_VIEW":
            return {
                ...state,
                gadget: state.gadget.map(item =>
                    item.id === action.payload
                        ? { ...item, views: (item.views || 0) + 1 }
                        : item
                )
            };

        default:
            return state;
    }

}

export default rootReducer


export const incrementView = (id) => ({
    type: "INCREMENT_VIEW",
    payload: id,
});