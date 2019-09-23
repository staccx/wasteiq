import React, { useState } from "react"

import { Layout, Paragraph, Heading } from "@staccx/base"
import { SanityQuery } from "@staccx/sanity"
import styled from "styled-components"
import { i18nInstance } from "@staccx/i18n"
import CenterContent from "../CenterContent/CenterContent"
import ItemsCarousel from "react-items-carousel"
import RichText from "../RichText/RichText"
import { useMediaQuery } from "react-responsive"

const t = val => i18nInstance.convert(val)

const FeaturesCard = styled.div`
  margin: 0 6.7%;
  height: 100%
  padding: 24px;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(254, 121, 77, 0.1);
`

const Slider = ({ heading, lede, examples = [] }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 600px)"
  })
  return (
    <Layout as={"article"}>
      <CenterContent>
        <Layout rowGap={"medium"}>
          {heading && <Heading level={2}>{heading}</Heading>}
          {lede && <Paragraph variant="lede">{lede}</Paragraph>}
        </Layout>
      </CenterContent>
      {examples && (
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SanityQuery
            id={"examples-block"}
            query={buildExamplesQuery(examples)}
          >
            {({ result = [] }) => (
              <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={3}
                gutter={4}
                leftChevron={<button>{"<"}</button>}
                rightChevron={<button>{">"}</button>}
                chevronWidth={25}
                showSlither
              >
                {result.map(({ _id, name, lede, slug }) => (
                  <FeaturesCard key={_id}>
                    {name && <Heading level={4}>{t(name)}</Heading>}{" "}
                    {lede && <RichText>{t(lede)}</RichText>}
                    {slug && <button>{"Les mer"}</button>}
                  </FeaturesCard>
                ))}
              </ItemsCarousel>
            )}
          </SanityQuery>
        </div>
      )}
    </Layout>
  )
}

const buildExamplesQuery = examples => {
  const query = `*[_id in [${examples
    .map(({ _ref }) => `'${_ref}'`)
    .join(",")}]]{_id, name, lede, slug}`
  return query
}
export default Slider
