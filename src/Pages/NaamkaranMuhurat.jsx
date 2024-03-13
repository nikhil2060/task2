/* eslint-disable react/prop-types */
import styled from "styled-components";
import List from "../Components/List";
import ListItem from "../Components/ListItem";
import Table from "../Components/NaamKaranTable";

import naamkaran from "../Data/NaamkaranLists.json";

function NaamkaranMuhurat() {
  return (
    <>
      <div className="w-full h-full flex justify-center pt-10">
        <StyledHeading>Namkaran Muhurat 2024</StyledHeading>
      </div>

      <div className="w-full h-full flex flex-col gap-10 items-start p-10">
        <StyledContent>
          <p>
            Namkaran Muhurat, a significant ritual in Hindu astrology and
            culture, is the ceremony of naming a newborn. It is a momentous
            event, steeped in tradition and symbolism, celebrated with great joy
            and reverence by families across India. In this article, we will
            explore the importance of Namkaran Muhurat and delve into what it
            signifies in 2024.
          </p>
          <p>
            {`Namkaran Muhurat is derived from two Sanskrit words: "Nam" meaning
            'name' and "Muhurat" signifying 'auspicious time.' Together, it
            translates to 'the auspicious time for naming.' The choice of a
            suitable date and time for this ceremony is believed to influence
            the child's life, character, and destiny. Astrology plays a
            significant role in determining the ideal moment for the Namkaran
            ceremony.`}
          </p>
          <p>
            As we look ahead to Namkaran Muhurat in 2024, its important to note
            that the auspicious dates and times for this ceremony will be
            influenced by the Hindu lunar calendar. Families and astrologers
            will consult this calendar to determine the best times for the
            Namkaran ceremony.
          </p>
          <p>
            Namkaran Muhurat in 2024 is a time-honored tradition that holds
            immense significance in Hindu culture. It is a harmonious blend of
            astrology, tradition, and spirituality. Naming a child during an
            auspicious time is believed to set the course for a prosperous and
            fulfilling life. While the specific dates and times may vary in
            2024, the essence of this ceremony remains unaltered.
          </p>
          <p>
            Incorporating Namkaran Muhurat into your familys life is a beautiful
            way to honor tradition, seek blessings, and celebrate the arrival of
            a new family member. Remember to consult with an astrologer,
            consider family traditions, plan ahead, and involve your loved ones
            to make the ceremony a memorable and cherished occasion. Namkaran
            Muhurat is a celebration of life, love, and tradition that
            transcends time and connects generations in the tapestry of Indian
            culture.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">
            To make the process of finding an auspicious Namkaran Muhurat in
            2024 easier, here are some general guidelines:
          </h2>

          <List>
            {naamkaran.guidelines.map((item, index) => {
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

        <Table month={"January"} />
        <Table month={"February"} />
        <Table month={"March"} />
        <Table month={"April"} />
        <Table month={"May"} />
        <Table month={"June"} />
        <Table month={"july"} />
        <Table month={"August"} />
        <Table month={"September"} />
        <Table month={"October"} />
        <Table month={"November"} />
        <Table month={"December"} />

        <StyledContent>
          <h2 className="font-bold">Significance of Namkaran Ceremony :</h2>
          <p>
            The Namkaran ceremony is a cherished tradition in many cultures,
            particularly in India, and holds great significance. This sacred
            ritual involves naming a newborn baby, usually occurring a few weeks
            after birth. It plays a vital role in the childs life and is
            considered an auspicious event. Here why this ceremony is so
            significant:
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
          <List>
            {naamkaran.Ceremony.map((item, index) => {
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
          <h2 className="font-bold">
            Auspicious Dates, Nakshatras, and Months for Naming Ceremony
          </h2>

          <p>
            Planning a naming ceremony for your child is a joyous occasion. In
            many cultures, choosing an auspicious date, Nakshatra (lunar
            mansion), and month is a significant part of the celebration. This
            guide will help you understand the astrological aspects to consider,
            promoting positivity and harmony in this special event.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Nakshatras and Naming Ceremonies:</h2>

          <p>
            Nakshatras play a crucial role in selecting a name for your child.
            Each Nakshatra has its own unique qualities, and selecting a name
            associated with a specific Nakshatra can bring positive energy to
            your childs life.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Auspicious Nakshatras:</h2>

          <p>
            Certain Nakshatras are considered highly auspicious for naming
            ceremonies, such as Rohini, Swati, Shravan, and Pushya. Choosing
            names associated with these Nakshatras can bring good fortune.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Choosing an Auspicious Date:</h2>

          <p>
            Astrologers recommend selecting a date when the moon is in a
            favorable position for the naming ceremony. This can be determined
            by consulting an astrologer or using astrological tools.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Positive Astrological Practices:</h2>

          <p>
            Embrace the power of positive astrological beliefs to create a
            harmonious environment during the naming ceremony. Invoking the
            blessings of deities associated with auspicious Nakshatras can
            enhance the event.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Consulting an Astrologer:</h2>

          <p>
            To ensure that your childs name is in harmony with the stars,
            consider consulting an experienced astrologer. They can provide
            personalised guidance based on your childs birth details.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Cultural Variations:</h2>

          <p>
            Different cultures have unique naming ceremony customs and
            astrological beliefs. Understanding these traditions can help you
            make informed decisions.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Modern Adaptations:</h2>

          <p>
            In contemporary times, many parents combine traditional astrological
            beliefs with modern practices. This fusion allows for creativity and
            personalization while maintaining respect for astrological
            principles.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Celebrating Positivity:</h2>

          <p>
            Ultimately, the naming ceremony is a celebration of life, love, and
            family. Regardless of the astrological aspects, focus on creating a
            loving and positive atmosphere for your childs special day.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">
            Measures to consider during the Namkaran Ceremony
          </h2>

          <p>
            Namkaran, a significant Hindu naming ceremony, holds a special place
            in Indian culture. It is a beautiful tradition where a newborn baby
            is given a name, marking the beginning of their lifes journey. To
            ensure a harmonious and auspicious beginning, there are several
            measures you should consider during the Namkaran ceremony.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Choosing an Auspicious Date and Time</h2>

          <p>
            Astrology plays a crucial role in determining the ideal date and
            time for the Namkaran ceremony. Consulting with an astrologer can
            help you select a favorable moment that aligns with the babys birth
            chart, ensuring a positive start.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Selecting a Meaningful Name</h2>

          <p>
            The name you choose should have a positive meaning and significance.
            It is believed that a well-thought name can influence a childs life.
            Seek suggestions from elders, consult astrologers, and consider the
            familys traditions when picking a name.
          </p>
        </StyledContent>
        <StyledContent>
          <h2 className="font-bold">Rituals and Mantras</h2>

          <p>
            During the ceremony, performing traditional rituals and chanting
            auspicious mantras can bring blessings and positive energy to the
            child. These rituals are often guided by family priests and
            astrologers.
          </p>
        </StyledContent>
        <StyledContent>
          <h2 className="font-bold">Inviting Loved Ones</h2>

          <p>
            Namkaran is a family celebration. Invite close friends and relatives
            to share in the joyous occasion. Their presence and blessings can
            further enhance the positive vibes surrounding the baby.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Symbolic Offerings</h2>

          <p>
            Offering symbolic items like honey, ghee, and kumkum to the baby
            signifies a sweet and prosperous life ahead. Incorporating these
            measures ensures that the Namkaran ceremony is a beautiful and
            positive start to a childs life. Remember, its a celebration of both
            tradition and the promise of a bright future.
          </p>
        </StyledContent>

        <h3 className="font-bold">
          To Talk to Astrologer:{" "}
          <span className="text-red-500 italic">Visit Here</span>
        </h3>
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

export default NaamkaranMuhurat;
