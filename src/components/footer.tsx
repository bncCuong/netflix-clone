import Link from 'next/link';
import React from 'react';

export const Footer = () => {
    return (
        <div className="py-[100px] text-textColor/80 text-start w-[100%]">
            <Link className="text-start underline" href={'/'}>
                Questions? Contact us.
            </Link>
            <div className="flex justify-between mt-10">
                <ul className="flex-col space-y-3 text-sm">
                    <li>
                        <Link className="text-start underline" href={'/'}>
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link className="text-start underline" href={'/'}>
                            Account
                        </Link>
                    </li>
                    <li>
                        <Link className="text-start underline" href={'/'}>
                            Jobs
                        </Link>
                    </li>
                    <li>
                        <Link className="text-start underline" href={'/'}>
                            Privacy
                        </Link>
                    </li>
                    <li>
                        <Link className="text-start underline" href={'/'}>
                            Contact Us
                        </Link>
                    </li>{' '}
                    <li>
                        <Link className="text-start underline" href={'/'}>
                            Only on Netflix
                        </Link>
                    </li>
                </ul>
                <ul className="flex-col space-y-3 text-sm">
                    <li>
                        <Link className="text-start underline" href={'/'}>
                            Legal Notices
                        </Link>
                    </li>
                    <li>
                        <Link className="text-start underline" href={'/'}>
                            Gift Card Terms
                        </Link>
                    </li>
                    <li>
                        <Link className="text-start underline" href={'/'}>
                            Help Center
                        </Link>
                    </li>
                    <li>
                        <Link className="text-start underline" href={'/'}>
                            Media Center
                        </Link>
                    </li>
                    <li>
                        <Link className="text-start underline" href={'/'}>
                            Terms of Use
                        </Link>
                    </li>{' '}
                    <li>
                        <Link className="text-start underline" href={'/'}>
                            Cookie Preferences
                        </Link>
                    </li>
                </ul>
                <ul className="flex-col space-y-3 text-sm">
                    <li>
                        <Link className="text-start underline" href={'/'}>
                            Investor Relations
                        </Link>
                    </li>
                    <li>
                        <Link className="text-start underline" href={'/'}>
                            Corporate Infomation
                        </Link>
                    </li>
                    <li>
                        <Link className="text-start underline" href={'/'}>
                            Speed Test
                        </Link>
                    </li>
                    <li>
                        <Link className="text-start underline" href={'/'}>
                            Ways to Watch
                        </Link>
                    </li>
                </ul>
            </div>

            <h1 className="text-textColor/80 mt-10 text-xl">Netflix Vietnam</h1>
        </div>
    );
};
