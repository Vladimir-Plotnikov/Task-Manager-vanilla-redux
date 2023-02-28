import { Wrapper } from "./StatusFilter.styled";

export const StatusFilter = () => {
    return (
        <Wrapper>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </Wrapper>
    )
}