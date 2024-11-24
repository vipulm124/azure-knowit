/* global chrome */
export const chromeHelper = () =>{
    return{
        setApiKeyValue: async(apiKey: string) =>{
            if (chrome && chrome.storage) {
                chrome.storage.local.set({ myApiKey: apiKey });
              } else {
                console.error('Chrome storage API is not available');
              }
        },

        getApiKeyValue: async() =>{
            const keyValue = await chrome.storage.local.get('myApiKey')
            return keyValue['myApiKey']
        }
    }
}