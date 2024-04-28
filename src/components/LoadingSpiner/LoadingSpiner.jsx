import { Spinner } from "flowbite-react";

export const LoadingSpiner = () => {
    return (
        <div className="w-full h-screen bg-white flex justify-center items-center">
            <div>
                <Spinner color="info" aria-label="loading" size="xl" />
            </div>
        </div>
    );
};
