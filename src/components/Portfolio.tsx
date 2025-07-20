import Card from "./Card";
import certificate from "../assets/Certificate.png";
import ui from "../assets/ui.png";

const Portfolio: React.FC = () => {
    return (
        <div>
            <h1 className="text-2xl font-regular text-gray-600 my-5 ml-16 mt-24 ">Portfolio</h1>
            
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2 mx-10">
           <Card
                image="https://apptraitsolutions.com/wp-content/uploads/2022/02/12-Amazing-Web-Development-Projects-for-Beginners-in-2022.jpg"
               description="Web Apps, Mobile Apps, and AI Projects"
               link="https://github.com/Vindyani1999?tab=repositories"
               link_text="Projects"
           />
           <Card
                image= {certificate}
               description="Certifications and Achievements"
               link="https://www.linkedin.com/in/vindyanikach/"
               link_text="Certificates"
           />
           <Card
                image={ui}
                description="Figma UI Designs & Wireframes"
               link="https://www.figma.com/design/ARsOtlpLE6imZGDQ6VYArr/LYXUX-Home-Page?node-id=200-2&p=f&t=3y3758po1x867gzK-0"
               link_text="UI Designs & Wireframes"
           />
           <Card
                image="https://media.licdn.com/dms/image/v2/D5612AQGJPlFEa49w7Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1714193815569?e=1758758400&v=beta&t=7kvIXTB6KEVEJPW8mZQVhCbv6KsF0eDikoHWihQ35g0"
                              description="Medium Articles & LinkedIn Posts"
               link="https://medium.com/@chamihansani"
               link_text="Articles & Blogs"
           />
        </div>
        </div>
    );
};

export default Portfolio;
