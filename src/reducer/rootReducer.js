import col from "../asset/image/images/co1.png"
import co from "../asset/image/images/co2.png"
import image2 from "../asset/image/images/images 2.jpg"
import image from "../asset/image/images/images .jpg"
import co6 from "../asset/image/images/co6.jpg"

import Images2 from "../asset/image/landingimg2.jpg"
import Images3 from "../asset/image/lannding3.jpg"
import Images4 from "../asset/image/landingimage.jpg"
import Images5 from "../asset/image/landingimg4.jpg"



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