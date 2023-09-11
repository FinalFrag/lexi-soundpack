# What is this?
This is a customizable soundpack for OpenTx.

Amber, the most popular soundpack, hasn't been updated since OpenTX 2.2 and is missing a lot of sounds. This results in some files sounding like Amber and others like the default voice that comes on OpenTX / EdgeTX radios.

I wanted a consistent voice and customizable sounds, so I created this script to generate sounds using the Google Text-to-speech API.

# I'm missing a sound for ...
Open up a github issue and I will generate the sounds for you.

# Thank you for this, how can I help?
If you like this soundpack, consider starring it on github.

If you wish to support me directly, you can do so via [PayPal](https://www.paypal.com/paypalme/finalfrag).

# For developers
If you want to generate the soundpack yourself, follow these steps:
- Put your google service account json in google-service-account.json.
    - https://console.cloud.google.com/iam-admin/serviceaccounts
    - Select project
    - Actions > Manage keys > Add key > JSON
- Put your google project id in the .env file (mentioned in the json file).
- List all the sounds you want to generate in sounds/extra.csv (format: `filename;text-to-speech`)
- Generate the sounds by running the following command:
    - Linux / Mac: `docker run -it --rm -v "$PWD":/usr/src/app -w /usr/src/app node bash -c "npm install && node main.js"`
    - Windows: `docker run -it --rm -v ${PWD}:/usr/src/app -w /usr/src/app node bash -c "npm install && node main.js"`