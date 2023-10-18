import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.*;

public class JavaToJSONConverter {
    public static void main(String[] args) throws IOException {
        // Set the directory of your Java project
        String projectDirectory = "C:\\Users\\pc\\IdeaProjects\\computer-science\\src\\DesignPatternConcepts\\ObserverPattern\\";

        // Create an ObjectMapper for JSON serialization
        ObjectMapper objectMapper = new ObjectMapper();

        // Traverse the project directory
        File projectDir = new File(projectDirectory);
        for (File file : projectDir.listFiles()) {
            if (file.isFile() && file.getName().endsWith(".java")) {
                // Read the Java file
                StringBuilder javaCode = new StringBuilder();
                try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
                    String line;
                    while ((line = reader.readLine()) != null) {
                        javaCode.append(line).append("\n");
                    }
                }

                // Convert to JSON
                String jsonCode = objectMapper.writeValueAsString(javaCode.toString());

                // Write to a JSON file
                String jsonFileName = file.getName().replace(".java", ".json");
                try (FileWriter jsonFileWriter = new FileWriter(jsonFileName)) {
                    jsonFileWriter.write(jsonCode);
                }
            }
        }
    }
}
