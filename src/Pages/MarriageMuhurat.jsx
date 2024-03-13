/* eslint-disable react/prop-types */
import styled from "styled-components";
import List from "../Components/List";
import ListItem from "../Components/ListItem";
import Table from "../Components/MarriageTable";

import bikeData from "../Data/BikeList.json";

function MarriageMuhurat() {
  return (
    <>
      <div className="w-full h-full flex justify-center pt-10">
        <StyledHeading>Car/Bike Muhurat 2024</StyledHeading>
      </div>

      <div className="w-full h-full flex flex-col gap-10 items-start p-10">
        <StyledContent>
          <p>
            {`In the rich tapestry of human traditions and celebrations, marriage
            stands as a sacred bond that unites hearts, families, and cultures.
            The significance of this union is not just emotional but deeply
            rooted in the cultural and astrological fabric of societies across
            the world. One essential element that plays a pivotal role in this
            grand ceremony is the "Marriage Muhurat" an auspicious time and date
            selected for the wedding. As we step into the threshold of 2024,
            couples and families are eagerly seeking the perfect celestial
            alignment to embark on their matrimonial journey.`}
          </p>
          <p>
            Marriage muhurats hold immense importance in various cultures, and
            2024 promises a plethora of auspicious dates and times that align
            with astrological and planetary configurations believed to bring
            harmony, love, and prosperity to the newlyweds. These muhurats are
            meticulously calculated by astrologers and pundits, taking into
            account celestial events like planetary positions, lunar phases, and
            other astrological factors.
          </p>
          <p>
            {`In this blog series, we embark on a celestial journey through the
            year 2024, exploring the auspicious marriage muhurats that promise
            to bless couples with a harmonious and blissful married life. Join
            us as we unravel the cosmic secrets behind these auspicious dates
            and dive deep into the cultural and spiritual significance that
            surrounds them. Whether you're planning your wedding or simply
            curious about the magic of marriage muhurats, this series will guide
            you through the celestial calendar of 2024, helping you make your
            special day even more extraordinary.`}
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">
            Why to have a marriage in Shubh Muhurat 2024?
          </h2>

          <p>
            Having a marriage in a Shubh Muhurat, or auspicious time, in 2024
            carries deep cultural and spiritual significance in many societies,
            particularly in India. This ancient practice is rooted in the belief
            that aligning significant life events, such as weddings, with
            favourable cosmic energies can bring blessings, harmony, and
            prosperity to the couples life journey.
          </p>
          <p>
            Firstly, a Shubh Muhurat in 2024 ensures a positive celestial
            alignment, which is believed to bring good fortune and minimise
            obstacles. It is an act of faith that signifies the couples
            commitment to starting their married life on an auspicious note.
            This can help in building a strong foundation for their
            relationship.
          </p>
          <p>
            Furthermore, a Shubh Muhurat is seen as a way to honour and respect
            tradition and culture. It connects the couple to their heritage and
            brings families together in celebration. The blessings and
            well-wishes of loved ones during such an auspicious time hold
            special significance, strengthening the bonds between families.In
            addition, a Shubh Muhurat in 2024 provides a memorable and
            spiritually enriching experience. It can infuse the wedding ceremony
            with a sense of sacredness and divine presence, making it a
            cherished memory for years to come.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">
            Marriage Muhurat 2023: Date, Time & Nakshatra
          </h2>

          <p>
            The Marriage Muhurat in 2024 is a highly anticipated event for
            couples planning to tie the knot. This auspicious occasion revolves
            around finding the perfect date, time, and nakshatra (constellation)
            alignment for a harmonious and blessed wedding ceremony. In this
            guide, we will explore the auspicious dates and celestial factors
            that play a pivotal role in ensuring a prosperous and joyful marital
            journey in the coming year.
          </p>
        </StyledContent>

        <Table month={"January"} />
        <Table month={"February"} />
        <Table month={"March"} />
        <Table month={"April"} />
        <Table month={"July"} />
        <Table month={"November"} />
        <Table month={"December"} />

        <h3 className="font-bold">
          If you are worried about your marriage{" "}
          <span className="text-red-500 italic">Talk To Astrologer </span>now
        </h3>

        <StyledContent>
          <h2 className="font-bold">
            Why should buy car/ bike on shubh muhurat:
          </h2>
          <p>
            Purchasing a car or bike during a Shubh Muhurat holds immense
            significance in many cultures, especially in India. This auspicious
            timing aligns with astrological and Vedic beliefs, and here are
            compelling reasons why its considered favorable:
          </p>
          <List>
            {bikeData.shubhMuhurat.map((item, index) => {
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
            Auspicious times to notice in Vivah Shubh Muhurat 2024
          </h2>

          <p>
            In Hindu culture, the choice of an auspicious time, known as Vivah
            Shubh Muhurat, for a wedding is of paramount importance, as it is
            believed to influence the harmony and prosperity of the marital
            union. As we delve into the auspicious times for weddings in 2024,
            we encounter a tapestry of elements that contribute to this sacred
            moment.
          </p>
          <p>
            Karana, the half of a lunar day, plays a pivotal role. Kinstughan,
            Baw, Balav, Kaulav, Taitil, Gharo, and Vanij Karan are considered
            propitious for marriages, ensuring a harmonious beginning. Muhurat,
            the most auspicious time for a wedding, features Abhijeet and
            Godhuli Vela as ideal moments to tie the knot, ensuring blessings
            for a lifelong journey together. The date holds significance as
            well. Dwitiya, Tritiya, Panchami, Saptami, Ekadashi Tithi, and
            Trayodashi Tithi are deemed auspicious for weddings, promising a
            prosperous and joyful marital life.
          </p>
          <p>
            Nakshatra, the lunar constellations, are crucial in choosing a date.
            Rohini, Mrigashira, Magha, Uttara Falguni, Hasta, Swati, Anuradha,
            Mool, Uttarashada, Uttara Bhadrapada, and Revati Nakshatras are
            considered favourable for weddings. Selecting the right day is vital
            too. Monday, Wednesday, Thursday, and Friday are auspicious wedding
            days, while Tuesday is best avoided for this sacred occasion.
          </p>

          <p>
            Yoga, the planetary combinations, also plays a significant role.
            Preeti Yoga, Saubhagya Yoga, and Harshana Yoga are believed to bring
            marital bliss and prosperity. In 2024, couples seeking a harmonious
            and prosperous marriage should consult these auspicious factors to
            ensure a joyful and blessed beginning to their lifelong journey
            together.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">
            Inauspicious times as per Marriage Muhurat 2024
          </h2>

          <p>
            The year 2024 presents a challenging landscape for those seeking
            auspicious times for weddings, as per the Marriage Muhurat, an
            important astrological consideration in Hindu culture. Inauspicious
            times may pose significant concerns for couples planning to tie the
            knot during this period.
          </p>
          <p>
            The Hindu calendar is deeply rooted in astrology and tradition, with
            specific dates and times considered favourable or unfavourable for
            marriage ceremonies. In 2024, navigating these auspicious windows
            might prove to be a complex task due to celestial alignments and
            astrological factors.
          </p>
          <p>
            Astrologers typically consider factors like planetary positions,
            lunar phases, and the alignment of stars to determine the most
            propitious times for weddings. When inauspicious times prevail,
            couples may choose to delay their nuptials or seek remedies to
            mitigate unfavourable influences.
          </p>

          <p>
            While the year 2024 may pose challenges in finding ideal Marriage
            Muhurat, its essential to remember that love and commitment can
            transcend astrological considerations. Couples can choose to focus
            on building a strong foundation for their marriage, irrespective of
            the timing, and rely on their bond and support from loved ones to
            navigate through any challenges that may arise.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">
            Significance Of Shubh marriage Muhurat 2024
          </h2>

          <p>
            The significance of a Shubh marriage Muhurat in 2023 holds immense
            importance in Indian culture and traditions. A Muhurat is an
            auspicious and carefully chosen time frame for conducting various
            ceremonies, with weddings being one of the most prominent. The
            selection of a favourable Muhurat is deeply rooted in Vedic
            astrology and is believed to influence the couples future and the
            overall success of the marriage.
          </p>
          <p>
            In 2023, the significance of a Shubh marriage Muhurat is heightened
            due to the alignment of planetary positions. Astrologers
            meticulously calculate these auspicious timings based on the
            positions of celestial bodies, including stars and planets, to
            ensure a harmonious and prosperous life for the newlyweds.
          </p>
          <p>
            A Shubh marriage to Muhurat in 2023 not only symbolises the union of
            two individuals but also reflects the alignment of cosmic energies
            in their favour. It is believed to enhance marital bliss, longevity,
            and prosperity while minimising potential conflicts. Families invest
            significant time and resources in consulting astrologers to identify
            the most propitious Muhurat, as it is seen as a sacred and
            irreplaceable moment in the couples life journey.
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

export default MarriageMuhurat;
