import OpenAI from 'openai';
import { chromeHelper } from '../utilities/chrome-helper';

const { getApiKeyValue } = chromeHelper()

const client = new OpenAI({
    apiKey: await getApiKeyValue(),
    dangerouslyAllowBrowser: true

})


export async function test() {
    const apiKey = await getApiKeyValue()
    return apiKey
}


export async function MakeOpenApiCall(resourceCreationHeading) {
    const apiKey = await getApiKeyValue()
    const requestStatement = `In Azure, I am creating a resource '${resourceCreationHeading}' .Please provide information of all the properties, without intro or outro`
    try {

        const chatResponse = await client.chat.completions.create({
            messages: [{ role: 'user', content: requestStatement }],
            model: 'gpt-4'
        })
        if (chatResponse) {
            return chatResponse.choices[0].message.content
        }
        return chatResponse
    }
    catch (ex) {
        return ex
    }

}