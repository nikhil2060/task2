/* eslint-disable react/prop-types */
import styled from "styled-components";
import List from "../Components/List";
import ListItem from "../Components/ListItem";
import Table from "../Components/GrahPraveshTable";

import bhoomiData from "../Data/BhoomiList.json";

function GrihaPravesh() {
  return (
    <>
      <div className="w-full h-full flex justify-center pt-10">
        <StyledHeading>Griha Pravesh Muhurat 2024</StyledHeading>
      </div>

      <div className="w-full h-full flex flex-col gap-10 items-start p-10">
        <StyledContent>
          <p>
            {`The Griha Pravesh Muhurat is determined by astrological calculations, taking into consideration the positions of
celestial bodies and planetary transits. Astrologers believe that the alignment of these cosmic forces can impact the
energy and vibrations of the new home.`}
          </p>
          <p>
            {`Key factors to consider while choosing a Griha Pravesh Muhurat include the date, time, and planetary positions. An
astrologer can help identify the most favourable time for the ceremony, ensuring that it aligns with the family
members' birth charts.`}
          </p>
          <p>
            {`Performing the Griha Pravesh ceremony during an auspicious Muhurat is believed to bring prosperity, happiness, and
positive energy to the household. It's also seen as a way to seek blessings from the deities for a smooth transition
into the new home.`}
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Importance of Griha Pravesh in Hinduism</h2>
          <p>
            {`Griha Pravesh, a significant ritual in Hinduism, marks the auspicious entry of a family into their new home. Rooted in
ancient Vedic traditions, this ceremony holds immense importance in Hindu culture and is celebrated with great
enthusiasm. In this article, we will delve into the profound significance of Griha Pravesh, shedding light on its
spiritual, cultural, and astrological aspects.`}
          </p>

          {/* LIST */}
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">
            When should you perform Griha Pravesh in 2024?
          </h2>
          <p>
            {`Performing Griha Pravesh in 2024 should be done after considering several factors, such as the auspicious
astrological timings, the specific date and time, and the family's astrological charts. Astrology plays a significant role
in determining the most favourable moments for this important ceremony. Consulting a qualified astrologer is
advisable to identify auspicious planetary alignments and ensure a harmonious transition into your new home.
Remember, Griha Pravesh signifies a fresh start and is believed to bring blessings and positive energy, so adhering to
astrological guidance can enhance its significance and ensure a prosperous beginning for your family.`}
          </p>
        </StyledContent>

        <Table month={"January"} />
        <Table month={"February"} />
        <Table month={"March"} />
        <Table month={"April"} />
        <Table month={"November"} />
        <Table month={"December"} />

        <StyledContent>
          <h2 className="font-bold">Types of Griha Pravesh as per Vastu</h2>
          <p>
            Griha Pravesh, a significant ritual in Vastu Shastra, is performed
            when moving into a new home to invite positive energies and
            blessings. There are three main types of Griha Pravesh in Vastu:
          </p>

          <ul className="pl-10 list-disc lg:text-[1rem] md:text-[0.8rem] sm:text-[0.8rem] flex flex-col gap-5">
            <li>
              <span className="font-bold">Apoorva Griha Pravesh: </span>
              This is performed when entering a newly constructed house or one
              that has never been occupied. It involves elaborate rituals and
              prayers to purify the space and ensure harmony within.
            </li>
            <li>
              <span className="font-bold">Sapoorva Griha Pravesh: </span>
              When returning to a house after a renovation or an extended
              absence, this type is conducted. It seeks to re-energize the home
              and align it with the residents well-being.
            </li>
            <li>
              <span className="font-bold">Dwandwah Griha Pravesh: </span>
              If you need to temporarily vacate your home due to unforeseen
              circumstances, like a natural disaster, Dwandwah Griha Pravesh is
              performed upon your return. It aims to dispel any negative
              energies that may have accumulated during your absence.
            </li>
          </ul>
        </StyledContent>

        <h3 className="font-bold">
          Want to know more about the auspicious dates,{" "}
          <span className="text-red-500 italic">chat with our astrologer</span>
        </h3>

        <StyledContent>
          <h2 className="font-bold">
            Most Auspicious Timings in 2024 Griha Pravesh Muhurat
          </h2>

          <p>
            In 2024, finding the perfect Griha Pravesh Muhurat is crucial for a
            harmonious home entry. Astrology offers valuable insights into
            auspicious moments to ensure a prosperous beginning. These
            auspicious timings are determined by aligning celestial energies,
            which can positively impact your new homes atmosphere and the
            well-being of your family.
          </p>
          <p>
            Choosing the right Griha Pravesh Muhurat involves considering
            various astrological factors, including planetary positions,
            Nakshatras (constellations), and favourable astrological
            combinations. Astrologers analyse these factors to identify periods
            of alignment and harmony, which are ideal for starting a new chapter
            in your life.
          </p>
          <p>
            While specific dates for 2024 cannot be mentioned, its essential to
            consult a knowledgeable astrologer who can provide you with a
            personalised Griha Pravesh Muhurat based on your birth charts and
            other astrological considerations. This ensures that the energies
            are uniquely suited to your familys well-being and prosperity.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">
            Inauspicious timings for Griha Pravesh in 2024
          </h2>

          <p>
            {`Choosing an auspicious Lagna (ascendant) for Bhumi Pujan Muhurat in
            2024 is of paramount importance. The Lagna, or the rising sign at
            the time of the ceremony, sets the tone for the event. Ideally, a
            Lagna associated with stability, growth, and prosperity is
            preferred. In 2024, particularly favourable Lagnas could include
            Taurus (Vrishabha), Virgo (Kanya), or Capricorn (Makar). These Earth
            signs symbolise grounding energy, making them suitable for the
            foundation-laying ceremony. However, it's essential to consult a
            knowledgeable astrologer for precise calculations, as factors like
            planetary positions and individual horoscopes play a vital role in
            selecting the most auspicious Lagna for Bhumi Pujan Muhurat.`}
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Days to avoid Bhumi pujan Muhurat</h2>

          <p>
            {`In astrology, choosing an auspicious time for Griha Pravesh, or housewarming, is crucial for ensuring positive energy
and harmony in your new home. In 2024, it's essential to avoid inauspicious timings. These times are typically
influenced by unfavourable planetary positions and can lead to challenges or obstacles in your new journey.`}
          </p>
          <p>
            {`During your Griha Pravesh ceremony, it's advisable to consult with an experienced astrologer who can provide
personalised guidance based on your birth charts. They will consider the positions of planets, lunar phases, and other
celestial factors to determine the most favourable moment for your housewarming.`}
          </p>
          <p>
            {`Avoiding inauspicious timings helps ward off negative energy and promotes a smooth transition into your new home.
It's a step toward creating a positive and harmonious living environment for you and your family. Remember that
astrology can be a valuable tool for enhancing the overall well-being of your household, promoting positivity, and
ensuring a prosperous future.`}
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">
            Griha Pravesh 2024: Essential points to remember
          </h2>

          <p>
            Griha Pravesh is a significant Hindu ritual that marks the entry of
            a family into their new home. To ensure a harmonious beginning, here
            are essential points to remember in 2023:
          </p>

          <ul className="pl-10 list-disc lg:text-[1rem] md:text-[0.8rem] sm:text-[0.8rem] flex flex-col gap-5">
            <li>
              Auspicious Timing: Consult a priest or astrologer for a favourable
              date and time-based on your horoscope and the Vastu Shastra
              principles.
            </li>
            <li>
              Ritual Preparation: Cleanse the house thoroughly, remove negative
              energy, and decorate it with flowers and rangoli.
            </li>
            <li>
              Pooja and Havan: Perform a Griha Pravesh puja and havan for
              blessings and purification.
            </li>
            <li>
              Offerings: Present offerings to deities and seek their divine
              protection.
            </li>
            <li>
              Entry Direction: Enter the house with your right foot forward.
            </li>
            <li>
              Traditional Customs: Follow customs like breaking a coconut and
              sprinkling holy water.
            </li>
            <li>
              Homely Comfort: Ensure necessities are arranged for immediate
              comfort.
            </li>
          </ul>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">
            Benefits of performing Griha Pravesh in 2024
          </h2>

          <p>
            Performing the Griha Pravesh ceremony in 2024 holds numerous
            benefits for homeowners. This traditional Hindu ritual brings
            positivity, harmony, and prosperity to a new home. It marks the
            beginning of a new chapter in life, fostering a sense of belonging
            and family unity. Astrologically, its believed to align the house
            with favourable cosmic energies, ensuring happiness and well-being
            for the occupants.
          </p>

          <p>
            Additionally, Griha Pravesh includes purification rituals, removing
            any negative energies from the premises. This enhances the overall
            ambiance and promotes mental peace. SEO-friendly content ensures
            that individuals seeking information on Griha Pravesh ceremonies in
            2023 can easily find this valuable information, helping them plan a
            joyful and auspicious housewarming event.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Significance of Vastu Shanti for Home</h2>

          <p>
            Vastu Shanti holds immense significance for homes, promoting
            harmony, positivity, and well-being. This ancient Indian
            architectural science aligns the homes design with natural forces,
            enhancing the flow of positive energy.
          </p>

          <ul className="pl-10 list-disc lg:text-[1rem] md:text-[0.8rem] sm:text-[0.8rem] flex flex-col gap-5">
            <li>
              <span className="font-bold">Positive Vibes: </span>
              Vastu Shanti ensures a positive atmosphere by balancing the five
              elements - earth, water, fire, air, and space, fostering peace and
              happiness.
            </li>
            <li>
              <span className="font-bold">Health and Well-being: </span>
              Proper placement of rooms and furniture can enhance physical and
              mental health, reducing stress and promoting overall well-being.
            </li>
            <li>
              <span className="font-bold">Financial Prosperity: </span>
              It can attract wealth and financial stability by aligning the home
              with prosperity- enhancing energies.
            </li>
            <li>
              <span className="font-bold">Offerings: </span>
              Present offerings to deities and seek their divine protection.
            </li>
            <li>
              <span className="font-bold">Entry Direction: </span>
              Enter the house with your right foot forward.
            </li>
            <li>
              <span className="font-bold">Traditional Customs: </span>
              Follow customs like breaking a coconut and sprinkling holy water.
            </li>
            <li>
              <span className="font-bold">Homely Comfort: </span>
              Ensure necessities are arranged for immediate comfort.
            </li>
          </ul>
        </StyledContent>

        <h3 className="font-bold">
          To Know More About Shubh Muhurat for Marriage in 2024,{" "}
          <span className="text-red-500 italic">chat with our astrologer</span>
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

export default GrihaPravesh;
