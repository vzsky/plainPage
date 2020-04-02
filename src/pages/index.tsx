import React from 'react'
import { Box, Heading, Text, Nav, ResponsiveContext, Anchor } from 'grommet';
import { Instagram, Github, Mail, LinkedinOption, FacebookOption, Send } from 'grommet-icons'

const Frame = (props:any) => (
    <Box
        direction="row"
        background = '#F0544F'
        style={{width:'100%', height:'100%'}}
        {...props}
    />
);

const Holder = (props:any) => (
    <Box
        align='end' 
        justify='center' 
        pad='medium'
        wrap = {true}
        overflow = 'hidden'
        background='background'
        {...props}
    />
);

const social = [
    { href:"https://www.facebook.com/tenninox", icon: <FacebookOption /> },
    { href:"https://www.instagram.com/my99.n/", icon:<Instagram />},
    { href:"https://github.com/vzsky", icon:<Github />},
    { href:"mailto:talay@layki.net", icon:<Mail />},
    { href:"https://www.linkedin.com/in/touchs/", icon:<LinkedinOption />},
    { href:"https://t.me/my99n", icon:<Send />},
]

export default () => {
    const size = React.useContext(ResponsiveContext);
    return (
        <Frame>
            <Holder >
                <Heading color='#EEE' responsive={true} size='medium' margin='medium' textAlign='end'>
                    Touch Sungkawichai
                </Heading>
                <Text color='#EEE' size={size} margin='small'>
                    KVIS 4 | Coder | Photographer | Thinker 
                </Text>
            </Holder>
            <Box background='light-1' overflow='hidden' alignContent='center' justify='around'>
                <Nav align='center'>
                    {social.map(item => (
                        <Anchor color='dark-1' href={item.href} icon={item.icon} />
                    ))}
                </Nav>
            </Box>
        </Frame>        
      );
}