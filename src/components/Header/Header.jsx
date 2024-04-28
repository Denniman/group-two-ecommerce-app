import PropTypes from "prop-types";

import { Cart } from "../Cart";

export const Header = ({ storeName }) => {
    return (
        <div className="w-full flex justify-between py-4 px-12 lg:px-24 border-b-2 border-gray-200">
            <p className=" text-xl font-bold ">{`${storeName} store`}</p>
            <Cart />
        </div>
    );
};

Header.propTypes = {
    storeName: PropTypes.string.isRequired,
};
