import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react';

export const Logo: React.FC<HTMLChakraProps<'img'>> = (props) => {
  const color = useColorModeValue('#231f20', '#fff');
  return (
    <chakra.img
      src="/static/images/enswagLogoThree-bg.png"
      alt="Enswag"
      {...props}
      style={{ color }}
    />
  );
};
