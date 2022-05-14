# Express Note Taker Bryson Kern

## Description

For this project I created a note taker website. This website allows users to save notes and retrieve them at any given time. My motivation behind this website was to create an application that would make remembering notes easier. While creating the note taker I learned more about NPM's as well as POST and GET calls.

## Table of Contents

- [Road Blocks](#RoadBlocks)
- [Learned Skills](#LearnedSkills)
- [Credits](#credits)
- [License](#license)

## Road Blocks

Whilst I was working on this project, many road blocks came up. My first problem was being able to display a saved note to the side bar. In order to get past this roadblock I simply made another read file request in my server.js and that did the job. My second problem that arose was being able to view previously saved notes. At first when you tried to click a saved note nothing would happen. In order to fix this I added ID's to each of the saved notes which then connected the data to the main javascript page which in turn fixed the problem

- ![Post](/Assets/post%20request.png)
- ![Read&Write](/Assets/read%26write.png)

## Learned Skills

Creating this website challenged me to to explore other NPM's in order to get my website up and running. I decided to go with the UUID NPM. This NPM allows you to create unique ID's for your application. This website also helped me better understand how the back end works. Lastly, since this project explicitly said to use heroku, I know feel like I have a good understanding on how to use it.

## Credits

- W3Schools-https://www.w3schools.com/

## License

MIT License

Copyright (c) [2022] [Bryson Kern]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
