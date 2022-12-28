import { Link, WrapItem, Heading } from "@chakra-ui/react";
import { Wrap } from "@chakra-ui/react";
import MissionValue from "../components/mission-value-card";

export default function MissionValues() {
  return (
    <>
     
      <Wrap
       
        pt="2rem !important"
        spacing={"25px"}
        justify="center"
        maxWidth={"1000px"}
        margin="auto"
      >
        <WrapItem>
          <MissionValue
            title={"Diversity"}
            description="Diversity is an important step towards creating a more equitable society for everyone. We strive to have a community of various ethnic, cultural, and social identities."
          />
        </WrapItem>
        <WrapItem>
          <MissionValue
            title="Inclusivity"
            description={
              "Adopting an inclusive mindset can lead to a more diverse community. At Tech Optimum, we strive to foster a sense of community through including everyone."
            }
          />
        </WrapItem>
        <WrapItem>
          <MissionValue
            title={"Passion"}
            description="Being passionate drives our inspiration and creativity. we fuel your desire to learn and explore new things from our compassion in both community and education."
          />
        </WrapItem>
        <WrapItem>
          <MissionValue
            title={"Dependability"}
            description="We are here to support you. We’re always here for you to lean on. We ensure that you have a trustworthy community you can always look forward to. "
          />
        </WrapItem>
        <WrapItem>
          <MissionValue
            title={"Quality"}
            description="Demonstrating quality from us and from you is important to us. Quality leads to your success, which is important to us. We believe that is essential to creating sustainable ideas."
          />
        </WrapItem>
        <WrapItem>
          <MissionValue
            title={"Impactful"}
            description="We don’t exist for no reason. We are here so you can take away important ideas and ensure that Tech Optimum has impacted you more than just a organization. "
          />
        </WrapItem>
      </Wrap>
      
    </>
  );
}
