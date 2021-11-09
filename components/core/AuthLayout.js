import Image from "next/image";
import bgImage from "images/bg.jpg";
import styled from "styled-components";

const StyledLayoutContainer = styled.main`
  width: 100%;
  .bg-image {
    width: 100% !important;
  }
`;

const AuthLayout = ({ children }) => {
  return (
    <StyledLayoutContainer>
      <Image src={bgImage} className="bg-image" />
      <div>Layout</div>
      {children}
    </StyledLayoutContainer>
  );
};

export default AuthLayout;
