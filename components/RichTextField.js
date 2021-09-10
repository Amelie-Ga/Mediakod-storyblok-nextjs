/*
const StoryblokClient = require('storyblok-js-client')
 
let Storyblok = new StoryblokClient({
  accessToken: '9wcJu9VBMThoyv5u8WBVJwtt'
})
 
function createMarkup(storyblokHTML) {
  return {
    __html: Storyblok.richTextResolver.render(storyblokHTML),
  }
}
 
const RichTextField = ({ data }) => {
  return <div dangerouslySetInnerHTML={createMarkup(data)} />
}
 
export default RichTextField
*/