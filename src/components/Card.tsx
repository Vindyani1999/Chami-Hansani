interface CardProps {
    image :string; // URL or path to the image
    description: string;
    link: string;
    link_text: string; // Optional link text
}

const Card: React.FC<CardProps> = ({ image, description, link, link_text }) => {

    return (
        <div className="border border-gray-200 rounded-lg p-4 m-4">
            <img src={image} alt={description} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold mb-2"><a href={link} className="text-blue-500 hover:underline">{link_text}</a></h2>
            <p className="text-gray-700">{description}</p>
            
        </div>
    );
};

export default Card;
