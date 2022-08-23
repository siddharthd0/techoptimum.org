import { Text, Flex } from "@chakra-ui/react";

export default function ExecutiveCard({ src, width="400", alt, name, role }) {
	return (
		<>
			<Flex alignItems="end">
				<img src="/static-exec-bg.png" alt="bg" width="450" height="400" />
        <Flex height="500px" position="absolute" alignItems="stretch" zIndex={1}>
          <Flex width={"400px"} justifyContent="space-between" position="absolute" zIndex={1}>
            <Flex flexDir="column">
              <Text marginTop="40px" marginLeft="40px" fontSize="xl" fontWeight="bold">{name.split(" ")[0]}</Text>
              <Text marginX="40px" fontSize="xl" fontWeight="bold">{name.split(" ")[1]}</Text>
            </Flex>
            <Text margin="40px" fontSize="xl" fontWeight="bold">{role}</Text>
          </Flex>
          <img src={src} alt={alt} width={width} height={width} />
        </Flex>
			</Flex>
		</>
	)
}
