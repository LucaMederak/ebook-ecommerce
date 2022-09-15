import type { NextPage } from "next";
import Head from "next/head";

//components
import Section from "@/components/section/Section";
import Slider from "@/components/slider/Slider";
import Info from "@/components/info/Info";
import Heading from "@/components/heading/Heading";
import OfferContainer from "@/components/offer/offerContainer/OfferContainer";
import Offer from "@/components/offer/Offer";

//icons
import { FaHeadset, FaTruck, FaBook } from "@/icons/icons";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ebook commerce</title>
        <meta name="description" content="Ebookcommerce" />
      </Head>
      <Section>
        <Slider />
      </Section>
      <Section>
        <Heading title="Zobacz jak działamy" align="center">
          <Info>informacje</Info>
        </Heading>
        <OfferContainer>
          <Offer
            icon={<FaBook />}
            title="Najlepsze ebooki"
            description={`Zapewniamy ebooki znanych twórców`}
          />
          <Offer
            icon={<FaHeadset />}
            title="Doradzamy w wyborze produktu"
            description={`Chętnie doradzimy w wyborze produktu`}
          />
          <Offer
            icon={<FaTruck />}
            title="Bezpieczna wysyłka"
            description={`Dbamy aby produkty były odpowiednio zapakowane`}
          />
        </OfferContainer>
      </Section>
    </>
  );
};

export default Home;
