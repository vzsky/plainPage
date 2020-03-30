import React from 'react'
import { Box, Grid, Heading, Text, Header, Button, Nav, Anchor } from 'grommet';
import { Instagram, Github, Mail, LinkedinOption, FacebookOption, Send } from 'grommet-icons'

const Frame = (props:any) => (
    <Box
        direction="row"
        background = 'background'
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
        overflow = "hidden"
        {...props}
    />
);

export default () => {
    
    return (
        < >
            <Frame>
                <Grid
                fill
                columns={["xxsmall", ['xxsmall','flex'], ['medium', 'large'], ['xxsmall', 'xsmall']]}
                rows={['xxsmall', 'flex', 'medium', 'flex']}
                areas={[
                    { name: 'header', start: [0, 0], end: [3, 0] },
                    { name: 'mid1', start: [2, 2], end: [2, 2] },
                    { name: 'side', start: [0, 1], end: [0, 3] }
                ]}
                >
                    <Box gridArea='header' background='dark-1'>
                    <Header overflow='hidden' pad={{left:'medium', right:'medium'}}>
                        <Button label="Home." plain/>
                        <Nav direction="row">
                            <Anchor href="https://www.facebook.com/tenninox" icon={<FacebookOption />} />
                            <Anchor href="https://www.instagram.com/my99.n/" icon={<Instagram />} />
                            <Anchor href="https://github.com/vzsky" icon={<Github />} />
                            <Anchor href="mailto:talay@layki.net" icon={<Mail />} />
                            <Anchor href="https://www.linkedin.com/in/touchs/" icon={<LinkedinOption />} />
                            <Anchor href="https://t.me/my99n" icon={<Send />} />
                        </Nav>
                    </Header>
                    </Box>
                    <Holder gridArea="mid1" >
                        <Heading color='#EEE' size='medium' margin='xsmall' textAlign='end'>
                            Touch Sungkawichai
                        </Heading>
                        <Text color='#EEE' size='medium' margin='xsmall'>
                            KVIS 4 | Coder | Photograph | Thinker
                        </Text>
                    </Holder>
                    <Box gap='large' gridArea='side' background='light-1' overflow='hidden' justify='center'>
                        <Text style={{transform: "rotate(-90deg)"}}>
                            layki.net
                        </Text>
                    </Box>
                </Grid>
            </Frame>      
        </ >    
      );
}