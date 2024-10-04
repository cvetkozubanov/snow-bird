import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const SnowBirdButton = styled(Button)(({ theme }) => ({
  '&.Mui-disabled': {
    color: theme.palette.text.secondary,
    opacity: 0.5
  }
}));

export default SnowBirdButton;
