import Section from './components/section.js';
import Visualization from './components/visualization.js';
import Header from './components/header.js';
import Paragraph from './components/paragraph.js';
import Scroll from './components/scroll.js';

function App() {
  <Scroll />
  return (
    <div className="App">
      <Visualization />
      <div className='container mx-auto z-0 pt-72'>
        <Section type="center">
          <Header>Visualizing Data about People with Disabilities</Header>
          <Paragraph>The ADA defines a person with a disability as a person who has a physical or mental impairment that substantially limits one or more major life activity. This includes people who have a record of such an impairment, even if they do not currently have a disability.</Paragraph>
          <Paragraph>What does it really mean for a person when one or more of their major life activities have been impaired? How is their life different from anyone else? This is what this visualization hopes to illustrate.</Paragraph> 
          <Paragraph>In the visualization above, each hexagon represents 50,000 people. The darker hexagons represent people with disabilities and the lighter ones are those without.</Paragraph>
        </Section>
        <Section type="right">
          <Header>Distribution</Header>
          <Paragraph>This is what the US would look like if it was scaled by the population density of each state. Over time, as the population of the country increased, so did the number of people with disabilities.</Paragraph>
          <Paragraph>States with a higher population generally have higher population of people with disability as well. Click on one or multiple states to look at their disability prevalence over the years and compare.</Paragraph>
        </Section>
        <Section type="left">
          <Header>Age</Header>
          <Paragraph>Overall, disabilities of all types increase as people get older. Ambulatory disabilities, in particular, drastically increase in prevalence in adults over 35 years of age. Could this just be a result of aging?</Paragraph>
          <Paragraph>On the other side of the spectrum, prevalence of cognitive difficulties, which are the most common disability among children, does not change much as people age.</Paragraph>
          <Paragraph>In terms of number of people, prevalence of disabilities is comparable across age groups. But what if we were to look at the prevalence of disability as a proportion of all the people in each age group?</Paragraph>
          <Paragraph>This is everyone in the US. Prevalence of disabilities across age groups doesn’t seem comparable anymore.</Paragraph>
          <Paragraph>In fact, the percentage of people with disabilities increases as age increases, with more than half of all people above 75 years old having some disability.</Paragraph>
          <Paragraph>Click on any of the hexagons to compare that disability type between the age groups.</Paragraph>
        </Section>
        <Section type="right">
          <Header>Income</Header>
          <Paragraph>Our understanding of the landscape of disability in the US would be incomplete without taking a glimpse into the everyday life of people with disabilities.</Paragraph>
          <Paragraph>Does having a disability affect how much someone might earn? At first glance, there are no significant differences in the number of people with disability in each income bracket.</Paragraph>
          <Paragraph>While nearly 20% of the people in the lowest income bracket have disabilities, they only form 4.25% of the highest income bracket.</Paragraph>
          <Paragraph>Click through the hexagons to see state-wise details. Currently, you're seeing the data for All of United States</Paragraph>
          <Paragraph>This trend is consistent when we look at poverty levels. 205 million people are over 150% of the poverty level (they don’t even fit on the screen!). Only 12.5% of these are people with disabilities, while double that number are under the poverty level.</Paragraph>
          <Paragraph>What might cause such a disparity? Click through the hexagons to see state-wise details. Currently, you're seeing the data for All of United States</Paragraph>
        </Section>
        <Section type="left">
          <Header>Education</Header>
          <Paragraph>What about education?</Paragraph>
          <Paragraph>Tracing this trend further back, we see that fewer people with disabilities have completed higher levels of education. About one quarter of the people who have graduated high school, about 20% of those who’ve attended some college, and less than 10% of the people with a bachelor’s degree or higher have disabilities.</Paragraph>
          <Paragraph>Is this because of inaccessibility or intolerance? Click through the hexagons to see state-wise details. Currently, you're seeing data for: All of United States</Paragraph>
        </Section>
        <Section type="right">
          <Header>Occupation</Header>
          <Paragraph>How does this translate to the type of jobs that people with disabilities hold?</Paragraph>
          <Paragraph>In almost all industries, 11-16% of the employees are people with disabilities. People with disabilities form a smaller portion, about 9%, of the agriculture, forestry, fishing and mining industry, which could be because of the physically intensive nature of the work involved. However, the lowest number of people with disability actually work in the information industry, accounting for only 5%of the workforce.</Paragraph>
          <Paragraph>Click to see the state-wise distribution. Current selection shows:</Paragraph>
          <Paragraph>The lowest representation of people with disabilities is in the government sector, with only around 2% in state and federal governments. In fact, the highest representation is in the private sector, which only stands at 5%. Additionally, this data only represents those people who are employed and overall, less than 5% of them are disabled. However, 13% of the population of the US are disabled.</Paragraph>
          <Paragraph>Click to see the state-wise distribution. Current selection shows:</Paragraph>
        </Section>
        <Section type="center">
          <h1 className='text-5xl font-semibold text-gray-700 mb-8'>This viz was an attempt to provide you a view into the lives of people with special needs. We hope you have a chance to sit back and introspect about where we stand.</h1>
        </Section>
      </div>
    </div>
  );
}

export default App;
