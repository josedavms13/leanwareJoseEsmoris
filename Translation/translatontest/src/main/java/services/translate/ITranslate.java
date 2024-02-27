package services.translate;

import services.translate.enums.Languages;

public interface ITranslate {
    String translate(String text, Languages from, Languages to);
}
