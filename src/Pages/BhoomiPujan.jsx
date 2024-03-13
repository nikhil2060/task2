/* eslint-disable react/prop-types */
import styled from "styled-components";
import List from "../Components/List";
import ListItem from "../Components/ListItem";
import Table from "../Components/BhoomiTable";

import bhoomiData from "../Data/BhoomiList.json";

function BhoomiPujan() {
  return (
    <>
      <div className="w-full h-full flex justify-center pt-10">
        <StyledHeading>Bhoomi pujan muhurat 2024</StyledHeading>
      </div>

      <div className="w-full h-full flex flex-col gap-10 items-start p-10">
        <StyledContent>
          <p>
            {`In the rich tapestry of Hindu traditions, the Bhoomi Pujan ceremony stands as a profound and deeply symbolic ritual.
It is a sacred act that symbolises the connection between man and the earth, a ritual that marks the commencement
of construction on a particular piece of land. This age-old practice not only sanctifies the ground but also invokes the
blessings of the divine, ensuring that the upcoming construction is carried out smoothly and harmoniously.`}
          </p>
          <p>
            {`As we delve into the intricate world of Hindu culture, the Bhoomi Pujan ceremony emerges as a timeless tradition,
celebrated with great fervour and devotion. In the year 2024, this auspicious event takes centre stage, offering a
unique opportunity for those seeking to embark on new construction ventures or home investments. The Bhoomi
Pujan Muhurat for 2024 holds immense significance, aligning celestial energies with earthly endeavours.`}
          </p>
          <p>
            {`This blog aims to unravel the mystique surrounding the Bhoomi Pujan Muhurat of 2024. We will delve into its
significance, the auspicious dates, and the customs associated with this sacred ritual. Whether you're a devout
follower of Hinduism or someone keen on understanding the cultural richness of this ancient tradition, join us on this
enlightening journey as we explore the auspicious Bhoomi Pujan Muhurat of 2024, a celestial alignment that
promises blessings and prosperity for those who seek it.`}
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">
            Why is Gold Buying Shubh Muhurta Important?
          </h2>
          <p>
            {`Land worship, also known as "Bhumi Puja" or "Bhumi Vandana," is a profound cultural and spiritual practice deeply
rooted in various traditions worldwide. It encompasses the veneration and reverence of the Earth, recognizing it as a
sacred and life-sustaining entity. This practice acknowledges the interconnectedness between humanity and the
environment.`}
          </p>
          <p>
            {`In many cultures, land worship involves rituals, ceremonies, and offerings to honour the land's fertility, purity, and
ability to nurture life. It signifies gratitude for the Earth's abundance and a commitment to its preservation. Through
land worship, people seek harmony with nature, emphasising responsible stewardship and sustainable living.`}
          </p>
          <p>
            {`Land worship fosters a sense of humility, reminding us of our dependence on the planet's resources. It promotes
environmental conservation, ecological balance, and respect for all living beings. This practice encourages
mindfulness of our ecological footprint and urges individuals to make choices that safeguard the Earth for future
generations.
In a world facing environmental challenges, land worship serves as a reminder of our collective responsibility to
protect and cherish the Earth, emphasising the spiritual connection between humanity and the natural world.`}
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Importance of Bhoomi Pujan</h2>
          <p>
            {`Bhoomi Pujan, also known as the groundbreaking ceremony, holds immense importance in Indian culture and
traditions. This sacred ritual is performed before the commencement of any construction project, be it a home,
temple, or any other structure. It involves prayers and offerings to the earth, seeking its blessings and permission to
disturb its natural balance.`}
          </p>
          <p>
            {`The significance of Bhoomi Pujan lies in its spiritual and ecological aspects. Spiritually, it is believed to appease the
earth deity, thereby ensuring the safety and success of the construction project. It is a way of seeking divine guidance
and protection throughout the construction process.`}
          </p>
          <p>
            {`From an ecological perspective, Bhoomi Pujan promotes environmental awareness and respect for nature. It
encourages sustainable construction practices, urging people to minimise the impact on the environment while
building. It emphasises the harmonious coexistence of human endeavours and nature. In essence, Bhoomi Pujan is not just a ritual; it is a symbol of the deep-rooted connection between humans and the
environment. It underscores the importance of respecting and preserving the earth, making it a vital tradition in the
Indian cultural tapestry.`}
          </p>
        </StyledContent>

        <h2 className="font-bold">
          Auspicious time for Bhoomi Pujan in the year 2024
        </h2>

        <Table />

        <StyledContent>
          <h2 className="font-bold">
            Bhoomi Pujan Muhurta 2024: Auspicious date for house construction
            and Bhoomi Pujan Muhurat
          </h2>
          <p>
            Bhoomi Pujan Muhurta in 2024 offers an auspicious window of
            opportunity for those embarking on house construction projects. The
            choice of an auspicious date is deeply rooted in Vedic astrology and
            is believed to ensure harmony, prosperity, and protection for the
            new dwelling. Here are six months in 2024, each offering an
            auspicious Bhoomi Pujan Muhurat:
          </p>

          <List>
            {bhoomiData.list.map((item, index) => {
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

        <h3 className="font-bold">
          Want to know more about the auspicious dates,{" "}
          <span className="text-red-500 italic">chat with our astrologer</span>
        </h3>

        <StyledContent>
          <h2 className="font-bold">
            Bhoomi pooja dates in 2024: Auspicious constellation/Nakshatra for
            Griha Arambha
          </h2>

          <p>
            According to our Vastu astrologers, in the year 2024, the most
            auspicious nakshatras for performing Bhumi Puja (groundbreaking
            ceremony) are Shatabhisha, Dhanishta, Uttarashada, Uttarabhadrapada,
            Rohini, Revati, Chitra, Uttara Phalguni, Mrigashira, Anuradha,
            Swati, Hasta, and Pushya. Commencing construction on your home
            during these nakshatras is considered favorable. Apart from the
            above-mentioned nakshatras, it is advisable to avoid all other
            nakshatras when considering the foundation stone laying ceremony.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">
            Auspicious Lagna for Bhumi pujan Muhurat 2024
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
            {`In Hindu tradition, Bhumi Pujan, the ceremonial worship of the
            Earth, is a significant ritual for initiating construction projects
            or starting new ventures on auspicious days. However, there are days
            when Bhumi Pujan Muhurats should be avoided to ensure success and
            harmony. These inauspicious dates, known as "Rikta Tithis" in the
            Hindu calendar, include the 4th, 9th, and 14th days of both the
            waxing and waning lunar phases. Additionally, Tuesdays and Saturdays
            are generally considered unfavourable for Bhumi Pujan due to their
            association with Mars and Saturn, which can bring obstacles and
            delays. Choosing an auspicious Muhurat ensures that the Earth's
            blessings are received without hindrance, promoting prosperity and
            harmony in the project.`}
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Akshaya Tritiya 2024</h2>

          <p>
            Among the auspicious days to purchase gold, Akshaya Tritiya in 2024
            stands out as the most significant. Astrologers often guide
            individuals to acquire gold on this day, considering it an opportune
            moment for success and fortune. Akshaya Tritiya, also known as Akti
            or Akha Teej, is a Hindu and Jain spring festival celebrated on 10
            May, 2024.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Tithis circumvented for the bhumi puja</h2>

          <p>
            In the realm of Hindu rituals and ceremonies, the selection of an
            auspicious Tithi, or lunar day, holds paramount importance. When it
            comes to Bhumi Puja, the consecration of land before construction,
            the choice of Tithi becomes especially significant. Traditionally,
            practitioners aim for Tithis that align harmoniously with
            astrological and lunar calendars. This meticulous planning ensures
            that the Bhumi Puja is performed on a day believed to bring
            prosperity and divine blessings to the land and future construction.
            As such, Tithis are not merely dates on a calendar, but celestial
            guides that circumvent any potential obstacles, making the Bhumi
            Puja a sacred and propitious occasion.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Impact of Moon Nakshatras</h2>

          <p>
            {`The Moon Nakshatras, also known as lunar mansions, play a
            significant role in Vedic astrology and influence various aspects of
            a person's life. These 27 lunar constellations, each with its unique
            characteristics, have a profound impact on a person's emotions,
            personality, and destiny. They determine one's emotional response to
            situations, shaping their behaviour and decision-making. For
            example, the Nakshatra under which the Moon is placed at birth can
            influence an individual's temperament, relationships, and career
            choices. Astrologers analyse the Moon Nakshatras to provide insights
            into a person's inner world and life path, helping individuals
            navigate their journey with self- awareness and guidance.`}
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">
            What area should be used for Bhoomi Puja at the construction site?
          </h2>

          <p>
            {`Bhoomi Puja, a sacred ritual in Hindu culture, marks the
            commencement of construction projects by seeking blessings from
            Mother Earth (Bhoomi Devi). It should ideally be performed at the
            exact location where the construction is planned. This spot, often
            the foundation site, is chosen to invoke the Earth's blessings and
            ensure a harmonious and successful building process. The ceremony
            typically involves prayers, offerings, and rituals to express
            gratitude for the land's support and seek its protection. By
            performing Bhoomi Puja at the construction site, it signifies
            respect for the environment and a desire for a prosperous, safe, and
            spiritually aligned project.`}
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">
            Bhoomi Pujan Vidhi 2024: How should the Bhoomi Pujan ritual be
            performed?
          </h2>

          <p>
            Bhoomi Pujan, a sacred Hindu ritual, signifies the inauguration of a
            new construction project or the commencement of building on a piece
            of land. In 2024, as in previous years, the ritual should be
            performed with utmost reverence and adherence to tradition. The
            ceremony typically begins with the selection of an auspicious date
            and time by consulting a priest or astrologer. On the chosen day,
            the area is cleansed, and a square pit is dug at the site. An idol
            or image of Lord Ganesha, the remover of obstacles, is installed,
            and prayers are offered to seek his blessings. Vedic hymns are
            chanted, followed by the symbolic placing of grains, coins, and
            other offerings into the pit. Finally, the soil is blessed and used
            to lay the foundation. Bhoomi Pujan embodies the belief in seeking
            divine blessings for the success and prosperity of the construction
            project.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">
            Things to be Buy for Bhoomi Puja Ceremony
          </h2>

          <p>
            For a Bhoomi Puja ceremony, several essential items are required to
            ensure a sacred and auspicious start to construction or land-related
            endeavours. These include a sacred idol or image of Lord Ganesha,
            the remover of obstacles, along with incense sticks, camphor, and
            oil lamps for rituals. Offerings like flowers, coconuts, fruits, and
            sweets symbolise purity and abundance. Additionally, items like
            turmeric, vermillion, rice, and sacred thread are used for rituals.
            A pot filled with water and a coconut placed atop signify
            prosperity. The ceremony also necessitates a fire pit, bricks, and
            sand for constructing a holy platform. These items collectively
            create a spiritually charged atmosphere for the Bhoomi Puja,
            invoking blessings for a successful and harmonious project.
          </p>
        </StyledContent>

        <StyledContent>
          <h2 className="font-bold">Who should do Bhumi Puja?</h2>

          <p>
            {`Bhumi Puja, a Hindu ritual performed before starting any
            construction project, should ideally be conducted by a qualified
            priest or a religious authority. This ceremony symbolises seeking
            the blessings of Mother Earth (Bhumi Devi) and ensuring a harmonious
            relationship with the land and its spirits. The priest, well-versed
            in Vedic rituals and traditions, conducts the puja by reciting
            sacred mantras and offering prayers to invoke divine favour and
            protection. It's essential that those involved in the construction,
            whether homeowners or builders, actively participate in the ceremony
            to show their respect for nature and their commitment to a
            successful and auspicious project.`}
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

export default BhoomiPujan;
