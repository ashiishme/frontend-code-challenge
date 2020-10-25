import React, { FC } from 'react';
import styled from '@emotion/styled';

const PackageListItem = styled.li`
    width: 100%;
    height: 93px;
    background: #ffffff;
    box-shadow: 0px 5px 10px #a9a9a91a;
    border: 1px solid #ececec;
    border-radius: 4px;
    margin-bottom: 8px;
`;

const PackageListItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 22px 32px;
`;

const PackageItemDetails = styled.div`
    display: flex;
    align-items: center;
`;

const PackageItemIcon = styled.div`
    margin-right: 16px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(61, 63, 168, 0.06);
    border: 1px solid rgba(61, 63, 168, 0.06);
    text-align: center;
    line-height: 48px;
`;

const PackageItemTitle = styled.h5`
    font-weight: bold;
    font-size: 14px;
    color: #555555;
`;

const PackageItemDescription = styled.div`
    margin-top: 8px;

    p {
        font-size: 12px;
        font-weight: 500;
        color: #858585;
    }
`;

const PackagePriceTitle = styled.p`
    font-weight: bold;
    font-size: 10px;
    color: #858585;
    text-transform: uppercase;
`;

const PackagePriceAmount = styled.p`
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
    color: #262758;
`;

const GymPackageItem: FC<PackageItem> = ({
    title,
    description,
    price,
}: PackageItem) => {
    return (
        <PackageListItem className='package-item'>
            <PackageListItemWrapper className='package-item-wrapper'>
                <PackageItemDetails className='package-item-details'>
                    <PackageItemIcon className='package-item-icon'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='29.66'
                            height='18.424'
                            viewBox='0 0 29.66 18.424'
                        >
                            <g transform='translate(-411.09 -138.906)'>
                                <path
                                    className='a'
                                    d='M440.19,143.05c-3.1-3.39-8.15-.92-8.31-.84l-1.68.6-6.9-3.7a1.726,1.726,0,0,0-1.55-.04l-1.38.65a1.722,1.722,0,0,0-.29,2.93l3.43,2.56-6.88,2.46a.706.706,0,0,1-.71-.13l-1.64-1.44a1.748,1.748,0,0,0-1.74-.31l-.34.13a1.685,1.685,0,0,0-.96.91,1.707,1.707,0,0,0-.03,1.33l1.31,3.3a4.469,4.469,0,0,0,5.77,2.5l5.71-2.24-1.04,4.46a.941.941,0,0,0,.92,1.15,1.047,1.047,0,0,0,.3-.05l3.09-1.06a1.732,1.732,0,0,0,1.04-.96l2.4-5.79a.749.749,0,0,1,.42-.4l7.22-2.59a6.382,6.382,0,0,0,1.57-.71,1.757,1.757,0,0,0,.77-1.25A1.9,1.9,0,0,0,440.19,143.05Zm-19.51-1.2a.7.7,0,0,1-.29-.64.72.72,0,0,1,.41-.58l1.38-.66a.742.742,0,0,1,.65.02l6.1,3.28-4.28,1.53Zm18.67,3.1a5.543,5.543,0,0,1-1.32.58l-7.23,2.6a1.721,1.721,0,0,0-1.01.95l-2.41,5.8a.739.739,0,0,1-.43.4l-2.99,1.02,1.15-4.91a.715.715,0,0,0-.22-.69.707.707,0,0,0-.46-.17.742.742,0,0,0-.25.05l-6.26,2.45a3.465,3.465,0,0,1-4.47-1.94l-1.31-3.3a.7.7,0,0,1,.01-.55.68.68,0,0,1,.4-.38l.34-.13a.8.8,0,0,1,.26-.05.692.692,0,0,1,.47.18l1.64,1.43a1.716,1.716,0,0,0,1.71.32l7.7-2.76a.488.488,0,0,0,.11-.04l5.51-1.97a.433.433,0,0,0,.12-.05l1.86-.66c.05-.03,4.59-2.24,7.18.59a.892.892,0,0,1,.24.69A.75.75,0,0,1,439.35,144.95Z'
                                />
                                <path
                                    className='a'
                                    d='M440.75,151.86a.5.5,0,0,1-.5.5h-8.1a.5.5,0,0,1,0-1h8.1A.5.5,0,0,1,440.75,151.86Z'
                                />
                                <path
                                    className='a'
                                    d='M437.94,154.49a.508.508,0,0,1-.5.5h-5.29a.508.508,0,0,1-.5-.5.5.5,0,0,1,.5-.5h5.29A.5.5,0,0,1,437.94,154.49Z'
                                />
                            </g>
                        </svg>
                    </PackageItemIcon>
                    <div className='pacakge-item-content'>
                        <div className='package-item-title'>
                            <PackageItemTitle>{title}</PackageItemTitle>
                        </div>
                        <PackageItemDescription className='package-item-description'>
                            <p>{description}</p>
                        </PackageItemDescription>
                    </div>
                </PackageItemDetails>
                <div className='package-item-price'>
                    <PackagePriceTitle className='price-title'>
                        Estimated Price
                    </PackagePriceTitle>
                    <PackagePriceAmount className='price-amount'>{`${price}/6 mo.`}</PackagePriceAmount>
                </div>
                <div className='package-item-button'>
                    <button className='btn'>
                        <span>Order Now</span>
                    </button>
                </div>
            </PackageListItemWrapper>
        </PackageListItem>
    );
};

export default GymPackageItem;
