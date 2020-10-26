import React, { FC } from 'react';

import {
    PackageListItem,
    PackageListItemWrapper,
    PackageItemDetails,
    PackageItemIcon,
    PackageItemTitle,
    PackageItemDescription,
    PackagePriceTitle,
    PackagePriceAmount,
} from './gym-package.styled';
import { ReactComponent as PlaneSVG } from 'assets/svg/plane.svg';

const GymPackageItem: FC<PackageItem> = ({
    title,
    description,
    price,
}: PackageItem) => {
    return (
        <PackageListItem className="package-item">
            <PackageListItemWrapper className="package-item-wrapper">
                <PackageItemDetails className="package-item-details">
                    <PackageItemIcon className="package-item-icon">
                        <PlaneSVG />
                    </PackageItemIcon>
                    <div className="pacakge-item-content">
                        <div className="package-item-title">
                            <PackageItemTitle>{title}</PackageItemTitle>
                        </div>
                        <PackageItemDescription className="package-item-description">
                            <p>{description}</p>
                        </PackageItemDescription>
                    </div>
                </PackageItemDetails>
                <div className="package-item-price">
                    <PackagePriceTitle className="price-title">
                        Estimated Price
                    </PackagePriceTitle>
                    <PackagePriceAmount className="price-amount">{`${price}/6 mo.`}</PackagePriceAmount>
                </div>
                <div className="package-item-button">
                    <button className="btn">
                        <span>Order Now</span>
                    </button>
                </div>
            </PackageListItemWrapper>
        </PackageListItem>
    );
};

export default GymPackageItem;
