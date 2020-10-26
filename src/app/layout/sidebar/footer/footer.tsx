import React, { FC } from 'react';

import { ReactComponent as RightArrowSVG } from 'assets/svg/right-arrow.svg';
import { ReactComponent as CallSVG } from 'assets/svg/call.svg';
import { ReactComponent as MailSVG } from 'assets/svg/mail.svg';
import { ReactComponent as ChatSVG } from 'assets/svg/chat.svg';

import {
    AppFooter,
    Mentor,
    MentorHead,
    MentorTitle,
    MentorBody,
    MentorFooterTitle,
    JimmyPageIcons,
} from './footer.styled';

const Footer: FC = () => {
    return (
        <AppFooter className="app-footer">
            <div className="sidebar-bottom">
                <Mentor className="mentor">
                    <MentorHead className="mentor-head">
                        <MentorTitle className="mentor-title">
                            <span>My Mentor</span>
                        </MentorTitle>
                        <div className="mentor-icon">
                            <RightArrowSVG />
                        </div>
                    </MentorHead>
                    <MentorBody className="mentor-body">
                        <MentorFooterTitle className="mentor-footer-title">
                            Jimmy Page
                        </MentorFooterTitle>
                        <JimmyPageIcons className="jimmy-page-icons">
                            <li className="icon-item">
                                <CallSVG />
                            </li>
                            <li className="icon-item">
                                <MailSVG />
                            </li>
                            <li className="icon-item">
                                <ChatSVG />
                            </li>
                        </JimmyPageIcons>
                    </MentorBody>
                </Mentor>
            </div>
        </AppFooter>
    );
};

export default Footer;
