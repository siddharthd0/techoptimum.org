import { useState, useEffect } from "react";
import {
  Input,
  Textarea,
  Checkbox,
  VStack,
  Box,
  Button,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";

function Form({ questions = [], role = "" }) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const toast = useToast();

  useEffect(() => {
    setFormData({});
    setErrors({});
  }, [role]);

  const validateForm = () => {
    const newErrors = {};
    questions.forEach((question) => {
      if (question.type !== 'checkbox' && !formData[question.question]) {
        newErrors[question.question] = "Please fill this field out";
      }
    });
    setErrors(newErrors);
    const isValid = Object.keys(newErrors).length === 0;
    console.log("Is form valid?", isValid); // Debugging line
    return isValid;
  };
  
  

  const handleInputChange = (e, type, prompt) => {
    const value = type === "checkbox" ? e.target.checked : e.target.value;
    setFormData((prev) => ({ ...prev, [prompt]: value }));
    setErrors((prev) => ({ ...prev, [prompt]: undefined }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('/api/slack', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData, role }),
      });

      if (response.ok) {
        toast({
          title: 'Congrats!',
          description: 'We have received your application. We will reach out to you soon! ',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setFormData({});
      } else {
        let error;
        try {
          error = await response.json();
        } catch (e) {
          error = await response.text();
        }
        toast({
          title: 'Error',
          description: error,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('There was an error sending the form data to Slack', error);
      toast({
        title: 'Error',
        description: 'An error occurred while processing your request.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };
  console.log("formData", formData);
console.log("role", role);


  return (
    <VStack
    mt="1rem"
    bg="blue.100"
    borderRadius="md"
    px="2rem"
    py="1rem"
    mb="5rem"
    direction="column"
    color="primary"
    as="form"
    spacing={4}
    onSubmit={handleSubmit}
  >
    <Heading fontWeight="medium" fontSize="md" color="primary">
      Volunteer Application for {role}
    </Heading>
    
    {questions && questions.map((question, index) => {
          const isInvalid = question.type !== 'checkbox' ? Boolean(errors[question.question]) : false;
      
      return (
        <FormControl key={index} isInvalid={isInvalid}>
          <FormLabel>{question.question}</FormLabel>
          
          {question.type === "checkbox" ? (
            <Box>
              {question.options.map((option, i) => (
                <Checkbox
                 mr="1rem"
                  borderColor="primary"
                  color="primary"
                  key={i}
                  value={option}
                  name={question.question}
                  onChange={(e) => handleInputChange(e, 'checkbox', option)}
                >
                  {option}
                </Checkbox>
              ))}
            </Box>
          ) : question.type === "longAnswer" ? (
            <Textarea
              borderColor="blue.300"
              color="primary"
              placeholder={`${question.question}`}
              isInvalid={isInvalid}
              onChange={(e) => handleInputChange(e, "longAnswer", question.question)}
            />
          ) : (
            <Input
              borderColor="blue.300"
              color="primary"
              _placeholder={{
                color: "primary",
              }}
              placeholder={`${question.question}`}
              isInvalid={isInvalid}
              onChange={(e) => handleInputChange(e, "shortAnswer", question.question)}
            />
          )}
          
          {question.type !== 'checkbox' && (
            <FormErrorMessage>{errors[question.question]}</FormErrorMessage>
          )}
        </FormControl>
      );
    })}
    
    <Button type="submit" colorScheme="blue">
      Submit
    </Button>
  </VStack>
  );
}

export default Form;
