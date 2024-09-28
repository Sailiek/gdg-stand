import React from 'react'

function DescriptionComponent() {
    const innerBracket= "{";
    const outsideBracket= "}"; // if you see this do not judge please 
  return (
    <div>
        <h2>Hello in our fun little game . </h2>
        <div>
            <h3>Instructions</h3>
        There are hidden flags in the page . A flag is special sentence written like this flag :{innerBracket}this is a flag{outsideBracket}.go to the stand tell the word , win the prize.
        </div>
        <div>You are supposed to explore the website : click on everything , maybe maybe sometimes it requires more than one click 👀.
            We may have hidden directories , so try searching some directories in the search bar <span>{/*remember add the url */}</span>you may find a flag 
        </div>
    </div>
  )
}

export default DescriptionComponent