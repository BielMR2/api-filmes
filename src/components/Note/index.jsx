import { Container } from "./styles";

import { IoStarOutline } from "react-icons/io5";

import { Tag } from "../Tag";
import { EvaluationField } from "../EvaluationField";

export function Note({data, ...rest}){

    return(
        <Container {...rest} >
            <div>
                <h1>{data.title}</h1>

                <EvaluationField onlyView data={data.rating} >
                    <IoStarOutline data={1} />
                    <IoStarOutline data={2} />
                    <IoStarOutline data={3} />
                    <IoStarOutline data={4} />
                    <IoStarOutline data={5} />
                </EvaluationField>
            </div>
            
            <p>{data.description}</p>
            
            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }
        </Container>
    )
}