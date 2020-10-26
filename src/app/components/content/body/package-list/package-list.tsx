import React, { FC } from 'react';
import GymPackageItem from 'app/components/list/gym-package';

type PackageList = PackageItem[];

const package_list: PackageList = [
    {
        title: 'Pilates',
        description:
            'Developed first by Joseph Pilates, after whom the technique is name',
        price: '$4,220',
    },
    {
        title: 'Yoga & Meditation',
        description:
            'Mantra has always believed in a Mind & Body approach which means',
        price: '$4,220',
    },
    {
        title: 'Kettlebell',
        description:
            'Kettlebell, the exercise routine involving a kettle shaped weight originated',
        price: '$4,220',
    },
];

const PackageList: FC = () => {
    return (
        <ul className="package-list">
            {package_list.map((item: PackageItem, index: number) => (
                <GymPackageItem
                    key={index}
                    title={item.title}
                    description={`${item.description.substr(0, 70)}...`}
                    price={item.price}
                />
            ))}
        </ul>
    );
};

export default PackageList;
