import React from 'react';
import '../Styles/About.css';

function About() {
    return (
        <div class="pageBody">
            <div class="pageContent">
                <ul class="contentList">
                    <li>
                        <div class="textContent container">
                            <h1>About</h1>
                            <p>Speedster is an online typing test website featuring new and unique services. This site also offers many test modes, various configurable visual and functional settings, and a user profile system to store past tests.</p>
                            <h2>History</h2>
                            <p>This project was started on the 30th of November 2022 with the aim of improving the average typing speeds of internet users by improving the quality and quantity of typing practice. The site is continuously undergoing construction and a public release date has not been announced yet.</p>
                            <h2>Test Contents</h2>
                            <p>For the standard set of typing tests, we use the most common words used in the english language which can be modified to include punctuation, numerals and capitalizations. More advanced and unique sets of test contents can be chosen in different test modes with their corresponding details shown to provide clarification.</p>
                            <h2>Test Analytics</h2>
                            <p>After every test performed by the user, a thorough analysis will be provided for an immediate assessment on statistics like <mark><strong>wpm</strong></mark> (words per minute), <mark><strong>acc</strong></mark> (percentage accuracy) and <mark><strong>consistency</strong></mark> (degree of variance in speed).</p>
                            <h2>Credits</h2>
                            <p><strong>Jason</strong>&nbsp;&nbsp;&nbsp;: Developer and creator of the project<br/><strong>Nasser</strong>&nbsp;&nbsp;: Supervisor of the project<br/><strong>Testers</strong>&nbsp;: Anyone who provided feedback to this project</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About;