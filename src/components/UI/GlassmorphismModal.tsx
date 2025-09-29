import { FC } from "react";

interface GlassmorphismModalProps {
    title: string;
    content: string;
    onClose: () => void;
}

const GlassmorphismModal: FC<GlassmorphismModalProps> = ({ title, content, onClose }) => (
    <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={onClose}
    >
        <div
            className="p-6 sm:p-8 rounded-2xl border border-white border-opacity-30 shadow-lg w-full max-w-2xl mx-auto text-white"
            style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
            }}
            onClick={(e) => e.stopPropagation()}
        >
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
                {title}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed opacity-90 whitespace-pre-wrap">
                {content}
            </p>
            <div className="flex justify-center mt-6">
                <button
                    onClick={onClose}
                    className="px-6 py-2 rounded-full font-semibold bg-gray-700 bg-opacity-50 hover:bg-opacity-70 transition-colors duration-200"
                >
                    Tutup
                </button>
            </div>
        </div>
    </div>
);

export default GlassmorphismModal;