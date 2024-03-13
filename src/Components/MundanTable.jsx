/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import TableData from "../Data/MundanTables.json";

const data = TableData;

function Table({ month }) {
  const monthData = data[month];
  return (
    <>
      <StyledHeading>{`${month} 2024: Auspicious Muhurat for Mundan :`}</StyledHeading>
      <StyledTable>
        <TableHeader />

        {monthData.map((item, index) => {
          return (
            <TableRow
              Date={item.Date}
              Time={item.Time}
              Nakshatra={item.Nakshatra}
              key={index}
            />
          );
        })}
      </StyledTable>
    </>
  );
}

export default Table;

function TableHeader() {
  return (
    <StyledTableHeader>
      <div>
        <span>Date</span>
      </div>
      <div>
        <span>Time</span>
      </div>
      <div>
        <span>Nakshatra</span>
      </div>
    </StyledTableHeader>
  );
}

function TableRow({ Date, Time, Nakshatra }) {
  return (
    <StyleTableRow>
      <div>
        <span>{Date}</span>
      </div>
      <div>
        <span>{Time}</span>
      </div>
      <div>
        <span>{Nakshatra}</span>
      </div>
    </StyleTableRow>
  );
}

const StyledHeading = styled.h1`
  font-size: 1rem;
  font-weight: bold;

  @media (max-width: 1024px) {
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }

  @media (max-width: 660px) {
    font-size: 0.7rem;
  }
  @media (max-width: 600px) {
    font-size: 0.6rem;
  }

  @media (max-width: 480px) {
    font-size: 0.5rem;
  }

  @media (max-width: 375px) {
    font-size: 0.4rem;
  }

  @media (max-width: 320px) {
    font-size: 0.4rem;
  }
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  /* column-gap: 2.4rem; */
  align-items: center;
  /* border: 1px solid #333; */

  :last-child {
    border-right: none;
  }
`;

const StyledTableHeader = styled(CommonRow)`
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;

  div {
    display: flex;
    justify-content: center;
    border-right: 1px solid #333;
    border-bottom: 1px solid #333;
  }

  div span {
    padding: 1rem 1rem;
    display: inline;
    text-align: center;
  }

  @media (max-width: 1024px) {
    div span {
      padding: 1rem 2rem;
    }
  }

  @media (max-width: 768px) {
    font-size: 12px;
    div span {
      padding: 1rem 1.8rem;
    }
  }

  @media (max-width: 600px) {
    font-size: 10px;
    div span {
      padding: 0.7rem 1rem;
    }
  }

  @media (max-width: 425px) {
    font-size: 8px;
    div span {
      padding: 0.4rem 0.3rem;
    }
  }

  @media (max-width: 375px) {
    font-size: 8px;
    div span {
      padding: 0.4rem 0.3rem;
    }
  }

  @media (max-width: 320px) {
    font-size: 8px;
    div span {
      padding: 0.4rem 0.3rem;
    }
  }
`;

const StyleTableRow = styled(CommonRow)`
  letter-spacing: 0.4px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #333;
    border-bottom: 1px solid #333;
    height: 100%;
    width: 100%;
  }

  div span {
    padding: 0.7rem 0.7rem;
    text-align: center;
  }

  @media (max-width: 1024px) {
    div span {
      padding: 1rem 2rem;
    }
  }

  @media (max-width: 768px) {
    font-size: 12px;
    div span {
      padding: 1rem 1.8rem;
    }
  }

  @media (max-width: 600px) {
    font-size: 10px;
    div span {
      padding: 0.7rem 1rem;
    }
  }

  @media (max-width: 425px) {
    font-size: 8px;
    div span {
      padding: 0.4rem 0.3rem;
    }
  }

  @media (max-width: 375px) {
    font-size: 8px;
    div span {
      padding: 0.4rem 0.3rem;
    }
  }

  @media (max-width: 320px) {
    font-size: 8px;
    div span {
      padding: 0.4rem 0.3rem;
    }
  }
`;

const StyledTable = styled.div`
  border-top: 1px solid #333;
  border-left: 1px solid #333;
  border-right: 1px solid #333;
  font-size: 16px; /* Default font size */
  width: 100%;

  @media (max-width: 1024px) {
    font-size: 14px; /* Adjust the font size for screens with a width of 1024px or smaller */
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 600px) {
    font-size: 10px;
  }

  @media (max-width: 425px) {
    font-size: 8px;
  }

  @media (max-width: 320px) {
    font-size: 6px;
  }
`;
