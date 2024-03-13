/* eslint-disable react/prop-types */
import styled from "styled-components";
import List from "../Components/List";
import ListItem from "../Components/ListItem";
import Table from "../Components/MundanTable";

function MundanMuhurat() {
  return (
    <>
      <div className="w-full h-full flex justify-center pt-10">
        <StyledHeading>Mundan Muhurat 2024</StyledHeading>
      </div>

      <div className="w-full h-full flex flex-col gap-10 items-start p-10">
        <StyledContent>
          <p>
            {`Mundan Muhurat, also known as Mundan Sanskar or Chudakarana, is a sacred Hindu ceremony performed on a
specific date and time, meticulously chosen by astrologers. This age-old ritual marks the first haircut of a child,
symbolising the transition from infancy to early childhood. While the ceremony itself may appear simple, its
significance goes far beyond the mundane act of cutting hair. It is believed to harness the celestial energies, aligning
the child with the cosmic forces and ensuring a life filled with blessings and prosperity.`}
          </p>
          <p>
            {`n this enlightening journey through the world of Mundan Muhurat, we will explore the profound astrological roots
that underpin this ceremony. We'll delve into the significance of timing, the wisdom of ancient astrologers, and the
positive impact it can have on a child's life. Join us as we unravel the cosmic secrets behind Mundan Muhurat and
embrace the ancient wisdom that continues to guide us toward a brighter future. Whether you are a staunch believer
or a curious sceptic, the mystique of Mundan Muhurat is sure to leave you intrigued and enlightened.`}
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Importance of Mundan Sanskar in 2024</h2>
          <p>
            {`Mundan Sanskar, also known as the first haircut ceremony, is a cherished ritual in Hindu culture, and its significance
transcends generations. Rooted in astrology and the alignment of celestial bodies, this age-old practice holds a
profound place in our lives, offering both spiritual and practical insights.`}
          </p>
          <p>
            {`At its core, Mundan Sanskar is a celebration of a child's transition from infancy to early childhood. However, its
deeper essence lies in the belief that the celestial positions at the time of birth play a pivotal role in shaping an
individual's destiny. By conducting this ceremony at a specific auspicious time, parents seek to harmonise their child's
energy with the cosmic forces, ensuring a life filled with prosperity, health, and happiness.`}
          </p>

          {/* LIST */}
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">
            Significance of Shubh Muhurat for Mundan in 2024
          </h2>
          <p>
            {`In Hindu tradition, a child's Mundan ceremony, also known as 'Chudakarana' or 'Tonsure ',holds immense
significance. It's the ritual of shaving a child's head for the first time. Choosing a Shubh Muhurat for this event is
essential as it aligns with astrological principles. Astrology plays a pivotal role in guiding us towards favourable cosmic
energies. By selecting an auspicious time, we believe it can bring blessings, positivity, and protection to the child.`}
          </p>
          <p>
            {`In 2024, ensuring a Shubh Muhurat for Mundan is a way to harmonise the child's spiritual journey with the celestial
forces, fostering a sense of well-being and prosperity. It's a beautiful tradition that celebrates a child's growth and
purity while seeking cosmic blessings for a bright future.`}
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Mundan Sanskar In 2024 Muhurat</h2>
          <p>
            {`Mundan Sanskar, a sacred Hindu ritual, celebrates a child's first haircut. It signifies the shedding of impurities from
birth and promotes spiritual growth. In 2024, choosing the right Muhurat (auspicious time) for this ceremony is
essential, as it's believed to enhance the positive energy surrounding the child.`}
          </p>
          <p>
            {`During Mundan, a priest conducts a short ceremony, followed by the hair cutting. The hair is usually offered to a
sacred river. Astrologers are often consulted to determine the most auspicious Muhurat, aligning with the child's
birth chart for maximum blessings. Find out muhurat times according to months in given tables.`}
          </p>
        </StyledContent>

        <Table month={"February"} />
        <Table month={"March"} />
        <Table month={"April"} />
        <Table month={"May"} />
        <Table month={"June"} />
        <Table month={"July"} />

        <StyledContent>
          <h2 className="font-bold">
            Auspicious timings of Mundan Muhurat 2024
          </h2>
          <p>
            Mundan Sanskar, a sacred Hindu ritual, involves the first head
            shaving of a child, symbolising purity and new beginnings. Choosing
            an auspicious Mundan Muhurat is crucial, considering Tithi (lunar
            day), Nakshatra (constellation), and month.
          </p>

          <ul className="pl-10 list-disc lg:text-[1rem] md:text-[0.8rem] sm:text-[0.8rem] flex flex-col gap-5">
            <li>
              <span className="font-bold">Auspicious months </span>
              for Mundan Samskara typically include Vaishakh, Jyeshta, and
              Magha, aligning with favourable planetary positions. These months
              promote growth, health, and blessings.
            </li>
            <li>
              Selecting <span className="font-bold">auspicious dates </span>
              (Tithis) for Mundan Sanskar involves avoiding inauspicious ones
              like Ekadashi and Chaturthi. Pratipada (first day) and Dwitiya
              (second day) are often preferred.
            </li>
            <li>
              Optimal <span className="font-bold">days for Mundan </span>
              Sanskar include Monday, Wednesday, Thursday, and Friday, while
              Saturday and Tuesday are usually avoided.
            </li>
            <li>
              <span className="font-bold">Auspicious Nakshatras </span>
              like Rohini, Mrigashira, Chitra, and Swati are preferred for
              Mundan, ensuring a harmonious and prosperous life ahead.
            </li>
          </ul>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Benefits of Mundan ceremony in 2024</h2>
          <p>
            A Mundan ceremony, also known as a head shaving ceremony, holds
            immense significance in various cultures, especially in Hinduism.
            This ritual involves shaving a childs head, typically within the
            first few years of life. It offers several benefits:
          </p>

          <ul className="pl-10 list-disc lg:text-[1rem] md:text-[0.8rem] sm:text-[0.8rem] flex flex-col gap-5">
            <li>
              <span className="font-bold">Spiritual Cleansing: </span>
              Mundan is believed to symbolise the shedding of negative energies
              and impurities from birth, ensuring a pure start to life.
            </li>
            <li>
              <span className="font-bold">Hair Growth and Texture: </span>
              Its believed that shaving the head can lead to thicker, healthier
              hair growth, making the childs hair more luxurious.
            </li>
            <li>
              <span className="font-bold">Cooling Effect: </span>
              Shaved heads are known to help infants stay cooler in hot
              climates.
            </li>
          </ul>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">
            Do & Don’ts to remember in Mundan ceremony 2024
          </h2>
          <p>
            {`A Mundan ceremony, also known as Chudakarana, is a significant rite
            of passage in Hindu culture. In 2024, as you prepare for this
            auspicious event, here are some essential do's and don'ts to ensure
            a memorable and harmonious celebration.`}
          </p>

          <h2 className="font-bold">{`Do's:`}</h2>

          <ul className="pl-10 list-disc lg:text-[1rem] md:text-[0.8rem] sm:text-[0.8rem] flex flex-col gap-5">
            <li>
              <span className="font-bold">Choose an Auspicious Date: </span>
              Consult with an astrologer to select a favorable date based on
              your childs birth chart. Astrology plays a vital role in ensuring
              positive energy.
            </li>
            <li>
              <span className="font-bold">Involve a Priest: </span>
              eek the guidance of a knowledgeable priest who can perform the
              Mundan ceremony according to Vedic rituals and mantras.
            </li>
            <li>
              <span className="font-bold">Purify the Home: </span>
              Cleanse your home and the ceremony area to create a sacred
              atmosphere. Use Ganga Jal or holy water to purify the
              surroundings.
            </li>
            <li>
              <span className="font-bold">Gentle Handling: </span>
              Handle your child with care during the Mundan process.
            </li>
            <li>
              <span className="font-bold">Donate Hair: </span>
              After the Mundan, consider donating the hair to a temple or a
              charitable cause. This act is believed to symbolize purity and
              selflessness.
            </li>
          </ul>

          <h2 className="font-bold">{`Dont's:`}</h2>

          <ul className="pl-10 list-disc lg:text-[1rem] md:text-[0.8rem] sm:text-[0.8rem] flex flex-col gap-5">
            <li>
              <span className="font-bold">Avoid Inauspicious Days: </span>
              Refrain from scheduling the ceremony on inauspicious dates or
              during periods of solar or lunar eclipses, as they may carry
              negative energy.
            </li>
            <li>
              <span className="font-bold">Rushing the Ceremony: </span>
              Dont rush through the ceremony. Take your time to perform each
              ritual with devotion and attention to detail.
            </li>
            <li>
              <span className="font-bold">Avoid Arguments: </span>
              Maintain a harmonious atmosphere during the event. Avoid arguments
              or conflicts, as they can disrupt the positive energy flow.
            </li>
            <li>
              <span className="font-bold">Sharp Objects: </span>
              Avoid using sharp or rusty instruments for the Mundan. Use clean
              and sterilized tools to prevent any harm or infections.
            </li>
            <li>
              <span className="font-bold">Excessive Styling: </span>
              After the Mundan, resist the urge to style your childs hair
              immediately. Allow their hair to grow naturally for some time.
            </li>
          </ul>
        </StyledContent>

        <h3 className="font-bold lg:text-[1rem] md:text-[0.8rem] sm:text-[0.5rem]">
          To Know More About Shubh Muhurat for Mundan in 2024,{" "}
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

export default MundanMuhurat;
