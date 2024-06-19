import React from 'react'
import { Container, Stack, Box, Button } from '../styled'
import { ReactComponent as Logo } from "../images/logo-footer.svg";
import { Link } from '@reach/router';

const Footer = () => {
  return (
    <Container size='fullwidth' mt={["24px", "72px"]} pb='72px'>
      <Container>
        <Stack width='100%' justify='flex-start'>
          <Stack align='start' spacing='20px'>
            <Box>
              <Logo />
            </Box>
            <Stack
              direction='column'
              align='start'
              height='100%'
              spacing='20px'
            >
                <Link to={'/check-out'}>
                   <Button variant='text'>
                    <h5>checkout</h5>
                   </Button>
                </Link>
              <Box>pick me</Box>
              <Box color ='grey.600'>Lorem ipsum dolor sit.</Box>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Container>
  );
};

export default Footer;
