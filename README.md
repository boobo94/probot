# AWS Lambda in TypeScript

## Install

1. Dependencies

  ```bash
  npm install
  ```

2. Download [ngrok](https://ngrok.com/) in the root folder

## Run project

1. Open a console

  ```bash
  npm run ngrok
  ```

  Copy the https link and go to [Alexa Console](https://developer.amazon.com/alexa/console/ask/test/amzn1.ask.skill.15bebd4e-4520-4a06-8fb7-57149258f4d0/development/en_US/), under Endpoint section, select `HTTPS` and paste the link in `Default Region` input field. From the below dropdown choose `My development endpoint is a sub-domain of a domain that has a wildcard certificate from a certificate authority`.
  Every time when you run the ngrok, you need to update the endpoint url. [[1]](https://medium.com/@cnadeau_/allow-alexa-to-run-your-locally-hosted-skill-1786e3ca7a1b)

2. Open another console
  ```bash
  npm start
  ```

## Developer tasks

Frequently used `npm script`s:

| Script name   | Description                                                                                                         |
|---------------|---------------------------------------------------------------------------------------------------------------------|
| `start`       | Runs the service locally, so you can call your API endpoints on http://localhost.                                   |
| `ngrok`       | Runs the ngrok service locally, so you can use the https endpoint in Alexa skill:  https://XXXXX.ngrok.io.          |


## Resources

1. https://medium.com/@cnadeau_/allow-alexa-to-run-your-locally-hosted-skill-1786e3ca7a1b
2. https://github.com/balassy/aws-lambda-typescript
3. https://ask-sdk-for-nodejs.readthedocs.io/en/latest/Developing-Your-First-Skill.html
4. https://ngrok.com/
5. https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs