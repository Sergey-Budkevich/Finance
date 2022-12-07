import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';
import { Flex } from '../styled-components/wrapper';

type PropsType = {
    children: any,
    to: string,
    sidebarLink?: boolean,
    className?: string
}

function CustomLink({children, to, sidebarLink, className}:PropsType) {
    const match = useMatch(to)

    return (
        <>
        { sidebarLink ?
            <SidebarLink className={`${className}`} 
            style={{ backgroundColor: match ? 'var(--active-sidebar-link-background)' : ''}}>
                <Link to={to}>
                    <Flex alignItems='center' columnGap='10px'>
                        {children}
                    </Flex>
                </Link>
            </SidebarLink> 
            :
            <div>
                <Link to={to} 
                className={`${className}`}>
                    {children}
                </Link>
            </div>
        }
        </>
    );
}

export const SidebarLink = styled.div`
    padding: 0 25px;
    width: 100%;
    span{
        font-family: var(--second-font);
        font-weight: var(--font-weight-regular);
        line-height: 40px;
        color: var(--color-white);
        font-size: var(--text-small-size);
    }
    :hover {
        background-color: var(--active-sidebar-link-background);
        transition-duration: 0.6s;
    }
`

export default CustomLink;