package web.components.navbar;

import java.util.Arrays;

import static java.lang.String.format;

public class NoSuchLanguageException extends Exception {
    public NoSuchLanguageException(String message) {
        super(format("No such language: %s is in %s",message, getErrorMessage()));
    }

    public static String getErrorMessage() {
        return Arrays.stream(NavbarLanguages.values()).map(lang -> lang.toString().toUpperCase()).toList().toString();
    }
}
