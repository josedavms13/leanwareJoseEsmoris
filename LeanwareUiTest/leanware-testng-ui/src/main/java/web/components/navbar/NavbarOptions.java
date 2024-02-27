package web.components.navbar;

public enum NavbarOptions {
    SERVICES("Services"),
    TESTIMONIALS("Testimonials"),
    ENGAGEMENT_MODELS("Engagement Models"),
    CASE_STUDIES("Case Studies"),
    OUR_CULTURE("Our Culture"),
    BLOG("Blog");

    private final String value;

    NavbarOptions(String value) {
        this.value = value;
    }
}
