# Web Development Project 4 - *CineDiscover*

Submitted by: **Mohamed Semah Khlifi**

This web app: **A sleek movie discovery platform where you can stumble upon random films and ban directors, genres, or actors you don't want to see again. Built with modern glassmorphism design and powered by The Movie Database (TMDB) API.**

Time spent: **8** hours spent in total

## Required Features

The following **required** functionality is completed: 

- [x] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - Three consistent attributes displayed: **Genre**, **Year**, and **Director**
  - Movie poster image displayed from TMDB API
  - "Discover!" button fetches new random movies on each click
- [x] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - Single movie displayed at a time with matching poster
  - Movie attributes (genre, year, director) match the displayed poster
  - High-quality movie posters fetched from TMDB image API
- [x] **API call response results should appear random to the user**
  - Random page selection (1-20) from TMDB popular movies endpoint
  - Random movie selection from each API response page
  - Large dataset ensures variety with minimal repeats
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
  - All three attributes (Genre, Year, Director) are clickable buttons
  - Clicking adds attribute to ban list and changes button to red
  - Clicking banned items in sidebar removes them from ban list
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
  - API service filters out movies with banned attributes before display
  - Banned genres, years, and directors are excluded from future discoveries
  - Error message shown if no movies match current ban list preferences

The following **optional** features are implemented:

- [x] **Multiple types of attributes are clickable and can be added to the ban list**
  - Genre, Year, and Director attributes are all clickable and bannable
  - Each attribute type has distinct styling and behavior
- [] **Users can see a stored history of their previously displayed results from this session**
  - A dedicated section of the application displays all the previous images/attributes seen before
  - Each time the API call button is clicked, the history updates with the newest API result

The following **additional** features are implemented:

- [x] **Premium glassmorphism UI design** with gradient backgrounds and blur effects
- [x] **Responsive layout** that works on desktop and mobile devices
- [x] **Movie details display** including rating, runtime, budget, and synopsis
- [x] **Advanced API integration** with movie details and credits endpoints
- [x] **Error handling and loading states** for better user experience
- [x] **Custom animations** including hover effects and button shimmer animations
- [x] **No-scroll design** - entire app fits in viewport without scrolling
- [x] **Smart sidebar management** - only appears when ban list or history have content

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://imgur.com/a/IowTAkr.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ScreenToGif  


## Technical Implementation

### API Integration
- **The Movie Database (TMDB) API** for movie data
- **Multiple endpoints**: Popular movies, movie details, and credits
- **Async/await** implementation with proper error handling
- **Dynamic query parameters** for pagination and filtering

### Architecture
- **React functional components** with hooks (useState, useEffect)
- **Modular component structure** with separate CSS files
- **Service layer** for API calls and data processing
- **Responsive CSS Grid** layout with glassmorphism effects

### Key Technologies
- React 19.1.0
- Vite build tool
- TMDB API v3
- Modern CSS with backdrop-filter and gradients

## Notes

### Challenges Encountered
- **API Key Configuration**: Initially used a placeholder API key that returned 401 errors. Resolved by implementing proper TMDB API key from user account.
- **React 19 Compatibility**: Lucide React icons weren't compatible with React 19, solved by using emoji icons instead.
- **Layout Optimization**: Eliminated scrolling issues by implementing CSS Grid with 100vh constraints and smart sidebar visibility.
- **Ban List Filtering**: Implemented efficient filtering logic to prevent banned attributes from appearing in future API calls.
- **History Management**: Added duplicate prevention and session-based storage for discovery history.

### Design Decisions
- **Glassmorphism aesthetic** for modern, premium feel
- **Single-screen layout** to eliminate scrolling
- **Conditional sidebar** that only appears when needed
- **Gradient color scheme** with purple/blue/pink accents

## License

    Copyright 2025 Mohamed Semah Khlifi

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.