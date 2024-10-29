import { extendTheme } from "@chakra-ui/react"
import { withProse } from "@nikolovlazar/chakra-ui-prose"

const theme = extendTheme(
  {
    fonts: {
      heading: "'Lora', serif",
      body: "'Lora', serif",
    },
    styles: {
      global: {
        body: {
          bg: 'white',
        },
      },
    },
    config: {
      initialColorMode: 'light',
      useSystemColorMode: false,
    },
  },
  withProse()
)

export default theme