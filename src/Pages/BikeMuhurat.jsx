/* eslint-disable react/prop-types */
import styled from "styled-components";
import List from "../Components/List";
import ListItem from "../Components/ListItem";
import Table from "../Components/BikeTable";

import bikeData from "../Data/BikeList.json";

function BikeMuhurat() {
  return (
    <>
      <div className="w-full h-full flex justify-center pt-10">
        <StyledHeading>Car/Bike Muhurat 2024</StyledHeading>
      </div>

      <div className="w-full h-full flex flex-col gap-10 items-start p-10">
        <StyledContent>
          <p>
            In a world where transportation has become an integral part of our
            daily lives, the significance of choosing the right moment to
            acquire a vehicle cannot be underestimated. For those eagerly
            awaiting the purchase of a car or a bike, the concept of a Muhurat
            holds immense importance. In 2024, this age-old tradition takes
            centre stage, as enthusiasts and prospective buyers gear up to
            embrace their dream rides under the most auspicious celestial
            alignments.
          </p>
          <p>
            The Car Bike Muhurat 2024 is a topic that resonates with individuals
            across cultures and backgrounds, highlighting the universal desire
            for safe and prosperous journeys. Whether you are a seasoned
            automobile aficionado or a first- time buyer, understanding the
            auspicious moments in the coming year can play a pivotal role in
            your decision-making process.
          </p>
          <p>
            In this blog, we embark on a fascinating journey through time and
            tradition, exploring the significance of Muhurat in the context of
            automobile acquisition. We will delve into the astrological and
            cultural aspects that make certain days and times more favourable
            for purchasing a car or bike. By the end of this blog, you will be
            well-equipped with the knowledge to make a decision that not only
            aligns with your desires but also ensures a harmonious and
            prosperous future on the road.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Muhurat 2024</h2>

          <p>
            Muhurat is a significant aspect of Indian astrology and culture,
            focusing on selecting auspicious timings for various activities each
            month. This ancient practice, deeply rooted in tradition, plays a
            vital role in ensuring success and positive outcomes in endeavours
            such as weddings, ceremonies, and business ventures.
          </p>
        </StyledContent>

        <Table month={"January"} />
        <Table month={"February"} />
        <Table month={"March"} />
        <Table month={"April"} />
        <Table month={"May"} />
        <Table month={"June"} />
        <Table month={"July"} />
        <Table month={"August"} />
        <Table month={"September"} />
        <Table month={"October"} />
        <Table month={"November"} />
        <Table month={"December"} />

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
          <h2 className="font-bold">Lucky colour as per Each zodiac sign :</h2>
          <p>
            Choosing the right colour for your car or bike can be a fun and
            personal decision, and for many, its also a matter of superstition
            or astrology. Each zodiac sign is associated with specific lucky
            colours that are believed to bring good fortune and positive energy.
            Heres a guide to help you pick the perfect colour for your vehicle
            based on your zodiac sign:
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Aries</h2>
          <h2 className="font-bold">
            Lucky Colour: <span className="font-regular">Red</span>
          </h2>
          <p>
            Aries individuals are fiery and energetic, and red reflects their
            bold and adventurous nature. A red car or bike will match their
            vibrant personality.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Taurus</h2>
          <h2 className="font-bold">
            Lucky Colour: <span className="font-regular">Green</span>
          </h2>
          <p>
            Taurus people find comfort in nature, and green symbolises growth
            and stability. A green vehicle complements their earthy and grounded
            character.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Gemini</h2>
          <h2 className="font-bold">
            Lucky Colour: <span className="font-regular">Yellow</span>
          </h2>
          <p>
            Yellow represents communication and intellect, perfect for the
            expressive and sociable Geminis who enjoy connecting with others.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Leo</h2>
          <h2 className="font-bold">
            Lucky Colour: <span className="font-regular">Navy Blue</span>
          </h2>
          <p>
            Virgos are always known for their practicality. Navy blue reflects
            their organised and analytical mindset.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Libra</h2>
          <h2 className="font-bold">
            Lucky Colour: <span className="font-regular">Pink</span>
          </h2>
          <p>
            Libras appreciate harmony and love. Pink, a colour of love and
            peace, resonates with their desire for balance and aesthetics.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Scorpio</h2>
          <h2 className="font-bold">
            Lucky Colour: <span className="font-regular">Black</span>
          </h2>
          <p>
            Scorpios are mysterious and intense. Black, representing power and
            mystery, suits their enigmatic nature.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Sagittarius</h2>
          <h2 className="font-bold">
            Lucky Colour: <span className="font-regular">Purple</span>
          </h2>
          <p>
            Sagittarians are adventurous and philosophical. Purple, a colour of
            spirituality, aligns with their quest for knowledge and exploration.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Capricorn</h2>
          <h2 className="font-bold">
            Lucky Colour: <span className="font-regular">Brown</span>
          </h2>
          <p>
            Capricorns are practical and reliable. Brown, symbolising stability
            and security, matches their grounded character.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Aquarius</h2>
          <h2 className="font-bold">
            Lucky Colour: <span className="font-regular">Electric Blue</span>
          </h2>
          <p>
            Leos exude confidence and radiance. Gold, a symbol of luxury and
            success, complements their regal disposition.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Pisces</h2>
          <h2 className="font-bold">
            Lucky Colour: <span className="font-regular">Sea Green</span>
          </h2>
          <p>
            Pisceans are empathetic and artistic. Sea green, reminiscent of the
            ocean, resonates with their dreamy and compassionate nature.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">
            Which days are considered good for vehicle purchase ?
          </h2>

          <p>
            Choosing the right day to purchase a vehicle is a practice deeply
            rooted in various cultures and belief systems worldwide. While
            theres no scientific evidence to prove the auspiciousness of a
            particular day, many individuals still follow these traditions for
            added peace of mind. In Hinduism, for instance, Tuesdays are often
            considered favourable for vehicle purchases, as it is dedicated to
            Lord Hanuman, the deity associated with strength and protection.
            Thursdays are also considered auspicious, associated with Lord
            Vishnu, who is believed to bless devotees with prosperity and
            safety.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">
            Which Nakshatra is considered good for vehicle purchase
          </h2>

          <p>
            The selection of an auspicious Nakshatra for a vehicle purchase is a
            common practice in Vedic astrology, as it is believed to bring
            prosperity, safety, and overall well-being to the owner. Among the
            27 Nakshatras, certain ones are considered particularly favourable
            for this significant purchase.
          </p>
          <p>
            One of the most auspicious Nakshatras for buying a vehicle is
            Pushya. This Nakshatra is associated with nourishment, growth, and
            prosperity. It is believed to enhance the longevity and performance
            of the vehicle while ensuring the safety of the owner and
            passengers. Pushya Nakshatra is also considered ideal for initiating
            new ventures, making it an excellent choice for embarking on a
            journey with a new vehicle.
          </p>
          <p>
            {`Another Nakshatra that is considered favourable for vehicle purchase
            is "Rohini" Rohini Nakshatra is associated with creativity,
            abundance, and material wealth. Buying a vehicle under the influence
            of Rohini Nakshatra is believed to bring comfort and luxury to the
            owner's life.`}
          </p>

          <p>
            {`It's essential to consult with a Vedic astrologer to determine the most auspicious date and time within these
Nakshatras for your vehicle purchase. They can consider your individual birth chart and other astrological factors to
provide personalised guidance.`}
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">
            Is it advisable to buy a vehicle on Saturday?
          </h2>

          <p>
            Buying a vehicle on a Saturday can be a convenient choice for many
            individuals, but whether its advisable depends on various factors.
            Its important to consider both the advantages and disadvantages
            before making such a significant decision.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Advantages:</h2>
          <List>
            {bikeData.Advantages.map((item, index) => {
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
          <h2 className="font-bold">Disadvantages:</h2>
          <List>
            {bikeData.Disadvantages.map((item, index) => {
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
            Which Hora is considered good for buying a vehicle?
          </h2>

          <p>
            In Vedic astrology, the selection of an auspicious time, or Hora for
            buying a vehicle is considered a crucial decision. The Hora system
            divides each day into 24 hours, with each hour ruled by a different
            planet. The choice of Hora for purchasing a vehicle is believed to
            influence the overall success, longevity, and happiness associated
            with the new acquisition.
          </p>
          <p>
            The most widely accepted Hora for buying a vehicle is the Shukla
            Paksha Hora, specifically on a Wednesday. This Hora is associated
            with Mercury, the planet representing communication and
            transportation. Mercurys influence is believed to favour a smooth
            and prosperous vehicle purchase.
          </p>
          <p>
            However, its essential to remember that individual horoscopes and
            planetary positions can vary. Therefore, consulting with a
            knowledgeable astrologer can provide personalised guidance, ensuring
            the chosen Hora aligns with ones birth chart and specific
            circumstances.
          </p>
          <p>
            Additionally, aside from the astrological aspects, practical
            considerations such as market trends, pricing, and personal
            readiness should also be taken into account. While the choice of an
            auspicious Hora can provide a sense of confidence, it is not a
            guarantee of success. Combining astrological insights with sound
            judgement and research can help individuals make a wise and
            fortuitous vehicle purchase.
          </p>
        </StyledContent>

        <h3 className="font-bold">
          Also Read <span className="text-red-500 italic">Horoscope 2024</span>
        </h3>

        <StyledContent>
          <h2 className="font-bold">
            Is it advisable to buy a vehicle on Ekadashi ?
          </h2>

          <p>
            It is generally not advisable to buy a vehicle on Ekadashi, a sacred
            day in Hinduism marked by fasting and spiritual observance. Ekadashi
            falls on the 11th day of both the waxing and waning lunar phases,
            and it holds great religious significance. On this day, devotees
            engage in prayers, meditation, and refrain from consuming grains, as
            they believe it purifies the mind and body.
          </p>
          <p>
            Buying a vehicle on Ekadashi is considered inauspicious for several
            reasons. Firstly, it is a day dedicated to spirituality and inner
            reflection, and making material acquisitions like a vehicle may
            divert ones focus from spiritual pursuits. Secondly, it is believed
            that any significant financial transaction on Ekadashi can bring
            financial instability or negative consequences.
          </p>
          <p>
            Hindu traditions emphasise adhering to the prescribed rituals and
            customs, and it is advised to avoid important purchases, including
            vehicles, on Ekadashi. Instead, it is better to choose an auspicious
            day when planetary alignments are favourable for such endeavours.
            This ensures that the purchase is made under the most favourable
            conditions, aligning with the individuals well-being and prosperity.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">
            Avoid buying a vehicle at Rahu Kaal period
          </h2>

          <p>
            In Vedic astrology, Rahu Kaal is considered an inauspicious time
            when it is advised to avoid important activities, including buying a
            vehicle. This period, which occurs daily, typically lasts for one
            and a half hours and is associated with malefic energy. Here are
            compelling reasons to steer clear of purchasing a vehicle during
            Rahu Kaal:
          </p>
          <p>
            Firstly, Rahu Kaal is believed to be governed by the malefic planet
            Rahu, which symbolises confusion, deception, and unpredictability.
            Buying a vehicle during this period may lead to hidden problems,
            undisclosed issues, or unexpected complications in the future.
          </p>
          <p>
            Furthermore, adhering to astrological guidance showcases respect for
            cultural beliefs and traditions. It reflects a conscious effort to
            make choices that are harmonious with the cosmic energies,
            contributing to a sense of balance and well-being.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">
            Good days to buy vehicle as per astrology
          </h2>

          <p>
            Astrology, with its celestial insights, has long influenced human
            decisions, including the auspicious days to buy a vehicle. While
            astrologys impact varies from person to person, some universally
            favourable celestial occurrences can guide vehicle purchases.
          </p>

          <List>
            {bikeData.GoodDays.map((item, index) => {
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

export default BikeMuhurat;
