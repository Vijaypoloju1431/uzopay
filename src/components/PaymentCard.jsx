
import { FiArrowRight } from "react-icons/fi";

const PaymentCard = ({ title, description, icon }) => {
    return (
        <div className="relative w-80 h-[460px] p-[1px] rounded-[20px] bg-gradient-to-br from-purple-500/40 via-purple-400/20 to-transparent"
            style={{
                clipPath: "polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0% 100%)"
            }}
        >
            <div className="w-full h-full bg-[#0B0B0F] rounded-[20px] p-6 text-white"
                style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0% 100%)"
                }}
            >
                {/* Shield Icon */}
                <div className="absolute top-5 right-5 z-10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M12 2L19.09 6.26V12.53C19.09 17.1 15.95 21.25 12 22C8.05 21.25 4.91 17.1 4.91 12.53V6.26L12 2Z"
                            stroke="#6b7280"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                {/* Image */}
                <div className="flex justify-center my-8">
                    <img src={icon} alt={title} className="w-32 h-32 object-contain" />
                </div>

                {/* Text */}
                <h2 className="text-xl font-semibold mb-3">{title}</h2>
                <p className="text-sm text-gray-300 mb-10 leading-relaxed">
                    {description}
                </p>

                {/* Arrow */}
                <div className="absolute bottom-4 right-4">
                    <FiArrowRight className="text-purple-400 text-xl" />
                </div>
            </div>
        </div>
    );
};

export default PaymentCard;
