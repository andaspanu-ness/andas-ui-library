import Button, { ButtonProps } from '@mui/material/Button';
import React from 'react';

export type MyButtonProps = Omit<ButtonProps, 'children'> & {
    label: string;
};

export const MyButton: React.FC<MyButtonProps> = ({ label, ...rest }) => {
    return (
        <Button variant='contained' {...rest}>
            {label}
        </Button>
    );
};
