import React, { FC } from 'react';

import {
    AppFooter,
    Mentor,
    MentorHead,
    MentorTitle,
    MentorBody,
    MentorFooterTitle,
    JimmyPageIcons,
} from './styled';

const Footer: FC = () => {
    return (
        <AppFooter className='app-footer'>
            <div className='sidebar-bottom'>
                <Mentor className='mentor'>
                    <MentorHead className='mentor-head'>
                        <MentorTitle className='mentor-title'>
                            <span>My Mentor</span>
                        </MentorTitle>
                        <div className='mentor-icon'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='17'
                                height='15'
                                viewBox='0 0 17 15'
                                fill='#FFFFFF'
                            >
                                <text className='a' transform='translate(0 12)'>
                                    <tspan x='0' y='0'>
                                        —&gt;
                                    </tspan>
                                </text>
                            </svg>
                        </div>
                    </MentorHead>
                    <MentorBody className='mentor-body'>
                        <MentorFooterTitle className='mentor-footer-title'>
                            Jimmy Page
                        </MentorFooterTitle>
                        <JimmyPageIcons className='jimmy-page-icons'>
                            <li className='icon-item'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='11.771'
                                    height='11.771'
                                    viewBox='0 0 11.771 11.771'
                                    fill='#FFFFFF'
                                >
                                    <path
                                        className='a'
                                        d='M2.347,5.235A12.718,12.718,0,0,0,4.288,8.7,22.279,22.279,0,0,0,6.935,11.41a13.25,13.25,0,0,0,3.529,2c1.588.588,2,.294,2.058.235L13.7,12a.205.205,0,0,1,.059-.118.182.182,0,0,0-.059-.118L10.4,9.94a.263.263,0,0,0-.294,0l-.823,1c-.353.529-1.117,0-1.353-.176L7.817,10.7c-.059-.059-.471-.412-1.353-1.294A7.948,7.948,0,0,1,5.406,8.234l-.059-.059c-.529-.706-.765-1.059-.706-1.412,0-.118.118-.235.176-.353l1-.823c.118-.059.118-.176.059-.294L3.994,2.059C3.994,2,3.935,2,3.877,2H3.818l-.059.059L2.112,3.176C2.053,3.235,1.759,3.647,2.347,5.235Z'
                                        transform='translate(-1.987 -2)'
                                    />
                                </svg>
                            </li>
                            <li className='icon-item'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='15.432'
                                    height='10.256'
                                    viewBox='0 0 15.432 10.256'
                                    fill='#FFFFFF'
                                >
                                    <path
                                        className='a'
                                        d='M2.309,5.2A.346.346,0,0,0,2,5.574v9.507a.359.359,0,0,0,.386.374h14.66a.359.359,0,0,0,.386-.374V5.574a.359.359,0,0,0-.386-.374Zm13.5,9.507H3.235l.309-.3L7.4,10.665l.077-.075.154.075,1.852,1.572a.4.4,0,0,0,.463,0L11.8,10.665l.154-.075.077.075,3.858,3.743.309.3Zm.926-8.384v7.86l-.309-.3-3.858-3.743-.154-.15.154-.15,3.858-3.369ZM3.7,5.874H16.2l-.309.3L9.87,11.413l-.154.075-.077-.075L3.62,6.173l-.386-.3Zm-1,7.935V6.323L3,6.547,6.861,9.916l.154.15-.154.15L3,13.959l-.309.3Z'
                                        transform='translate(-2 -5.2)'
                                    />
                                </svg>
                            </li>
                            <li className='icon-item'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='14.259'
                                    height='12.358'
                                    viewBox='0 0 14.259 12.358'
                                    fill='#FFFFFF'
                                >
                                    <g transform='translate(0 0)'>
                                        <path
                                            className='a'
                                            d='M13.833,3H2.426A1.427,1.427,0,0,0,1,4.426V11.08a1.427,1.427,0,0,0,1.426,1.426H8l4.64,2.784a.475.475,0,0,0,.72-.408V12.506h.475a1.427,1.427,0,0,0,1.426-1.426V4.426A1.427,1.427,0,0,0,13.833,3Zm.475,8.08a.476.476,0,0,1-.475.475h-.951a.475.475,0,0,0-.475.475v2.012l-4.033-2.42a.473.473,0,0,0-.245-.068h-5.7a.476.476,0,0,1-.475-.475V4.426a.476.476,0,0,1,.475-.475H13.833a.476.476,0,0,1,.475.475ZM11.932,6.327a.475.475,0,0,1-.475.475h-7.6a.475.475,0,0,1,0-.951h7.6A.475.475,0,0,1,11.932,6.327ZM8.6,9.179a.475.475,0,0,1-.475.475H3.852a.475.475,0,0,1,0-.951H8.129A.475.475,0,0,1,8.6,9.179Z'
                                            transform='translate(-1 -3)'
                                        />
                                    </g>
                                </svg>
                            </li>
                        </JimmyPageIcons>
                    </MentorBody>
                </Mentor>
            </div>
        </AppFooter>
    );
};

export default Footer;
