import { width } from '@mui/system';
import React from 'react';
import { Link, useMatch} from 'react-router-dom';
import styled from 'styled-components';
import { Flex } from '../styled-components/wrapper';

type PropsType = {
    children: any,
    to: string,
    sidebarLink?: boolean,
    className?: string,
    btnLink?: boolean,
    textColor?: string,
    border?:boolean,
    width?: string,
    padding?: string,
}

// window.location.href.includes(to)

function CustomLink({children, to, sidebarLink, className, btnLink, textColor, border, width, padding }:PropsType) {
    const match = useMatch(to)
    
    return (
        <>
        { sidebarLink ?
            <SidebarLink className={className ? `${className}` : ''} 
            style={{ backgroundColor: window.location.href.includes(to) && to !=='/' ? 'var(--color-blue)' : ''}}>
                <Link to={to}>
                    <Flex alignItems='center' columnGap='10px'>
                        {children}
                    </Flex>
                </Link>
            </SidebarLink> 
            :
            btnLink ? 
            <BtnLink className={className ? `${className}` : ''}
            style={{ border: window.location.href.includes(to) || border? `2px solid ${textColor}` : '',
            width: `${width}`,
            padding: `${padding}`
            }}>
                <Link to={to} style={{color: `${textColor}`}}>
                    {children}
                </Link>
            </BtnLink>
            : 
            <div className={className ? `${className}` : ''}
            style={{ border: textColor ? `2px solid ${textColor}` : ''}}>
                <Link to={to} >
                    {children}
                </Link>
            </div>
        }
        </>
    );
}

export const SidebarLink = styled.div`
width: 100%;
    a{  
        width: 100%;
        height: 100%;
        div{
            padding 0 25px;
        }
        span{
            font-family: var(--second-font);
            font-weight: var(--font-weight-regular);
            line-height: 40px;
            color: var(--color-white);
            font-size: var(--text-small-size);
        }
    }
    :hover {
        background-color: var(--color-blue);
        transition-duration: 0.6s;
    }
`

const BtnLink = styled.div`
    border-radius: 30px;
    a{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
        height: 100%;
        width:100%;
        text-align: center;
        font-family: var(--second-font);
        font-weight: var(--font-weight-regular);
        line-height: 25px;
        font-size: var(--text-normal-size);
        :hover{
            scale: none;
        }
    }
    :hover{
        box-shadow: 3px 3px 3px 2px rgba(255, 255, 255, 0.3) inset;
    }
`
export default CustomLink;