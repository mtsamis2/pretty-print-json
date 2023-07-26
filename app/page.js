"use client";
import styles from './page.module.css'
import { useState } from 'react';

export default function Home() {
  const EXAMPLE_DATA_JSON = [
    {
      "characters": [
        {
          "name": "Sir John Puffington III",
          "age": 35,
          "address": {
            "street": "123 Enchanted Lane",
            "city": "Fairyville",
            "state": "Enchantia",
            "zip": "98765"
          }
        },
        {
          "name": "Lady Jane Starlight",
          "age": 28,
          "address": {
            "street": "456 Magical Boulevard",
            "city": "Wonderland",
            "state": "Dreamland",
            "zip": "12345"
          }
        }
      ],
      "events": [
        {
          "title": "Grand Enchantment Ball",
          "date": "2023-08-15",
          "location": "Enchanted Castle",
          "description": "An evening of magic and merriment, where dreams come alive and joy knows no bounds!"
        },
        {
          "title": "Sparkling Wonderland Tea Party",
          "date": "2023-09-02",
          "location": "Garden of Dreams",
          "description": "A whimsical tea party in the heart of Wonderland, where tea, treats, and laughter abound!"
        }
      ]
    }    
  ];
  
  const SAMPLE_DATA_JSON = `{
    "name": "Sir John Puffington III",
    "age": 35,
    "address": {
      "street": "123 Enchanted Lane",
      "city": "Fairyville",
      "state": "Enchantia",
      "zip": "98765"
    }
    "skills": [
      "Mystical Problem-Solving",
      "Eloquent Storytelling",
      "Endless Curiosity"
    ]
  }`

  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setInput(e.target.result);
      };
      reader.readAsText(file);
    }
  }

  function prettyPrint() {
    try {
      const parsedInput = JSON.parse(input);
      const prettyOutput = JSON.stringify(parsedInput, null, 2);
      setOutput(prettyOutput);
    } catch (error) {
      setOutput(error.message);
    }
  }

  function minify() {
    try {
      const parsedInput = JSON.parse(input);
      const minifiedOutput = JSON.stringify(parsedInput);
      setOutput(minifiedOutput);
    } catch (error) {
      setOutput(error.message);
    }
  }

  function copyToClipboard() {
    navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
      if (result.state === 'granted' || result.state === 'prompt') {
        navigator.clipboard.writeText(output);
      }
    });
  }

  function download() {
    const a = document.createElement('a');
    a.setAttribute(
      'href',
      `data:text/plain;charset=utf-8,${encodeURIComponent(output)}`
    );
    a.setAttribute('download', 'output.json');
    a.click();
  }

  function insertSampleJSON() {
    setInput(SAMPLE_DATA_JSON);
  }

  function clear() {
    setInput('');
    setOutput('');
  }

  return (
    <div>
      <h1 className={styles.toolHeader}>JSON Prettify/Minify Tool</h1>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.centerLabel}>Input</h2>
          <button onClick={insertSampleJSON}>Sample JSON</button>
          <button onClick={clear}>Clear</button>
          <label className={styles.centerLabel}>
            Input JSON:
            <textarea value={input} onChange={handleChange} />
          </label>
          <label className={styles.centerLabel}>
            Upload JSON File: 
            <input className={styles.fileInput} type="file" onChange={handleFileChange} />
          </label>
        </div>
        <div className={styles.center}>
          <button onClick={prettyPrint}>Prettify</button>
          <button onClick={minify}>Minify</button>
        </div>
        <div className={styles.right}>
          <h2 className={styles.centerLabel}>Output</h2>
          <button onClick={copyToClipboard}>Copy</button>
          <button onClick={download}>Download</button>
          <label className={styles.centerLabel}>
            Output JSON:
            <textarea value={output} readOnly />
          </label>
        </div>
      </div>
      <div>
        <div className={styles.infoContainer}>
          <h2>Instructions for using JSON Prettify/Minify</h2>
          <p>Are you ready to dive into the wonderful world of JSON formatting? Let's make your JSON data look absolutely stunning and easily readable! Follow these simple steps:</p>
          <ol>
            <li>Begin your JSON journey by either copying and pasting your JSON data into the "Input" text area or, for added convenience, upload a JSON file using the delightful "Choose File" button.</li>
            <li>Now, here comes the magical part! With just a click on the "Prettify" button, watch as the JSON data transforms into a beautifully structured and elegantly indented masterpiece. It's like giving your JSON a spa day and pampering it with the royal treatment!</li>
            <li>If you prefer your data in a more compact form, just like a minimalist art piece, we've got you covered too! Simply click on the "Minify" button to remove any excess white spaces, and voilà! Your JSON data will be space-efficient and ready to impress.</li>
            <li>Feast your eyes on the "Output" text area, where your newly transformed JSON data is displayed in all its glory. And hey, if you want to share this beauty with the world, just click on the "Copy" button to copy it to your clipboard effortlessly.</li>
            <li>But wait, there's more! Take your JSON elegance to the next level by clicking "Download" to save your masterpiece as a .JSON file. Now you can cherish it forever, even offline!</li>
            <li>Need a fresh start? No worries! Click "Clear" to erase all input and start anew, as if your JSON adventure is just beginning.</li>
            <li>Oh, and we've got a little treat for you! Click "Sample JSON" to instantly generate dummy JSON data and get a taste of the magic this tool can do.</li>
          </ol>
          <p>Can you believe how simple it is? With this JSON prettify/minify editor tool, your JSON data will be the talk of the town - elegant, well-groomed, and ready to impress!</p>
          <h2>What is JSON?</h2>
          <p>JSON (JavaScript Object Notation) is not just any data format; it's a language of beauty and simplicity. Imagine a format that both humans and machines adore, and JSON fits the bill perfectly. It's like poetry for data exchange!</p>
          <p>This mesmerizing JSON format is based on a subset of the JavaScript programming language, weaving conventions familiar to programmers from the C family of languages such as C, C++, C#, Java, JavaScript, Perl, and Python. JSON is the universal language of harmony that transcends linguistic barriers!</p>
          <p>JSON plays a starring role in the web development symphony, where it facilitates smooth data transfer between servers and web applications, like a well-choreographed dance of information.</p>
          <p>Here's a glimpse of JSON's enchanting allure: envision an array of delightful objects, akin to a cast of charming characters in a whimsical story, adorned with properties such as name, age, and address. As if performing a spellbinding symphony, they come together, weaving a captivating narrative of data that sparks the imagination and leaves one utterly enchanted!</p>
          <pre>
            <code>
              {JSON.stringify(EXAMPLE_DATA_JSON, null, 2)}
            </code>
          </pre>
          <p>Step into the magical world of JSON wonderland! The grand symphony begins with a delightful array of "characters," each like a sparkling gem in a treasure trove of whimsy!</p>
          <p>First, meet Sir John Puffington III, a distinguished JSON character who brings a touch of royalty and wisdom. At the age of 35, Sir Puffington's adventures have enchanted many across the realms! His splendid address is none other than 123 Enchanted Lane in the whimsical town of Fairyville. Nestled in the mystical realm of Enchantia, this enchanting abode is like a fairytale castle, complete with a zip code of 98765 - a magical portal to wonder and delight!</p>
          <p>Next, prepare to be dazzled by Lady Jane Starlight, a luminescent JSON beauty who radiates grace and elegance. At just 28 years young, Lady Starlight is a beacon of light and hope! Her address, the dazzling 456 Magical Boulevard, is nestled in the enchanting city of Wonderland. Within the dreamy realm of Dreamland, this ethereal haven boasts a zip code of 12345 - a gateway to the fantastical and extraordinary!</p>
          <p>As you immerse yourself in this wondrous JSON tale, prepare for even more enchantment! The symphony extends to the realm of "events," where magical gatherings come to life with delightful details!</p>
          <p>First, there's the Grand Enchantment Ball on 8/15/23, where enchanting beings gather at the Enchanted Castle. The description promises an evening of magic and merriment, where dreams come alive and joy knows no bounds!</p>
          <p>Then, there's the Sparkling Wonderland Tea Party on 9/2/23 held in the whimsical Garden of Dreams. This charming event invites all to indulge in tea, treats, and laughter - a true celebration of wonder and joy!</p>
          <p>JSONland, with its array of characters and events, creates a mesmerizing symphony of data and delight. JSON and JSONP, like the maestros of the digital landscape, unite information and imagination in a world of endless possibilities.</p>
          <h2>What's the Difference Between JSON and JSONP and Which Do I Use?</h2>
          <p>Let's unravel the mystique surrounding JSON and JSONP and guide you towards their perfect use.</p>
          <p>JSON, the guardian of structured data, shines when you seek to exchange information within the confines of a single domain. It is the epitome of trust and compatibility, providing a seamless bridge between the client and server like a reliable courier.</p>
          <p>Now, JSONP adds a dash of flair and creativity to overcome the same-origin policy limitations set by browsers. Like a daring acrobat, JSONP gracefully performs by wrapping the JSON data in a callback function, making cross-domain requests a thrilling spectacle!</p>
          <pre>
            <code>
              {`myMagicalFunctionCall({"Name": ""Sir John Puffington III", "Sport": "Giant Snail Racing"});`}
            </code>
          </pre>
          <p>With JSONP, the sky's the limit when it comes to exchanging data between client and server in different domains, all while respecting the security boundaries.</p>
          <p>Embrace the best of both worlds, as JSON and JSONP partner in perfect harmony to fulfill different needs and aspirations!</p>
          <p>Curious to learn more about JSON's enchanting charm? Delve deeper into its wonders with these incredible resources:</p>
          <ul>
            <li><a title="JSON.org" href="https://json.org/">JSON.org</a> - The sanctuary of JSON's origins.</li>
            <li><a title="w3schools.com's JSON Tutorial" href="https://www.w3schools.com/js/js_json_intro.asp">JSON Tutorial from w3schools.com</a> - A treasure trove of JSON knowledge.</li>
            <li><a title="Wikipedia link to JSON" href="https://en.wikipedia.org/wiki/JSON">JSON Explained on Wikipedia</a> - An encyclopedia of JSON insights.</li>
          </ul>
          <p>So there you have it, an enchanting journey into the world of JSON! Embrace the elegance of JSON formatting, and let your data dance with joy and grace!</p>
        </div>
      </div>
    </div>
  );
}
