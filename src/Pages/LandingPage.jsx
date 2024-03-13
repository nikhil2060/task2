import { Container, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <StyledLanding>
      <StyledContainer>
        <StyledItem onClick={() => navigate("/annanprashanMuhurat")}>
          Annanprashan Muhurat 2024
        </StyledItem>
        <StyledItem onClick={() => navigate("/naamkaranMuhurat")}>
          Naamkaran Muhurat 2024
        </StyledItem>
        <StyledItem onClick={() => navigate("/bike-carMuhurat")}>
          Car/Bike Muhurat 2024
        </StyledItem>
        <StyledItem onClick={() => navigate("/marriageMuhurat")}>
          Marriage Muhurat 2024
        </StyledItem>
        <StyledItem onClick={() => navigate("/goldBuying")}>
          Gold Buying Muhurat 2024
        </StyledItem>
        <StyledItem onClick={() => navigate("/bhoomipujan")}>
          Bhoomi Pujan Muhurat 2024
        </StyledItem>
        <StyledItem onClick={() => navigate("/grihaPravesh")}>
          Griha Pravesh Muhurat 2024
        </StyledItem>
        <StyledItem onClick={() => navigate("/mudanMuhurat")}>
          Mundan Muhurat 2024
        </StyledItem>
      </StyledContainer>
    </StyledLanding>
  );
}

const StyledLanding = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledContainer = styled.div`
  width: 30%;
  height: 400px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  box-shadow: 0px 0px 10px #55555572;
  border-radius: 10px;
  min-width: 300px;
`;

const StyledItem = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px #55555524;
`;

export default LandingPage;
