package JavaToJSON;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.*;

public class DataBind {
    public static void main(String[] args) {
        String inputFileName = "C:\\Users\\pc\\IdeaProjects\\computer-science\\src\\DesignPatternConcepts\\ObserverPattern\\GoogleClassRoom.java"; // Replace with the actual Java source file
        String outputFileName = "output.json"; // Replace with the desired output JSON file name

        try {
            // Read the Java code from the input file
            StringBuilder code = new StringBuilder();
            try (BufferedReader reader = new BufferedReader(new FileReader(inputFileName))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    code.append(line).append("\n");
                }
            }

            // Convert the Java code into a JSON representation
            String jsonRepresentation = convertJavaCodeToJson(code.toString());

            // Save the JSON representation to the output file
            try (BufferedWriter writer = new BufferedWriter(new FileWriter(outputFileName))) {
                writer.write(jsonRepresentation);
            }

            System.out.println("Java code converted to JSON and saved to " + outputFileName);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static String convertJavaCodeToJson(String javaCode) {
        // You can customize the JSON conversion logic here
        // For simplicity, we're using Jackson ObjectMapper to convert it to JSON
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            return objectMapper.writeValueAsString(javaCode);
        } catch (IOException e) {
            e.printStackTrace();
            return "{}"; // Return an empty JSON object in case of an error
        }
    }
}
