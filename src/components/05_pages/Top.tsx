/*========== import ==========*/
import React from "react";
import styled from "styled-components";
/* molecules */
import Input from "@/src/components/01_atoms/Input";
/* templates */
import Layout from "@/src/components/04_templates/Layout";
import { GlobalStoreProvider } from "@/types";
import { Store } from "@/src/Store";
/* type */
interface Props {
  name: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

/* DOM */
const Component: React.FC<Props> = (props): JSX.Element => {
  return (
    <article>
      <h2>{props.name}</h2>
      <p><Input onChange={props.onChange} /></p>
    </article>
  );
};

/* style */
const StyledComponent = styled(Component)<Props>`
  color: red;
`;

/* container */
const Top: React.FC = (): JSX.Element => {
  const { state, dispatch }: GlobalStoreProvider = React.useContext(Store);

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({type: "TEST", payload: {name: e.target.value} });
  };

  return (
    <Layout>
      <Component name={state.name} onChange={handleClick} />
    </Layout>
  );
};

/* export */
export default Top;