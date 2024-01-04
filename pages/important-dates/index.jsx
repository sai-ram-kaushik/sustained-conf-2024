import { important_dates } from "../../constants";
const ImportantDates = () => {

    return (
        <div className="w-full p-5">
            <div className="container mx-auto">
                <div className="flex items-center justify-center">
                    <h2>Important <span>Dates</span></h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                    {important_dates.map((event, index) => (
                        <div
                            key={index}
                            className="bg-white border border-secondary rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300 cursor-pointer"
                        >
                            <p className="text-xl font-bold lg:text-2xl mb-2">{event.label}</p>
                            <p className="text-gray-600">{event.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImportantDates;

