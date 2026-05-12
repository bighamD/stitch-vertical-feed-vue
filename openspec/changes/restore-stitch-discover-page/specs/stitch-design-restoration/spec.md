## ADDED Requirements

### Requirement: Restore Stitch Discover page
The application SHALL render the Stitch `Discover` page with the dark cinematic visual language, primary content sections, poster imagery, genre chips, floating reaction controls, and glass bottom navigation from the source Stitch design.

#### Scenario: Discover page renders
- **WHEN** a user opens the application
- **THEN** the Discover screen is visible with CineSwipe branding, search, genre chips, Late Night Thrills posters, Sunday Morning Vibes content, reaction controls, and Discover marked active in bottom navigation

### Requirement: Provide interactive feed/discover switching
The application SHALL let users switch between the Discover screen and the Vertical Feed screen without a page reload.

#### Scenario: Switch to feed
- **WHEN** a user selects Feed in the bottom navigation
- **THEN** the full-screen Vertical Feed experience appears with NEON DREAMS metadata, cinematic background, reaction rail, and Feed marked active

### Requirement: Support local UI interactions
The application SHALL support lightweight local interactions for genre selection, search filtering, liking, saving, and sharing affordances.

#### Scenario: Filter posters by search and genre
- **WHEN** a user types a search query or selects a genre chip
- **THEN** the visible Discover poster collection updates using local data without a backend request

#### Scenario: Toggle reaction state
- **WHEN** a user presses Like or Save
- **THEN** the corresponding control updates visually and count/state feedback changes locally
