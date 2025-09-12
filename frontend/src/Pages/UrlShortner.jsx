import { Stack, TextInput } from '@mantine/core'
import React from 'react'

const UrlShortner = () => {
  return (
    <div>
      <Stack>
        <Text size ='30px'>Shorten Url Here</Text>
            <TextInput
    label="Original Url"
    withAsterisk
    onChange={(e) => setOriginalUrl(e.target.value)}
    value={originalUrl}
    />
    <TextInput
label="Customize Your Url (Optional)"
withAsterisk
onChange={(e) => setCustomLink(e.target.value)}
value={customLink}
/>
<TextInput
label="Title (Optional)"
withAsterisk
onChange={(e) => setTitle(e. target. value) } />
<TextInput
label="Date of expiry (optional)"
onChange={(e)=> setExpiry(e.target.value)}
value={expiry}
type='date'
/>
<Button variant='outline' disabled={!originalUrl}>Generate short url</Button>
      </Stack>
    </div>
  )
}

export default UrlShortner
