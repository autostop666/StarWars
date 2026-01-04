import { Input, InputRef } from "antd";
import {forwardRef} from "react"
import styles from './Input.module.less'


interface CustomInputProps {
    disabled?: boolean;
    placeholder: string;
    fullWidth: boolean;
}

const CustomInput = forwardRef<InputRef, CustomInputProps>(
    ({disabled = false, placeholder, fullWidth, ...props}, ref) =>{
        return(
            <Input
                {...props}
                ref={ref}
                disabled={disabled}
                placeholder={placeholder || " "}
                style = {{
                    width: fullWidth ? '100%' : undefined,
                }}
                className={`${styles.Input}`}
            />
        );
    }

);

export default CustomInput
