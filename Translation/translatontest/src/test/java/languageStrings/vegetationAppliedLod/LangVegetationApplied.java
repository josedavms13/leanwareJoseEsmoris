package languageStrings.vegetationAppliedLod;

import com.google.gson.Gson;
import services.translate.enums.Languages;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;

import static java.lang.String.format;

public class LangVegetationApplied {

    private static final String DIRECTORY = System.getProperty("user.dir") + "/src/test/resources/languages/pages/vegetationApplied";

    public static LangVegetationAppliedLodDto createLangVegetationApplied(Languages languages) {
        return readClassFromJson(languages);
    }

    private static LangVegetationAppliedLodDto readClassFromJson(Languages languages) {
        File jsonFile = new File(DIRECTORY + "/" + languages.getValue() + ".json");
        try {
            FileReader fileReader = new FileReader(jsonFile);
            System.out.println(fileReader);
            BufferedReader reader = new BufferedReader(fileReader);
            Gson gson = new Gson();
            return gson.fromJson(reader, LangVegetationAppliedLodDto.class);
        } catch (FileNotFoundException e) {
            throw new RuntimeException(format("File for language %s not found", languages.getValue()), e);
        }
    }
}
