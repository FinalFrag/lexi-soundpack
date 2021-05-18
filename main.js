(async () => {
    require('dotenv').config()

    const textToSpeech = require('@google-cloud/text-to-speech');
    const fs = require('fs');
    const WaveFile = require('wavefile').WaveFile;
    const files = require('./files');

    const projectId = process.env.PROJECT_ID;
    const keyFilename = 'google-service-account.json';

    const client = new textToSpeech.TextToSpeechClient({ projectId, keyFilename });
    
    for (const [key, value] of Object.entries(files)) {
        const outputPath = `SOUNDS/${key}.wav`;

        if (fs.existsSync(outputPath)) {
            continue;
        }

        const request = {
            'audioConfig': {
                'audioEncoding': 'LINEAR16',
                'pitch': 0,
                'speakingRate': .8,
                'volumeGainDb': 16
            },
            'input': {
                'text': value
            },
            'voice': {
                'languageCode': 'en-US',
                'name': 'en-US-Wavenet-H'
            }
        };

        const [response] = await client.synthesizeSpeech(request);

        const wav = new WaveFile(response.audioContent);
        wav.toSampleRate(32000);
        fs.writeFileSync(outputPath, wav.toBuffer());

        console.log(`Generated ${outputPath}`);
    }
})();