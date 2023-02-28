import { Button } from "components/Button/Button";
import { Form, Field } from "./TaskForm.Styled";


export const TaskForm = () => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        form.reset();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Field
                type="text"
                name="text"
                placeholder="Enter task text..."
            />
            <Button type="submit">Add task</Button>
        </Form>
    )
}