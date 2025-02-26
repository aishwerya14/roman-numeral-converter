import React, { useState } from "react";
import {
  Provider,
  defaultTheme,
  Button,
  TextField,
  View,
  Heading,
  Flex,
  Content
} from "@adobe/react-spectrum";

export default function RomanConverter() {
  const [number, setNumber] = useState("");
  const [romanNumeral, setRomanNumeral] = useState("");

  const convertToRoman = async () => {
    if (!number || isNaN(number) || number < 1 || number > 3999) {
      setRomanNumeral("Invalid input");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/romannumeral?query=${number}`
      );
      const data = await response.json();
      if (data.error) {
        setRomanNumeral(data.error);
      } else {
        setRomanNumeral(data.output);
      }
    } catch (error) {
      setRomanNumeral("Error connecting to server");
    }
  };

  return (
    <Provider theme={defaultTheme}>
      <View
        backgroundColor="gray-100"
        height="100vh"
        padding="size-200"
        UNSAFE_style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View
          backgroundColor="default"
          padding="size-400"
          borderRadius="medium"
          boxShadow="shadow-100"
          width="size-4600"
          UNSAFE_style={{
            maxWidth: "400px",
            textAlign: "center",
            padding: "2rem",
            border: "1px solid #ccc"
          }}
        >
          <Heading level={2} UNSAFE_style={{ fontSize: "24px", fontWeight: "bold" }}>
            Roman numeral converter
          </Heading>
          <Content>
            <Flex direction="column" alignItems="center">
              <TextField
                label="Enter a number"
                value={number}
                onChange={setNumber}
                type="number"
                minValue={1}
                maxValue={3999}
                width="100%"
                marginBottom="size-200" 
              />
              
              <Button variant="primary" onPress={convertToRoman} width="100%">
                Convert to roman numeral
              </Button>

              {romanNumeral && (
                <View marginTop="size-200">
                  <strong>Roman numeral:</strong> {romanNumeral}
                </View>
              )}
            </Flex>

          </Content>
        </View>
      </View>
    </Provider>
  );
}
