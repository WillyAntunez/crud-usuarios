import { useState } from 'react';

interface IEvent {
    target: {
        name: string;
        value: string;
    }
}

export const useForm = () => {
    const [formState, setFormState] = useState({name: '', email: ''});

    const onInputChange = (event:IEvent) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onResetForm = () => {
        setFormState({name: '', email: ''});
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    };
};