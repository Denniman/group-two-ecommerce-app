import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { Cart } from "../Cart";

export const Header = ({ storeName }) => {
    const { settings } = useSelector((state) => state.products);
    return (
        <div
            style={{
                backgroundColor: `${settings.backgroundColor}`,
                borderColor: `${settings.color}`,
            }}
            className=" w-full fixed mb-20 top-0 left-0 right-0 flex justify-between py-4 px-12 lg:px-24 border-b-2 border-gray-200"
        >
            <p
                style={{ color: `${settings.color}` }}
                className=" text-xl uppercase subpixel-antialiased"
            >{`${storeName} store`}</p>
            <Cart />
        </div>
    );
};

Header.propTypes = {
    storeName: PropTypes.string.isRequired,
};
