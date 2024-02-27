package services.translate.enums;

public enum Languages {
    SPANISH("es"),
    ENGLISH("en");

    private String value;

    Languages(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
