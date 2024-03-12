/* eslint-disable react/prop-types */
import styled from "styled-components";
import List from "../Components/List";
import ListItem from "../Components/ListItem";

import annanprashan from "../Data/Annanprashan.json";

const ceremonyList = annanprashan.ceremonyData;

console.log(ceremonyList);

function AnnanprashanMuhurat() {
  return (
    <>
      <div className="w-full h-full flex justify-center pt-10">
        <StyledHeading>Annanprashan Muhurat 2024</StyledHeading>
      </div>

      <div className="w-full h-full flex flex-col gap-10 items-start p-10">
        <StyledContent>
          <p>
            Are you ready for a heartwarming journey of tradition and blessings
            in 2024? Well, get ready to mark your calendars because Annanprashan
            Muhurat 2024 is just around the corner! This auspicious event, also
            known as the First Rice Feeding Ceremony or Annaprashan Sanskar,
            holds a special place in the hearts of many families. It s a
            beautiful occasion where your little one takes their first step into
            the world of solid food, and you cant help but celebrate with all
            your loved ones.
          </p>
          <p>
            In 2024, Annaprashan Muhurat promises to add an extra sprinkle of
            joy to this milestone. It s all about choosing the perfect date and
            time, aligning with the stars and cosmic energies to ensure a
            harmonious beginning for your precious child. So, if youre curious
            to know when this celestial window of opportunity will open in 2024,
            stay with us as we unveil the most auspicious Annaprashan Muhurat
            dates for the year
          </p>
          <p>
            Get ready for an unforgettable and spiritually enriching experience
            as we guide you through the best Annaprashan Muhurat 2024 has to
            offer. Its time to embrace tradition, create cherished memories, and
            watch your little one take their first delightful bites of solid
            food. Lets make this moment not just special but truly divine!
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">What is Annaprashan Muhurat?</h2>
          <p>
            Annaprashan Muhurat, also known as Annaprashan Sanskar or the First
            Rice Feeding Ceremony, is a significant Hindu ritual celebrated in
            India and among Hindu communities worldwide. This auspicious
            ceremony marks a crucial milestone in a babys life when they
            transition from a diet of only milk to solid food. It is typically
            conducted during the babys sixth month, although the exact timing
            may vary based on family traditions and regional customs.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Significance:</h2>
          <p>
            Annaprashan holds deep cultural and spiritual significance. It is
            believed to introduce the infant to the world of food and nutrition,
            symbolizing their growth and development. The term Annaprashan
            itself translates to feeding rice. Rice is often chosen as the first
            solid food due to its significance in many Indian cultures as a
            staple and a symbol of sustenance.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">The Ceremony:</h2>
          <List>
            {ceremonyList.map((item, index) => {
              return (
                <ListItem
                  heading={item.heading}
                  content={item.content}
                  key={index}
                />
              );
            })}
          </List>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Cultural Variations</h2>
          <p>
            While the core elements of Annaprashan are consistent, there may be
            variations in customs, rituals, and the types of food offered based
            on regional and cultural diversity within India. Some families
            choose to celebrate the occasion with additional festivities, such
            as a family meal or a gathering of friends and relatives.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Annaprashan Shubh Muhurat in 2024</h2>
          <p>
            The Annaprasana Muhurat, often referred to as the rice feeding
            ritual, is typically conducted when the baby is between five and
            twelve months old. This ceremony is performed once the child reaches
            the stage of being able to digest rice and grains. If the child has
            not yet developed the ability to digest such foods, it is advisable
            to postpone the ceremony to a later date when they are ready to
            partake in this important milestone.
          </p>
        </StyledContent>
      </div>
    </>
  );
}

const StyledHeading = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;

  @media (max-width: 1024px) {
    font-size: 2.4rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 660px) {
    font-size: 1.9rem;
  }
  @media (max-width: 600px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }

  @media (max-width: 375px) {
    font-size: 1.2rem;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 1.1rem;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 660px) {
    font-size: 12px;
  }
  @media (max-width: 600px) {
    font-size: 11px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
  @media (max-width: 425px) {
    font-size: 9px;
  }

  @media (max-width: 375px) {
    font-size: 9px;
  }

  @media (max-width: 320px) {
    font-size: 9px;
  }
`;

export default AnnanprashanMuhurat;
