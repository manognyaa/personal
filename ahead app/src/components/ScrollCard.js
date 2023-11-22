export default function ScrollCard({ title, description, isActive }) {
    const activeClass = isActive ? 'bg-blue-500 text-white' : 'bg-white text-gray-800';
    return (
        <div className={`max-w-md rounded overflow-hidden shadow-lg p-6 m-4 transition duration-300 ease-in-out ${activeClass}`}>
            <div className="text-center">
                <h3 className={`font-bold text-xl mb-2 ${isActive ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
                <p className={`text-base ${isActive ? 'text-white' : 'text-gray-700'}`}>{description}</p>
            </div>
        </div>
    );
}
